import type { ReactElement } from "react";
import { Link, useParams } from "react-router-dom";
import { TweetPreview } from "../components/TweetPreview";
import { useTweetsContext } from "../contexts/TweetsContext";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
export const TweetDetailsPage = (): ReactElement => {
    const { id } = useParams<{
        id: string;
    }>();
    const { tweets, toggleLike } = useTweetsContext();
    const tweet = tweets.find((tweet) => tweet.id === id);
    const reponses = tweets.filter((tweet) => tweet.parentId === id);
    useDocumentTitle(tweet ? `Tweet de ${tweet.authorName}` : "Tweet introuvable");
    if (tweet === undefined) {
        return (
        <>
        <p>Ce tweet n'existe pas</p>
        <Link to="/">Accueil</Link>
        </>
      )
        
    }
    return (<>
      <span>
        <Link to="/">Accueil</Link> / {`tweet de ${tweet.authorName}`}
      </span>
        
      <TweetPreview onToggleLike={toggleLike} tweet={tweet}/>
      {reponses.length === 0 ? (<span>Aucune réponse pour le moment</span>) : (reponses.map((reponse) => (<TweetPreview onToggleLike={toggleLike} key={reponse.id} tweet={reponse}/>)))}
    </>);
};
