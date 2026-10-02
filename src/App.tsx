import { useState, type ReactElement } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import type { Tweet } from "./types/Tweet";
import type { TweetImage } from "./types/TweetImage";
import { initialTweets } from "./data/tweets";
import {
  TweetsContext,
  type TweetsContextValue,
} from "./contexts/TweetsContext";

export default function App(): ReactElement {
  const [tweets, setTweets] = useState<Array<Tweet>>(initialTweets);
  //ajout le 2/10



  const addTweet = (content: string, image?: TweetImage): void => {
    const newTweet: Tweet = {
      id: crypto.randomUUID(),
      authorName: "Vous",
      authorHandle: "vous",
      content,
      ...(image ? { image } : {}),
      createdAt: new Date().toISOString(),
      likes: 0,
      likedByMe: false,
    };
    setTweets((previousTweets) => [newTweet, ...previousTweets]);
  };
  const toggleLike = (id: string): void => {
    setTweets((previousTweets) =>
      previousTweets.map((tweet) =>
        tweet.id === id
          ? {
              ...tweet,
              likedByMe: !tweet.likedByMe,
              likes: tweet.likedByMe ? tweet.likes - 1 : tweet.likes + 1,
            }
          : tweet,
      ),
    );
  };
  const addReply = (parentId : string, content : string, image? : TweetImage) : void => {
    const replyTweet : Tweet = {
      id: crypto.randomUUID(),
      authorName: "Vous",
      authorHandle: "vous",
      content,
      ...(image ? { image } : {}),
      createdAt: new Date().toISOString(),
      likes: 0,
      likedByMe: false,
      parentId
    };
    setTweets((previousTweet) => [replyTweet, ...previousTweet])
  }
  const context: TweetsContextValue = { tweets, addTweet, toggleLike, addReply};
  return (
    <TweetsContext.Provider value={context}>
      <header className="main-head">
        <div className="main-head-site-brand">
          <Link to={"/"}><img className="main-head-site-logo" src="/xyz.png" alt="Logo XYZ" /></Link>
          <h1 className="main-head-site-name">XYZ</h1>
        </div>
        <nav
          className="main-head-site-links"
          aria-label="Navigation principale"
        >
          <Link to="/">Accueil</Link>
          <Link to="/about">À propos</Link>
          <Link to="/likes">vos likes</Link>
        </nav>
      </header>
      <Outlet />
    </TweetsContext.Provider>
  );
}
