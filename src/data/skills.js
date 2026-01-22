import github from "../icons/github.png";
import react from "../icons/react.png";
import java from "../icons/java.png";
import testing from "../icons/testing.png";
import db from "../icons/db.png";

const skills = [
  {
    label: "Github",
    color: "#111111",
    icon: github,
    pos: [0, 2, 2],
    description: `Mainly GitHub for version control, with some experience in GitLab and Bitbucket.`,
  },
  {
    label: "React",
    color: "#318CE7",
    icon: react,
    pos: [2, 2, 2],
    description: `I mainly use React and Tailwind CSS, with experience from university projects and my current work.`,
  },
  {
    label: "Java",
    color: "#C51E3A",
    icon: java,
    pos: [2, 0, 2],
    description: `I have worked with Java, including Swing and JavaFX, but now I mainly use Spring Boot for REST APIs.`,
  },
  {
    label: "Testing",
    color: "#138808",
    icon: testing,
    pos: [0, 0, 2],
    description: `I use Playwright, JUnit5, and integration tests to ensure application quality.`,
  },
  {
    label: "Databases",
    color: "#DBB000",
    icon: db,
    pos: [1, 1, 2],
    description: `I have experience with SQL and recently work mainly with PostgreSQL.`,
  },
];

export default skills;