import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed  left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="justify-between mx-2 md:mx-8 p-4 px-12 flex ">
        <Link to="/netcomm/">
          <img src={logo} alt="logo" className="h-6" />
        </Link>

        <ul className="hidden md:flex text-black">
          <li className="mx-4">
            {" "}
            <Link to="/netcomm/">Home</Link>{" "}
          </li>
          <li className="mx-4">
            {" "}
            <Link to="/netcomm/about">About Us</Link>{" "}
          </li>
          <li className="mx-4">
            {" "}
            <Link to="/netcomm/services">Services</Link>{" "}
          </li>
          <li className="mx-4">
            {" "}
            <Link to="/netcomm/premises">Our Premises</Link>{" "}
          </li>
          <li className="mx-4">
            {" "}
            <Link to="/netcomm/contact">Contact Us</Link>{" "}
          </li>
        </ul>

        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `black` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-white bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center text-white w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link to="/netcomm/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link to="/netcomm/about">About</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link to="/netcomm/services">Services</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link to="/netcomm/premises">Our Premises</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link to="/netcomm/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
