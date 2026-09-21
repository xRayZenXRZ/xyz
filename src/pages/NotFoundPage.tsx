import type { ReactElement } from "react";
import { Link } from "react-router-dom";


export const NotFoundPage = (): ReactElement => {
    
    return (
        <>
            <h1>Page introuvable</h1>
            <Link to="/">Retour aux tweets</Link>
        </>
    );
};

