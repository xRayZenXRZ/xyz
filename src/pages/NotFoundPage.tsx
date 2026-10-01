import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
export const NotFoundPage = (): ReactElement => {
  useDocumentTitle("Page introuvable");
  return (
    <>
      <h1>Page introuvable</h1>

      <Link to="/">Retour aux tweets</Link>
    </>
  );
};
