import type { ReactElement } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { Link, useParams } from "react-router-dom";
import { useTweetsContext } from "../contexts/TweetsContext";
import { TweetsList } from "../components/TweetsList";

export const AuthorPage = (): ReactElement => {
  const { handle } = useParams<{
    handle : string;
  }>();
  const { tweets, toggleLike } = useTweetsContext();
  const tweet = tweets.filter((tweet) => tweet.authorHandle === handle);
  const tweetAuthor = tweet[0]?.authorHandle

  useDocumentTitle(
    tweet ? `${tweetAuthor}` : "Author Introuvable",
  );
  if (tweet === undefined) {
    return (
      <>
        <p>Aucune Author ne correspond à cette adresse</p>
        <Link to="/">Accueil</Link>
      </>
    );
  }
    return (
    <>
    <span>
        <Link to="/">Accueil</Link> / {`Author @${tweetAuthor}`}
    </span>

    <TweetsList onToggleLike={toggleLike} tweets={tweet} />
    </>
    )
};

