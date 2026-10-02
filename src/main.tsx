import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { TweetsMasterPage } from "./pages/TweetsMasterPage.tsx";
import { TweetDetailsPage } from "./pages/TweetDetailsPage.tsx";
import { NotFoundPage } from "./pages/NotFoundPage.tsx";
import { AboutPage } from "./pages/AboutPage.tsx";
import { AuthorPage } from "./pages/AuthorPage.tsx";
import { LikedTweetsPage } from "./pages/LikedTweetsPage.tsx";
const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<TweetsMasterPage />} />
        <Route path="tweet/:id" element={<TweetDetailsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="authors/:handle" element={<AuthorPage/>}/>
        <Route path="likes" element={<LikedTweetsPage/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
);
