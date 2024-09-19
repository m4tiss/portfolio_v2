import profilePhoto from "../images/profilePhoto.jfif";
import { motion } from "framer-motion";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
const Home = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.2 } },
  };

  return (
    <div className="flex justify-center items-center flex-grow gap-10 flex-col xl:flex-row px-5 xl:px-0">
      <motion.div
        className="text-black w-full xl:w-1/2 flex flex-col text-left justify-center items-center gap-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="w-full font-extrabold tracking-tighter text-xl"
          variants={childVariants}
        >
          Hello I am
        </motion.h2>

        <motion.div className="w-full flex flex-col text-left gap-5 xl:gap-10">
          <motion.h2
            className="w-full text-pink font-extrabold tracking-tighter text-3xl xl:text-8xl"
            variants={childVariants}
          >
            MATEUSZ
          </motion.h2>
          <motion.h2
            className="w-full text-pink font-extrabold tracking-tighter text-3xl xl:text-8xl"
            variants={childVariants}
          >
            GWÓŹDŹ
          </motion.h2>
        </motion.div>

        <motion.h2
          className="w-full font-extrabold tracking-tighter text-xl"
          variants={childVariants}
        >
          I am a computer science student at the Technical University of Lodz. I
          really enjoy acquiring knowledge and I am ready for new challenges.
        </motion.h2>

        <motion.div
          className="w-full flex justify-start items-center gap-5"
          variants={childVariants}
        >
          <a
            href="https://github.com/m4tiss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="cursor-pointer" size={45} />
          </a>
          <a
            href="https://www.linkedin.com/in/m4tiss/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLinkedin className="cursor-pointer" size={50} />
          </a>
        </motion.div>
      </motion.div>
      <motion.img
        style={{
          borderRadius: "50%",
        }}
        src={profilePhoto}
        alt="Profile photo"
        className="w-56 h-56 md:w-96 md:h-96 aspect-square  object-cover shadow-xl"
        drag
        dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          y: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          },
        }}
      />
    </div>
  );
};

export default Home;
