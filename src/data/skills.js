import { FaReact, FaGithub, FaNodeJs, FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export const technicalSkills = [
  {
    title: "React",
      description: `React to biblioteka JavaScript stworzona przez Facebooka, która umożliwia tworzenie nowoczesnych aplikacji webowych w sposób modularny i skalowalny. Tworzę komponenty wielokrotnego użytku, dbając o ich czytelność i łatwość utrzymania. Wykorzystuję nowoczesne hooki, takie jak useState, useEffect i useReducer, do zarządzania stanem lokalnym i globalnym aplikacji. Integruję React z bibliotekami UI, np. TailwindCSS, oraz stosuję Framer Motion do animacji interfejsu. Regularnie optymalizuję wydajność aplikacji, stosując lazy loading, memoizację komponentów oraz dobre praktyki renderowania.`,
Icon: FaReact,
    color: {
      border: "border-sky-500",
      shadow: "shadow-sky-500",
      text: "text-sky-500",
    },
  },
  {
    title: "Tailwind",
        description: `TailwindCSS to framework CSS, który pozwala tworzyć w pełni responsywne i nowoczesne style w aplikacjach webowych. Dzięki jego klasom użytkownik może szybko prototypować interfejsy i utrzymać spójny design. Tworzę elastyczne komponenty UI, które łatwo dostosować do różnych ekranów i urządzeń. Stosuję Tailwind wraz z React, aby budować interaktywne i estetyczne aplikacje. Regularnie wykorzystuję funkcje takie jak dark mode, flexbox i grid, aby tworzyć wydajne i eleganckie layouty.`,

    Icon: RiTailwindCssFill,
    color: {
      border: "border-sky-300",
      shadow: "shadow-sky-300",
      text: "text-sky-300",
    },
  },
  {
    title: "Github",
        description: `GitHub to platforma do zarządzania kodem źródłowym i współpracy w zespołach programistycznych. Regularnie korzystam z GitHub do tworzenia branchy, pull requestów i zarządzania workflow CI/CD. Dzięki temu mogę łatwo integrować zmiany zespołu i śledzić historię projektu. Posiadam doświadczenie w pracy z repozytoriami publicznymi i prywatnymi, dbając o porządek w commitach i dokumentacji. Używam GitHub także do publikowania projektów i współdzielenia ich z innymi programistami.`,

    Icon: FaGithub,
    color: {
      border: "border-gray-800",
      shadow: "shadow-gray-800",
      text: "text-gray-800",
    },
  },
  {
    title: "NodeJS",
        description: `NodeJS to środowisko JavaScript pozwalające tworzyć backend aplikacji webowych. Posiadam doświadczenie w budowaniu serwerów, API i obsłudze baz danych w NodeJS. Tworzę aplikacje, które efektywnie zarządzają danymi i zapewniają szybką komunikację między frontendem a backendem. Wykorzystuję popularne biblioteki i frameworki NodeJS, takie jak Express, do tworzenia skalowalnych aplikacji. Dbam także o bezpieczeństwo aplikacji, obsługując uwierzytelnianie, autoryzację i walidację danych.`,

    Icon: FaNodeJs,
    color: {
      border: "border-green-600",
      shadow: "shadow-green-600",
      text: "text-green-600",
    },
  },
  {
    title: "Java",
        description: `Java to język programowania używany do tworzenia aplikacji desktopowych, serwerowych i mobilnych. Posiadam doświadczenie w pisaniu aplikacji zgodnie z najlepszymi wzorcami projektowymi i zasadami SOLID. Tworzę wydajne programy, które łatwo utrzymać i rozbudowywać. Korzystam z Javy do integracji z bazami danych i tworzenia logiki biznesowej aplikacji. Regularnie testuję i optymalizuję kod, aby zapewnić jego stabilność i wysoką jakość.`,

    Icon: FaJava,
    color: {
      border: "border-red-600",
      shadow: "shadow-red-600",
      text: "text-red-600",
    },
  },
  
];
