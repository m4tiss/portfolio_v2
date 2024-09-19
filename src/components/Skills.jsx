import TechnicalSkillPanel from "./TechnicalSkillPanel";
import PersonalSkillPanel from "./PersonalSkillPanel";
import { FaReact, FaGithub, FaNodeJs, FaJava,FaUserTie } from "react-icons/fa";
import { RiTailwindCssFill,RiQuestionMark,RiTeamFill,RiEnglishInput } from "react-icons/ri";

import { motion } from "framer-motion";

const technicalSkills = [
  {
    title: "React",
    Icon: FaReact,
    color: {
      border: "border-sky-500",
      shadow: "shadow-sky-500",
      text: "text-sky-500",
    },
  },
  {
    title: "Tailwind",
    Icon: RiTailwindCssFill,
    color: {
      border: "border-sky-300",
      shadow: "shadow-sky-300",
      text: "text-sky-300",
    },
  },
  {
    title: "Github",
    Icon: FaGithub,
    color: {
      border: "border-gray-800",
      shadow: "shadow-gray-800",
      text: "text-gray-800",
    },
  },
  {
    title: "NodeJS",
    Icon: FaNodeJs,
    color: {
      border: "border-green-600",
      shadow: "shadow-green-600",
      text: "text-green-600",
    },
  },
  {
    title: "Java",
    Icon: FaJava,
    color: {
      border: "border-red-600",
      shadow: "shadow-red-600",
      text: "text-red-600",
    },
  },
];
const personalSkills = [
  {
    title: "Team Work",
    Icon: RiTeamFill,
  },
  {
    title: "Problem Solving",
    Icon: RiQuestionMark,
  },
  {
    title: "Negotiation",
    Icon: FaUserTie,
  },
  {
    title: "English B2",
    Icon: RiEnglishInput,
  },
  
];

const Skills = () => {
  return (
    <div className="flex w-full flex-col py-10 xl:py-0 justify-center items-center flex-grow gap-16">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 8,
          duration: 0.5,
        }}
        className="text-2xl text-pink font-extrabold"
      >
        TECHNICAL SKILLS
      </motion.h2>
      <div className="w-full xl:w-1/2 flex-col xl:flex-row flex justify-center items-center gap-10">
        {technicalSkills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: index * 0.5,
            }}
          >
            <TechnicalSkillPanel
              color={skill.color}
              title={skill.title}
              Icon={skill.Icon}
            />
          </motion.div>
        ))}
      </div>
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 8,
          duration: 0.5,
        }}
        className="text-2xl text-pink font-extrabold"
      >
        PERSONAL SKILLS
      </motion.h2>
      <div className="w-full xl:w-1/2 flex-col xl:flex-row flex justify-center items-center gap-10">
        {personalSkills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: index * 0.5,
            }}
          >
            <PersonalSkillPanel title={skill.title} Icon={skill.Icon} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
