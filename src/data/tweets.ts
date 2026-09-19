import type { Tweet } from "../types/Tweet";

export const tweets: Tweet[] = [
  {
    id: crypto.randomUUID(),
    authorName: "Ada Lovelace",
    authorHandle: "ada_lovelace",
    content: "Je viens de terminer le premier algorithme destiné à être exécuté par une machine. La machine analytique a un potentiel incroyable ! #programmation #histoire",
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/500px-Ada_Lovelace_portrait.jpg",
      alt: "Portrait d'Ada Lovelace"
    },
    createdAt: new Date("1982-10-10T10:00:00Z")
  },
  {
    id: crypto.randomUUID(),
    authorName: "Grace Hopper",
    authorHandle: "grace_hopper",
    content: "Nous avons trouvé un vrai 'bug' dans le système aujourd'hui. Une phalène s'était coincée dans le relais 70 du panneau F. Nous avons dû débugger la machine ! 🐛",
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/5/55/Grace_Hopper.jpg",
      alt: "Portrait de Grace Hopper"
    },
    createdAt: new Date("1986-09-09T15:45:00Z")
  },
  {
    id: crypto.randomUUID(),
    authorName: "Alan Turing",
    authorHandle: "alan_t",
    content: "Je propose de considérer la question : « Les machines peuvent-elles penser ? » Cela devrait commencer par ce que j'appelle le jeu de l'imitation. C'est un jeu joué avec trois personnes, un homme (A), une femme (B) et un interrogateur (C) qui peut être de l'un ou l'autre sexe. L'interrogateur reste dans une pièce à part des deux autres. Le but du jeu pour l'interrogateur est de déterminer lequel des deux est l'homme et lequel est la femme.",
    createdAt: new Date("1992-10-01T09:00:00Z")
  },
  {
    id: crypto.randomUUID(),
    authorName: "Margaret Hamilton",
    authorHandle: "margaret_h",
    content: "Le génie logiciel est tout aussi important que le matériel. Sans notre code, Apollo 11 n'aurait jamais pu atterrir sur la lune en toute sécurité. 🚀",
    createdAt: new Date("1998-07-20T20:17:00Z")
  },
  {
    id: crypto.randomUUID(),
    authorName: "Tim Berners-Lee",
    authorHandle: "timberners_lee",
    content: "Je viens de proposer un nouveau système de gestion de l'information. Je l'appelle le World Wide Web. Voyons si ça prend. 🕸️",
    createdAt: new Date("2001-03-12T12:00:00Z")
  },
  {
    id: crypto.randomUUID(),
    authorName: "Linus Torvalds",
    authorHandle: "linus_torvalds",
    content: "Bonjour à tous, je crée un système d'exploitation libre (juste un hobby, ce ne sera pas grand et professionnel comme GNU) pour les clones 386(486) AT.",
    createdAt: new Date("2005-08-25T20:57:08Z")
  },
  {
    id: crypto.randomUUID(),
    authorName: "Guido van Rossum",
    authorHandle: "gvanrossum",
    content: "J'ai créé Python pour que ce soit un langage facile à lire et à écrire. N'oubliez pas, la lisibilité compte avant tout !",
    createdAt: new Date("2010-02-20T10:00:00Z")
  },
  {
    id: crypto.randomUUID(),
    authorName: "Brendan Eich",
    authorHandle: "brendaneich",
    content: "J'ai écrit un langage de script pour Netscape Navigator en 10 jours. Je pense l'appeler JavaScript. Qu'est-ce qui pourrait mal tourner ?",
    createdAt: new Date("2015-05-23T14:30:00Z")
  },
  {
    id: crypto.randomUUID(),
    authorName: "Dennis Ritchie",
    authorHandle: "dmr",
    content: "UNIX est fondamentalement un système d'exploitation simple, mais il faut être un génie pour comprendre cette simplicité.",
    createdAt: new Date("2019-10-15T09:00:00Z")
  },
  {
    id: crypto.randomUUID(),
    authorName: "Bjarne Stroustrup",
    authorHandle: "stroustrup",
    content: "Il n'y a que deux sortes de langages : ceux dont les gens se plaignent et ceux que personne n'utilise. C++ se porte très bien !",
    createdAt: new Date("2024-10-14T11:00:00Z")
  }
];