import {
  FaReact,
  FaGithub,
  FaJava,
  FaDatabase,
} from "react-icons/fa";
import { VscCoverage } from "react-icons/vsc";

export const technicalSkills = [
  {
    title: "React",
    description: `I used React during my university studies, especially while working on my engineering thesis.
                    It helped me build dynamic and well-structured user interfaces.
                    During my thesis project, I focused on UI/UX principles and responsive design.
                    I also used Tailwind CSS to create clean and responsive layouts.
                    These tools allowed me to develop scalable and maintainable web applications.
                    I continue to work with React, Redux, and Tailwind in my current position.`,
    Icon: FaReact,
    color: {
      border: "border-sky-500",
      shadow: "shadow-sky-500",
      text: "text-sky-500",
    },
  },
  {
    title: "Github",
    description: `I have been using GitHub since my university years.
                      I use it in every project because I understand how important parallel and collaborative work is.
                      I am familiar with working with branches, pull requests, and code reviews.
                      I have also used GitLab on several occasions.
                      Additionally, I have experience working with Bitbucket.`,

    Icon: FaGithub,
    color: {
      border: "border-gray-800",
      shadow: "shadow-gray-800",
      text: "text-gray-800",
    },
  },
  {
    title: "Java",
    description: `During my work with Java, I covered topics such as sockets and graphical libraries like Swing and JavaFX.
                      These technologies helped me understand desktop application development and networking basics.
                      However, my current focus is mainly on backend development with Spring Boot.
                      I use Spring Boot to create REST APIs and structured backend services.
                      At present, I am continuing to deepen my knowledge of the Spring ecosystem.`,

    Icon: FaJava,
    color: {
      border: "border-red-600",
      shadow: "shadow-red-600",
      text: "text-red-600",
    },
  },
  {
    title: "Testing",
    description: `I understand how important application testing is.
                      In my projects and work, I have used tools such as Playwright for end-to-end testing.
                      I also implemented unit tests using JUnit to ensure code correctness.
                      Additionally, I performed integration tests to verify that different parts of the application work together properly.
                      I continue to apply these testing practices in my current projects.`,

    Icon: VscCoverage,
    color: {
      border: "border-green-600",
      shadow: "shadow-green-600",
      text: "text-green-600",
    },
  },
  {
    title: "DB",
    description: `Databases are a fundamental part of a full-stack work.
                      I have experience starting from the basics of SQL and relational database design.
                      I have worked extensively with PostgreSQL for building robust and efficient data-driven applications.
                      In addition, I have used MongoDB for projects requiring flexible, document-based storage.
                      I continue to apply database best practices in all my projects.`,
    Icon: FaDatabase,
    color: {
      border: "border-yellow-600",
      shadow: "shadow-yellow-600",
      text: "text-yellow-600",
    },
  },
];
