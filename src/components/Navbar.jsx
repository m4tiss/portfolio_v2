import { NavLink } from "react-router-dom";
import { navItems } from "../data/index";

const Navbar = () => {
  return (
    <div className="hidden md:flex justify-center items-center gap-10 w-full font-semibold text-xl text-navbarText min-h-20">
      {navItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) =>
            `transition duration-200 ease-in-out cursor-pointer hover:text-navbarTextHover ${
              isActive ? "text-navbarTextHover" : ""
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
