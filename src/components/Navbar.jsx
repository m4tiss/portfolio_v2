import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { name: "HOME", path: "/" },
    { name: "PROJECTS", path: "/projects" },
    { name: "SKILLS", path: "/skills" },
    { name: "CONTACT", path: "/contact" }
  ];

  return (
    <div className="flex justify-center items-center gap-10 w-full font-semibold text-xl text-navbarText h-20">
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
