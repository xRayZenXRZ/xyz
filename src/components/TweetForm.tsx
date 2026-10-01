import { type ReactElement, useState, type SubmitEvent } from "react";
import type { TweetImage } from "../types/TweetImage";
type TweetFormProps = {
    onSubmit: (content: string, image?: TweetImage) => void;
};
const CONTENT_MAX_LENGTH = 280;
export const TweetForm = ({ onSubmit }: TweetFormProps): ReactElement => {
    const [content, setContent] = useState<string>("");
    const [hasEditedContent, setHasEditedContent] = useState(false);
    const [includeImage, setIncludeImage] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const [imageAlt, setImageAlt] = useState("");
    const normalizedContent: string = content.trim();
    const remainingCharacters: number = CONTENT_MAX_LENGTH - content.length;
    let isValidImageUrl = false;
    try {
        isValidImageUrl = new URL(imageUrl).protocol === "https:";
    }
    catch {
        isValidImageUrl = false;
    }
    const isValidImage = !includeImage || (isValidImageUrl && imageAlt.trim().length > 0);
    const isValid: boolean = normalizedContent.length > 0 && remainingCharacters >= 0 && isValidImage;
    const showContentError = hasEditedContent && normalizedContent.length === 0;
    const handleSubmit = (event: SubmitEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (!isValid) {
            return;
        }
        const image = includeImage
            ? { url: imageUrl.trim(), alt: imageAlt.trim() }
            : undefined;
        onSubmit(normalizedContent, image);
        setContent("");
        setHasEditedContent(false);
        setIncludeImage(false);
        setImageUrl("");
        setImageAlt("");
    };
    return (<form className="tweet-composer" onSubmit={handleSubmit}>
      
      <label className="visually-hidden" htmlFor="tweet-content">
        Votre message
      </label>
      <textarea className="tweet-form" id="tweet-content" placeholder="Quoi de neuf ?" value={content} onChange={(event) => {
            setContent(event.target.value);
            setHasEditedContent(true);
        }} maxLength={CONTENT_MAX_LENGTH} aria-invalid={showContentError} aria-describedby={showContentError ? "tweet-content-error" : undefined}/>
      
      {showContentError && (<p className="form-error" id="tweet-content-error">
          Le message ne peut pas être vide.
        </p>)}
      <label className="image-option">
        <input type="checkbox" checked={includeImage} onChange={(event) => {
            const checked = event.target.checked;
            setIncludeImage(checked);
            if (!checked) {
                setImageUrl("");
                setImageAlt("");
            }
        }}/>
        Ajouter une image
      </label>
      
      {includeImage && (<div className="image-fields">
          <label htmlFor="tweet-image-url">URL HTTPS de l'image</label>
          <input id="tweet-image-url" type="url" value={imageUrl} onChange={(event) => setImageUrl(event.target.value)} placeholder="https://exemple.fr/image.jpg" aria-invalid={imageUrl.length > 0 && !isValidImageUrl}/>
          <label htmlFor="tweet-image-alt">Texte alternatif</label>
          <input id="tweet-image-alt" type="text" value={imageAlt} onChange={(event) => setImageAlt(event.target.value)} aria-invalid={imageAlt.length > 0 && imageAlt.trim().length === 0}/>
          {imageUrl.length > 0 && !isValidImageUrl && (<p className="form-error">Saisissez une URL HTTPS valide.</p>)}
          {imageAlt.length > 0 && imageAlt.trim().length === 0 && (<p className="form-error">
              Le texte alternatif ne peut pas être vide.
            </p>)}
        </div>)}
      <div className="composer-footer">
        
        <span>{remainingCharacters} caractères restants</span>
        <button className="publish-button" type="submit" disabled={!isValid}>
          Publier
        </button>
      </div>
    </form>);
};
