import type { ReactElement } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useTweetsContext } from "../contexts/TweetsContext";
import { Link } from "react-router-dom";
import { TweetsList } from "../components/TweetsList";

export const LikedTweetsPage = (): ReactElement => {

  const {tweets, toggleLike} = useTweetsContext();
  const likedTweets = tweets.filter((tweet) => tweet.likedByMe);

  useDocumentTitle("vos likes");

  if(likedTweets.length === 0){
    return(
        <>
        <h1>Vous n'avez pas de liked Tweet pour l'instant</h1>
        <Link to="/">Accueil</Link>
      </>
    )
  }

  return (
    <>
      <h1>Liked Tweets Page</h1>
      <TweetsList onToggleLike={toggleLike} tweets={likedTweets}/>
    </>
  );
};
