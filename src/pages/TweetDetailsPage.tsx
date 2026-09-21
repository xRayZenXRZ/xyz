import type { ReactElement } from "react";
import { Link, useParams } from "react-router-dom";
import type { Tweet } from "../types/Tweet";
import { tweets } from "../data/tweets";
import { TweetPreview } from "../components/TweetPreview";



export const TweetDetailsPage = (): ReactElement => {
    
    const { id } = useParams<{ id: string }>();
    const tweet : Tweet | undefined = tweets.find((tweet) => tweet.id === id);
    const reponse = tweets.find((tweet)=> tweet.parentId === id)

    if (tweet === undefined) {
        return <p>Ce tweet n'existe pas</p>;
    }
    return (
        <>
            <span className="TweetDetailsPage-tree">
                <Link to="/">Acceuil</Link> / {`tweet de ${tweet.authorName}`}
            </span>
            <TweetPreview tweet={tweet}/>
            {!reponse && (
                <span> Aucune réponse pour le moment</span>
            )}
        </>
    );
};

