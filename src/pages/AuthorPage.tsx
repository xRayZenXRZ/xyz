import type { ReactElement } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { Link, useParams } from "react-router-dom";
import { useTweetsContext } from "../contexts/TweetsContext";
import { TweetPreview } from "../components/TweetPreview";

export const AuthorPage = (): ReactElement => {
  const { handle } = useParams<{
    handle : string;
  }>();

  const { tweets, toggleLike } = useTweetsContext();
  const tweet = tweets.find((tweet) => tweet.authorHandle === handle);

  useDocumentTitle(
    tweet ? `${tweet.authorHandle}` : "Author Introuvable",
  );
  if (tweet === undefined) {
    return (
      <>
        <p>Cette Author n'existe pas</p>
        <Link to="/">Accueil</Link>
      </>
    );
  }
    return (
    <>
    <span>
        <Link to="/">Accueil</Link> / {`Author ${tweet.authorName}`}
    </span>

    <TweetPreview onToggleLike={toggleLike} tweet={tweet} />
    </>
    )
};

