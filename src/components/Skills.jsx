import { useState } from "react";
import TechnicalSkillPanel from "./TechnicalSkillPanel";
import { motion } from "framer-motion";
import { technicalSkills } from "../data/skills";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(technicalSkills[0]);

  return (
    <div className="flex w-full flex-col py-10 xl:py-0 justify-center items-center flex-1 relative">
      <div className="md:absolute md:left-5 md:top-1/4 md:flex-col flex justify-center items-center flex-wrap gap-4 mb-5 md:mb-0">
        {technicalSkills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: index * 0.2,
            }}
            onClick={() => setSelectedSkill(skill)}
            className="cursor-pointer"
          >
            <TechnicalSkillPanel color={skill.color} Icon={skill.Icon} />
          </motion.div>
        ))}
      </div>

      <motion.div className="h-full flex flex-col items-center justify-center relative px-4">
        <motion.h1
        
          className={`absolute text-[80px] md:text-[120px] lg:text-[200px] 
      opacity-40 font-semibold select-none pointer-events-none text-center
      ${selectedSkill?.color?.text}`}
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {selectedSkill.title}
        </motion.h1>

        <motion.h2 className="relative z-10 text-center text-lg sm:text-xl md:text-2xl max-w-3xl spacing">
          {selectedSkill.description}
        </motion.h2>
      </motion.div>

      <motion.div
        key={selectedSkill.title}
        className={`
    ${selectedSkill.color.text}
    text-[200px]
    sm:text-[260px]
    md:text-[360px]
    lg:text-[500px]
  `}
        initial={{ scale: 0, opacity: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }}
        animate={{
          scale: [0, 0.5, 1],
          opacity: [0, 0.5, 1],
          rotateX: [0, 50, 50],
          rotateY: [0, 0, 0],
          rotateZ: [0, 360, 40],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <selectedSkill.Icon />
      </motion.div>
    </div>
  );
};

export default Skills;
