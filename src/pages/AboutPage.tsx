import type { ReactElement } from "react";
import { Link } from "react-router-dom";


export const AboutPage = (): ReactElement => {
    
    return (
        <>
            <h1>About Page</h1>
            <Link to="/">Retour aux tweets</Link>
        </>
    );
};

