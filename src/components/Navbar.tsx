import logo from "../assets/logo-text.png";
const Navbar = () => {
  return (
    <div className="container mx-auto mt-5 sticky top-0 z-50 bg-white/30 backdrop-blur-md">
      <div className="flex justify-between items-center">
        <img className="cursor-pointer" src={logo} alt="" />

        <ul className={`flex gap-4 items-center cursor-pointer [&_li:hover]:font-[500]`}>
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
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
