import type { Tweet } from "../types/Tweet"
import { TweetPreview } from "./TweetPreview"

type TweetsListProps = {

    tweets : Array<Tweet>

}

export function TweetsList ({ tweets } : TweetsListProps ) {

    // Chaque tweet est transformé en composant TweetPreview.
    // Le tweet courant est transmis à TweetPreview avec la prop « tweet ».
      const listTweets = [...tweets]
        .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
        .map((tweet) => (
        // tweet.id identifie chaque élément de manière unique et stable.
        // React s'en sert pour suivre efficacement les éléments de la liste.
            <TweetPreview key={tweet.id} tweet={tweet} />
        ));

    return (
        <>
            {listTweets}
        </>
    )
}