import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
export const AboutPage = (): ReactElement => {
    useDocumentTitle("À propos");
    return (<>
      <h1>About Page</h1>
      
      <Link to="/">Retour aux tweets</Link>
    </>);
};
