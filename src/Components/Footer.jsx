import React from "react";
import { Link } from "react-router-dom";

import {
  FaInstagram,
  FaFacebookSquare,
  FaLinkedinIn,
  FaFacebook,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" bg-slate-950 text-gray-400">
      <hr className="mx-12" />

      <div className="mx-12  hidden md:grid md:grid-cols-2 gap-12  py-16 px-4 ">
        <div>
          <h1 className="  font-bold text-slate-300 w-full text-3xl   ">
            Netcomm.
          </h1>
          <p className="py-4">
            Our highly skilled technicians and sales staff will happily discuss
            your requirements and suggest <br /> the best strategy for your
            personal and business requirements. We look forward to seeing you.
          </p>
          <div className="flex justify-between my-6 md:w-[75%] ">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaLinkedinIn size={30} />
          </div>
        </div>

        <div className="  justify-between flex">
          <div>
            <h6 className=" font-medium text-gray-200 ">Contact</h6>
            <ul>
              <li className=" py-2 text-sm">
                Address: Plot 833, 1st Street, Matsapha, Swaziland
              </li>
              <li className=" py-2 text-sm"> Mail Us: info@netcomm.co.sz</li>
              <li className=" py-2 text-sm"> Phone: +268 2518 7891/2</li>
              <li className=" py-2 text-sm"> Fax +268 2518 7893</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" block md:hidden items-center mt-5 p-8">
        <ul className=" justify-center mx-auto flex">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <li className="mx-4">
              <FaLinkedinIn size={30} />
            </li>
          </a>
          <li className="mx-4">
            <FaFacebook size={30} />
          </li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <li className="mx-4">
              <FaInstagram size={30} />
            </li>
          </a>
        </ul>
      </div>
      <div className=" block md:hidden items-center uppercase">
        <ul className="grid md:flex justify-center">
          <li className="m-4">
            {" "}
            <Link to={"/netcomm/about"}>About</Link>{" "}
          </li>
          <li className="m-4">
            <Link to={"/netcomm/contact"}>Contact</Link>{" "}
          </li>
          <li className="m-4">
            <Link to={"/netcomm/services"}>Services</Link>
          </li>
          <li className="m-4">
            <Link to={"/netcomm/premises"}>Our Premises</Link>
          </li>
        </ul>
      </div>

      <p className=" block md:hidden text-center pb-4 text-slate-300">
        &copy; {new Date().getFullYear()} Netcomm.
      </p>
    </div>
  );
};

export default Footer;
