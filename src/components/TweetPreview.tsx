import { useState } from "react";
import type { Tweet } from "../types/Tweet";
import { Link, useLocation } from "react-router-dom";

type TweetPreviewProps = {
    tweet : Tweet 
}

const options : Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour : "numeric",
    minute : "numeric"
};

const Avatar = ({authorName} : {authorName : string}) => {
    const names = authorName.split(' ')
    const firstName = names[0]?.[0] ?? ""
    const lastName = names[1] === undefined ? "" : names[1][0]

    return (
        <div className="tweet-avatar">
                <span className="tweet-avatar-initials">
                    {firstName + lastName}
                </span>
        </div>
    )
}



const ReadMore = ({ text } : {text : string} ) => {
    // isExpanded est un état React : sa modification déclenche un nouveau rendu
    // afin d'afficher ou de masquer le texte complet.
    const [isExpanded, setIsExpanded] = useState(false)
    const isLongText = text.length > 180
    const displayedText = isExpanded || !isLongText ? text : `${text.slice(0, 180)}...`

    return (
        <>
            <span>{displayedText}</span>
            {isLongText && (
                <button className="tweet-content-more-button" type="button" onClick={() => setIsExpanded((previous) => !previous)}>
                    {isExpanded ? "Voir moins" : "Voir plus"}
                </button>
            )}
        </>
    )
}

export function TweetPreview({ tweet } : TweetPreviewProps) {
    const location = useLocation()
    const isTweetPage = location.pathname === `/tweet/${tweet.id}`

    return (
        <div className="tweet">
            <Avatar authorName={tweet.authorName}/>
            <span className="tweet-author">{tweet.authorName}</span>
            <span className="tweet-authorhandle">@{tweet.authorHandle}</span>
            <span className="tweet-created-at">{tweet.createdAt.toLocaleDateString("fr-FR",  options)}</span>
            {/* image est optionnelle : la balise img n'est rendue que si elle existe. */}
            {tweet.image && (
                <Link to={`/tweet/${tweet.id}`}>
                    <img className="tweet-image" src={tweet.image.url} alt={tweet.image.alt}/>
                </Link>
            )}
            <p className="tweet-content">
                <ReadMore text={tweet.content}/>
            </p>
            {!tweet.image && !isTweetPage && (
                <Link className="tweet-link" to={`/tweet/${tweet.id}`}>Voir la discussion</Link>
            )}
            <hr className="tweet-seperator"/>
        </div>
    )
}
