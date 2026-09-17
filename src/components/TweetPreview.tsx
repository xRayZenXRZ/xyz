import { useState } from "react";
import type { Tweet } from "../types/Tweet";

type TweetPreviewProps = {
    tweet : Tweet 
}


const ReadMore = ({ text } : {text : string} ) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const isLongText = text.length > 180
    const displayedText = isExpanded || !isLongText ? text : `${text.slice(0, 180)}...`

    return (
        <>
            <span>{displayedText}</span>
            {isLongText && (
                <button
                    type="button"
                    onClick={() => setIsExpanded((previous) => !previous)}
                >
                    {isExpanded ? "Voir moins" : "Voir plus"}
                </button>
            )}
        </>
    )
}

export function TweetPreview({ tweet } : TweetPreviewProps) {

    return (
        <div>
            <p> authorname : {tweet.authorName}</p>
            <p> authorHandle : @{tweet.authorHandle}</p>
            <p> created at : {new Date(tweet.createdAt).toLocaleDateString()}</p>
            <p>content : <ReadMore text={tweet.content} /></p>
            {tweet.image && (
                <img src={tweet.image.url} alt={tweet.image.alt} className="tweet-image"/>
            )}
        </div>
    )
}
