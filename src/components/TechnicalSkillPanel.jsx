import React, { useState } from "react";
import { motion } from "framer-motion";

const SkillPanel = ({ color, Icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`h-14 w-14 cursor-pointer flex flex-col justify-center items-center rounded-2xl gap-5 border-2 ${color.border} ${color.shadow}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <Icon size={20} className={color.text} />
      </motion.div>
    </div>
  );
};

export default SkillPanel;
