import { useState, type ReactElement } from "react";
import type { Tweet } from "../types/Tweet";
import { Link, useLocation } from "react-router-dom";
type TweetPreviewProps = {
    tweet: Tweet;
    onToggleLike: (id: string) => void;
};
const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
};
const Avatar = ({ authorName }: {
    authorName: string;
}): ReactElement => {
    const names = authorName.split(" ");
    const firstName = names[0]?.[0] ?? "";
    const lastName = names[1] === undefined ? "" : names[1][0];
    return (<div className="tweet-avatar">
      <span className="tweet-avatar-initials">{firstName + lastName}</span>
    </div>);
};
const ReadMore = ({ text }: {
    text: string;
}): ReactElement => {
    const [isExpanded, setIsExpanded] = useState(false);
    const isLongText = text.length > 180;
    const displayedText = isExpanded || !isLongText ? text : `${text.slice(0, 180)}...`;
    return (<>
      <span>{displayedText}</span>
      {isLongText && (<button className="tweet-content-more-button" type="button" onClick={() => setIsExpanded((previous) => !previous)}>
          {isExpanded ? "Voir moins" : "Voir plus"}
        </button>)}
    </>);
};
export const TweetPreview = ({ tweet, onToggleLike }: TweetPreviewProps): ReactElement => {
    const location = useLocation();
    const isTweetPage = location.pathname === `/tweet/${tweet.id}`;
    return (<div className="tweet">
      <Avatar authorName={tweet.authorName}/>
      <div className="tweet-body">
        <div className="tweet-meta">
          <span className="tweet-author">{tweet.authorName}</span>
          <span className="tweet-authorhandle">@{tweet.authorHandle}</span>
          <time className="tweet-created-at" dateTime={new Date(tweet.createdAt).toISOString()}>
            {new Date(tweet.createdAt).toLocaleString("fr-FR", options)}
          </time>
        </div>
        
        {tweet.image && (<Link className="tweet-image-link" to={`/tweet/${tweet.id}`}>
            <img className="tweet-image" src={tweet.image.url} alt={tweet.image.alt}/>
          </Link>)}
        <p className="tweet-content">
          <ReadMore text={tweet.content}/>
        </p>
        
        <button className={`tweet-like-button ${tweet.likedByMe ? "is-liked" : "is-not-liked"}`} type="button" aria-pressed={tweet.likedByMe} onClick={() => onToggleLike(tweet.id)}>
          {tweet.likedByMe ? "Je n'aime plus" : "J'aime"}{" "}
          {tweet.likes > 0 ? `(${tweet.likes})` : ""}
        </button>
        {!isTweetPage && (<p className="tweet-discussion">
            <Link className="tweet-link" to={`/tweet/${tweet.id}`}>
              Voir la discussion
            </Link>
          </p>)}
      </div>
    </div>);
};
