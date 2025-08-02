import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleResize = () => {
      // If the screen width is greater than or equal to 768px (md breakpoint in Tailwind CSS),
      // and the sidebar is currently open, close it.
      if (window.innerWidth >= 768 && nav) {
        setNav(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [nav]); // Re-run effect if 'nav' state changes to ensure correct logic

  return (
    <nav className="bg-blue-950 text-white px-8 md:px-16 lg:px=24 fixed top-0 w-full z-50">
      <div className="containter py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">Cafirma</div>
        <div className="space-x-6 hidden md:flex">
          <a href="#hero" className="hover:text-gray-400 ">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400 ">
            About Me
          </a>
          <a href="#skill" className="hover:text-gray-400 ">
            Skills
          </a>
          <a href="#projects" className="hover:text-gray-400 ">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400 ">
            Contact
          </a>
        </div>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[30%] h-full border-r-white bg-gray-900 ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            Cafirma
          </h1>
          <ul className="uppercase p-4">
            <a href="#hero">
              <li className="p-4 border-b border-gray-600">Home</li>
            </a>
            <a href="#about">
              <li className="p-4 border-b border-gray-600">About Me</li>
            </a>
            <a href="#skill">
              <li className="p-4 border-b border-gray-600">Skills</li>
            </a>
            <a href="#projects">
              <li className="p-4 border-b border-gray-600">Projects</li>
            </a>
            <a href="#contact">
              <li className="p-4 border-b border-gray-600">Contact</li>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
/*
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Connect Me</button>
*/