import type { Tweet } from "../types/Tweet";

export const tweets: Tweet[] = [
  {
    id: "1",
    authorName: "Dev France",
    authorHandle: "dev_fr",
    content:
      "Bienvenue sur notre nouveau fil d'actualités dédié au développement web !",
    createdAt: "2026-09-14T08:00:00.000Z",
  },
  {
    id: "2",
    authorName: "Sarah Connor",
    authorHandle: "s_connor",
    content:
      "Aujourd'hui, j'ai enfin réussi à configurer mon environnement React avec TypeScript sans aucune erreur de build. C'est une petite victoire mais ça fait tellement plaisir après trois heures de recherche intensive !",
    image: {
      url: "https://picsum.photos/id/1/600/400",
      alt: "Un bureau avec un ordinateur affichant du code",
    },
    createdAt: "2026-09-14T08:30:00.000Z",
  },
  {
    id: "3",
    authorName: "Tech News",
    authorHandle: "technews_official",
    content:
      "Voici le tweet long requis pour les tests : La nouvelle version de TypeScript vient de sortir et elle apporte des améliorations majeures sur l'inférence de types, la vitesse de compilation ainsi que sur la gestion des modules ES. Les développeurs React et Vue vont particulièrement apprécier les nouvelles fonctionnalités d'auto-complétion avancée dans VS Code !", // 326 caractères
    createdAt: "2026-09-14T09:15:00.000Z",
  },
  {
    id: "4",
    authorName: "Lucas Martin",
    authorHandle: "luke_sky",
    content:
      "Pause café avant d'attaquer la deuxième partie du TD sur l'affichage des tweets.",
    image: {
      url: "https://picsum.photos/id/1060/600/400",
      alt: "Une tasse de café fumante",
    },
    createdAt: "2026-09-14T09:45:00.000Z",
  },
  {
    id: "5",
    authorName: "Code Academy",
    authorHandle: "code_acad",
    content:
      "Rappel : la propreté du code est aussi importante que son fonctionnement.",
    createdAt: "2026-09-14T10:00:00.000Z",
  },
  {
    id: "6",
    authorName: "Emma Watson",
    authorHandle: "emma_w",
    content:
      "Quelqu'un a une bonne ressource à recommander sur Tailwind CSS pour débutants ?",
    createdAt: "2026-09-14T10:12:00.000Z",
  },
  {
    id: "7",
    authorName: "Geek Daily",
    authorHandle: "geekdaily",
    content:
      "Découvrez notre sélection des 10 meilleurs raccourcis VS Code à maîtriser absolument.",
    image: {
      url: "https://picsum.photos/id/180/600/400",
      alt: "Un ordinateur portable ouvert dans la nuit",
    },
    createdAt: "2026-09-14T10:30:00.000Z",
  },
  {
    id: "8",
    authorName: "Alexandre",
    authorHandle: "alex_dev",
    content:
      "Le composant TweetCard prend forme. Prochaine étape : la gestion du bouton de favori !",
    createdAt: "2026-09-14T10:45:00.000Z",
  },
  {
    id: "9",
    authorName: "Design System Hub",
    authorHandle: "ds_hub",
    content:
      "Les variables CSS vs les Utility Classes : quel est votre choix pour un projet d'envergure ?",
    createdAt: "2026-09-14T11:00:00.000Z",
  },
  {
    id: "10",
    authorName: "Clara Bennett",
    authorHandle: "clara_b",
    content:
      "Fin de la session de code pour aujourd'hui. Bon courage à tous pour vos projets !",
    createdAt: "2026-09-14T11:15:00.000Z",
  },
];
