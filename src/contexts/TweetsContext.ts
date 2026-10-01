import { createContext, useContext } from "react";
import type { Tweet } from "../types/Tweet";
import type { TweetImage } from "../types/TweetImage";
export type TweetsContextValue = {
  tweets: Array<Tweet>;
  addTweet: (content: string, image?: TweetImage) => void;
  toggleLike: (id: string) => void;
  addReply(parentId : string, content : string, image? : TweetImage) : void ;
};
export const TweetsContext = createContext<TweetsContextValue | undefined>(
  undefined,
);
export const useTweetsContext = (): TweetsContextValue => {
  const context = useContext(TweetsContext);
  if (context === undefined) {
    throw new Error("TweetsContext.Provider manquant");
  }
  return context;
};
