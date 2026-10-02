import { TweetForm } from "../components/TweetForm";
import { TweetsList } from "../components/TweetsList";
import { useTweetsContext } from "../contexts/TweetsContext";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useState, type ReactElement } from "react";
import type { Tweet } from "../types/Tweet";

type sortOrder = "recent" | "oldest" | "likes";

export const TweetsMasterPage = (): ReactElement => {
  const { tweets, addTweet, toggleLike } = useTweetsContext();
  const rootTweets: Array<Tweet> = tweets.filter(
    (tweet) => tweet.parentId === undefined,
  );
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState<sortOrder>("recent");
  const normalizedQuery = query.trim().toLocaleLowerCase("fr-FR");

  useDocumentTitle("Accueil");

  const filteredTweets = rootTweets.filter(
    (tweet) =>
      tweet.authorName.toLocaleLowerCase("fr-FR").includes(normalizedQuery) ||
      tweet.authorHandle.toLocaleLowerCase("fr-FR").includes(normalizedQuery) ||
      tweet.content.toLocaleLowerCase("fr-FR").includes(normalizedQuery),
  );

  const totalLikes = filteredTweets.reduce(
    (total, tweet) => total + tweet.likes,
    0,
  );

  const display = [...filteredTweets].sort((a, b) => {
    switch (order) {
      case "recent":
        return b.createdAt.localeCompare(a.createdAt);
      case "oldest":
        return a.createdAt.localeCompare(b.createdAt);
      case "likes":
        return b.likes - a.likes;
    }
  });

  return (
    <main className="feed">
      <TweetForm onSubmit={addTweet} />
      <label className="filter-label" htmlFor="author-filter">
        Rechercher un tweet
      </label>
      <input
        className="author-filter"
        id="author-filter"
        type="search"
        placeholder="Rechercher un tweet"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <label className="filter-label" htmlFor="sort-order">Trier par</label>
      <select
        className="sort-order"
        id="sort-order"
        value={order}
        onChange={(event) => setOrder(event.target.value as sortOrder)}
      >
        <option value="recent">du plus récent au plus ancien</option>
        <option value="oldest">du plus ancien au plus récent</option>
        <option value="likes">des plus aimés aux moins aimés</option>
      </select>
      <p className="feed-summary">résultats : {display.length}</p>
      <p className="feed-summary">
        Total du fil : {totalLikes} mentions J'aime
      </p>
      {display.length === 0 ? (
        <p>Aucun tweet ne correspond</p>
      ) : (
        <TweetsList onToggleLike={toggleLike} tweets={display} />
      )}
    </main>
  );
};
