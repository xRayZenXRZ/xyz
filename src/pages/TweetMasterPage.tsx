import { TweetForm } from "../components/TweetForm";
import { TweetsList } from "../components/TweetsList";
import { useTweetsContext } from "../contexts/TweetsContext";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useState, type ReactElement } from "react";
import type { Tweet } from "../types/Tweet";
export const TweetMasterPage = (): ReactElement => {
  const { tweets, addTweet, toggleLike } = useTweetsContext();
  const rootTweets: Array<Tweet> = tweets.filter(
    (tweet) => tweet.parentId === undefined,
  );
  const [authorFilter, setAuthorFilter] = useState("");
  useDocumentTitle("Accueil");
  const filteredTweets = rootTweets.filter((tweet) =>
    tweet.authorName
      .toLocaleLowerCase("fr-FR")
      .includes(authorFilter.trim().toLocaleLowerCase("fr-FR")),
  );
  const totalLikes = rootTweets.reduce(
    (total, tweet) => total + tweet.likes,
    0,
  );
  return (
    <main className="feed">
      <TweetForm onSubmit={addTweet} />
      <label className="filter-label" htmlFor="author-filter">
        Filtrer par auteur
      </label>
      <input
        className="author-filter"
        id="author-filter"
        type="search"
        placeholder="Filtrer par auteur"
        value={authorFilter}
        onChange={(event) => setAuthorFilter(event.target.value)}
      />
      <p className="feed-summary">
        {rootTweets.length} tweets · {totalLikes} mentions J'aime
      </p>

      <TweetsList onToggleLike={toggleLike} tweets={filteredTweets} />
    </main>
  );
};
