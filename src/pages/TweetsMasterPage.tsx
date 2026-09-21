import { tweets } from "../data/tweets";
import { TweetsList } from "../components/TweetsList";
import type { Tweet } from "../types/Tweet";

export function TweetMasterPage() {

    const initialTweets : Array<Tweet>= [...tweets]

    return(
        <>
            <h2 className="main-tweet-length">{tweets.length} tweets</h2>
            {TweetsList({tweets : initialTweets})}
        </>
    )
}
