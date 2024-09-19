import React, { useState } from "react";
import { motion } from "framer-motion";

const SkillPanel = ({ color, title, Icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`h-56 w-44 flex flex-col justify-center items-center shadow-lg rounded-2xl gap-5 border-2 ${color.border} ${color.shadow}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <Icon size={100} className={color.text} />
      </motion.div>
      <h2 className="text-xl">{title}</h2>
    </div>
  );
};

export default SkillPanel;
