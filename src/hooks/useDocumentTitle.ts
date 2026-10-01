import { useEffect } from "react";
export const useDocumentTitle = (titre: string): void => {
    useEffect(() => {
        document.title = `${titre} | XYZ`;
    }, [titre]);
};
