import type { ReactElement } from "react";
import type { Tweet } from "../types/Tweet";
import { TweetPreview } from "./TweetPreview";
type TweetsListProps = {
  tweets: Array<Tweet>;
  onToggleLike: (id: string) => void;
};
export const TweetsList = ({
  tweets,
  onToggleLike,
}: TweetsListProps): ReactElement => {
  const listTweets = [...tweets]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .map((tweet) => (
      <TweetPreview onToggleLike={onToggleLike} key={tweet.id} tweet={tweet} />
    ));
  return <>{listTweets}</>;
};
