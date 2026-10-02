import type { ReactElement } from "react";
import { Link, useParams } from "react-router-dom";
import { TweetPreview } from "../components/TweetPreview";
import { useTweetsContext } from "../contexts/TweetsContext";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { TweetForm } from "../components/TweetForm";
export const TweetDetailsPage = (): ReactElement => {
  const { id } = useParams<{
    id: string;
  }>();
  const { tweets, toggleLike, addReply } = useTweetsContext();
  const tweet = tweets.find((tweet) => tweet.id === id);
  const reponses = tweets.filter((tweet) => tweet.parentId === id);

  useDocumentTitle(
    tweet ? `Tweet de ${tweet.authorName}` : "Tweet introuvable",
  );
  if (tweet === undefined) {
    return (
      <>
        <h1>Ce tweet n'existe pas</h1>
        <Link to="/">Accueil</Link>
      </>
    );
  }
  return (
    <>
      <span className="route">
        <Link to="/">Accueil</Link> / {`tweet de ${tweet.authorName}`}
      </span>

      <TweetPreview onToggleLike={toggleLike} tweet={tweet} />
      {reponses.length === 0 ? (
        <span>Aucune réponse pour le moment</span>
      ) : (
        reponses.map((reponse) => (
          <TweetPreview
            onToggleLike={toggleLike}
            key={reponse.id}
            tweet={reponse}
          />
        ))
      )}
      <TweetForm
        label={`Répondre à ${tweet.authorName}`}
        onSubmit={(content, attachment) =>
          addReply(tweet.id, content, attachment)
        }
      />
    </>
  );
};
