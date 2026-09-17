import type { Tweet } from "../types/Tweet"
import { TweetPreview } from "./TweetPreview"

type TweetsListProps = {

    tweets : Array<Tweet>

}

export function TweetsList ({ tweets } : TweetsListProps ) {

    const listTweets = tweets.map((tweet) =>
        <TweetPreview key={tweet.id} tweet={tweet} />
    )

    return (
        <>
            {listTweets}
        </>
    )
}