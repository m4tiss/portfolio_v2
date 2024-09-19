import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "../data/index";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="md:hidden w-full flex justify-center items-center min-h-20">
        <button onClick={toggleMenu} className="text-xl">
          <RxHamburgerMenu size={50} />
        </button>
      </div>

      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-5"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <div className="flex flex-col items-center gap-5">
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    `transition duration-200 ease-in-out text-xl cursor-pointer hover:text-navbarTextHover ${
                      isActive ? "text-pink" : ""
                    }`
                  }
                  onClick={toggleMenu}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      <div className="hidden md:flex justify-center items-center gap-10 w-full font-semibold text-xl text-black min-h-20">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `transition duration-200 ease-in-out cursor-pointer hover:text-navbarTextHover ${
                isActive ? "text-pink" : ""
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Navbar;
