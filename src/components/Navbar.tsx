import { useState } from "react";
import logo from "../assets/logo-text.png";
const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <div className="container mx-auto mt-5 sticky top-0 z-50 bg-white/30 backdrop-blur-md">
      <div className="flex justify-between items-center">
        <img className="cursor-pointer" src={logo} alt="" />

        <ul className="flex gap-4 items-center cursor-pointer [&_li:hover]:font-[500]">
          <li onClick={() => setActive("Home")} className={active === "Home" ? "text-[#D91B7E]" : ""}>Home</li>
          <li onClick={() => setActive("Technologies")} className={active === "Technologies" ? "text-[#D91B7E]" : ""}>Technologies</li>
          <li onClick={() => setActive("Projects")} className={active === "Projects" ? "text-[#D91B7E]" : ""}>Projects</li>
          <li onClick={() => setActive("About")} className={active === "About" ? "text-[#D91B7E]" : ""}>About</li>
          <li onClick={() => setActive("Contact")} className={active === "Contact" ? "text-[#D91B7E]" : ""}>Contact</li>
        </ul>

        <div className="flex gap-4 items-center">
          <button className="cursor-pointer font-semibold ">Sign In</button>
          <button className="cursor-pointer bg-[#D91B7E] text-white w-[100px] h-[40px] rounded-4xl">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
