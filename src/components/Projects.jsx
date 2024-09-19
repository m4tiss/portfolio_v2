import rosblysk from "../images/projects/rosblysk.png";
import rosblyskHover from "../images/projects/rosblyskHover.png";
import rosblyskIcon from "../icons/rosblyskIcon.png";
import { motion } from "framer-motion";
import ProjectPanel from "./ProjectPanel";
const Projects = () => {
  return (
    <div className="flex items-center flex-grow flex-col gap-10 py-10">
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
        COMMERCIAL
      </motion.h2>
      <ProjectPanel
        photo={rosblysk}
        photoHover={rosblyskHover}
        icon={rosblyskIcon}
        title="Ros-błysk"
        description="A website created for the cleaning company Ros-Błysk. It allows users to view the company's offers, gallery, and contact information. The site is bilingual."
        technologies={["React", "Tailwind"]}
        isCode={true}
        isWebsite={true}
        hrefCode="https://github.com/rosblysk"
        hrefWebsite="https://rosblysk.pl"
        photoSide="left"
      />
    </div>
  );
};

export default Projects;
