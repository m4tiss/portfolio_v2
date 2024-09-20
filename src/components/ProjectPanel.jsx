import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";

const ProjectPanel = ({
  photo,
  photoHover,
  icon,
  title,
  description,
  technologies,
  isCode,
  isWebsite,
  hrefCode,
  hrefWebsite,
  photoSide = "left",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 8,
        duration: 0.5,
      }}
      className={`flex justify-center items-center gap-10 flex-col-reverse xl:flex-row ${photoSide === "left" ? "" : "xl:flex-row-reverse"}`}
    >
      <div className="relative w-80 xl:w-[800px] h-fit rounded-2xl shadow-xl">
        <img
          className="w-full h-full rounded-2xl transition-opacity duration-300 opacity-100 hover:opacity-0"
          src={photo}
          alt="Default Image"
        />
        <img
          className="w-full h-full rounded-2xl absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100"
          src={photoHover}
          alt="Hover Image"
        />
      </div>

      <div className="flex w-96 flex-col gap-10 justify-center items-center">
        <div className="flex gap-5">
          <h2 className="text-4xl font-semibold">{title}</h2>
          <img className="w-10" src={icon} alt="Project Icon" />
        </div>

        <span className="text-center px-5 xl:px-0">{description}</span>

        <div className="flex justify-center flex-wrap gap-5">
          {technologies.map((tech, index) => (
            <h3
              key={index}
              className="bg-pink text-white px-5 py-1 rounded-full"
            >
              {tech}
            </h3>
          ))}
        </div>

        <div className="flex gap-10">
          {isCode && (
            <div className="flex justify-center items-center">
              <a href={hrefCode} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2">
              <span>Code</span>
                <FaGithub size={40} />
              </a>
            </div>
          )}
          {isWebsite && (
            <div className="flex justify-center items-center">
              <a href={hrefWebsite} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2">
              <span>Website</span>
                <GoProjectSymlink size={40} />
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectPanel;
