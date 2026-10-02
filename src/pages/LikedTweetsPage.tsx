import type { ReactElement } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useTweetsContext } from "../contexts/TweetsContext";
import { TweetPreview } from "../components/TweetPreview";
import { Link } from "react-router-dom";

export const LikedTweetsPage = (): ReactElement => {

  const {tweets, toggleLike} = useTweetsContext();
  const likedTweets = tweets.filter((tweet) => tweet.likedByMe);

  useDocumentTitle("vos likes");

  if(likedTweets.length === 0){
    return(
        <>
        <p>Vous n'avez pas de liked Tweet pour l'instant</p>
        <Link to="/">Accueil</Link>
      </>
    )
  }

  return (
    <>
      <h1>Liked Tweets Page</h1>
      {likedTweets.map((tweet) => (
        <TweetPreview key={tweet.id} onToggleLike={toggleLike} tweet={tweet} />
      ))}
    </>
  );
};
