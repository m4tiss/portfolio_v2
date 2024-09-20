import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const meVariants = {
    hidden: { opacity: 0, scale: 0.5},
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 1.2 },
    },
  };
  return (
    <div className="w-full flex flex-col  xl:flex-row items-center flex-grow gap-20 justify-center py-10 xl:py-0">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col gap-0"
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold tracking-tighter"
        >
          CALL TO{" "}
          <motion.span variants={meVariants} className="text-pink">
            ME
          </motion.span>
        </motion.h2>
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold tracking-tighter"
        >
          WRITE TO{" "}
          <motion.span variants={meVariants} className="text-pink">
            ME
          </motion.span>
        </motion.h2>
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold tracking-tighter"
        >
          SEND TO{" "}
          <motion.span variants={meVariants} className="text-pink">
            ME
          </motion.span>
        </motion.h2>
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold tracking-tighter"
        >
          EMAIL TO{" "}
          <motion.span variants={meVariants} className="text-pink">
            ME
          </motion.span>
        </motion.h2>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center  gap-20">
        <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 8,
          duration: 0.5,
        }}
         className="flex flex-col items-center gap-5">
          <FiPhoneCall size={110} />
          <a href="tel:+48797094698">
            <h2 className="text-3xl font-semibold">797094698</h2>
          </a>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 8,
          duration: 0.5,
        }}
         className="flex flex-col items-center gap-5">
          <HiOutlineMail size={110} />
          <a href="mailto:mateusz039@op.pl">
            <h2 className="text-3xl font-semibold">mateusz039@op.pl</h2>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
