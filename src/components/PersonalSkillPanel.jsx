import React, { useState } from "react";
import { motion } from "framer-motion";

const PersonalSkillPanel = ({ color, title, Icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`h-52 w-h-52 aspect-square rounded-full flex flex-col justify-center items-center shadow-lg gap-5 border-2 bg-pink`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <Icon size={80} className="text-white" />
      </motion.div>
      <h2 className="text-lg text-center px-5 text-white">{title}</h2>
    </div>
  );
};

export default PersonalSkillPanel;
