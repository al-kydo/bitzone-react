import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSolution,
  AiOutlineAppstore,
  AiOutlineInfoCircle,
  AiOutlinePhone,
} from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { HashLink } from "react-router-hash-link";

const LandingPageNavbar = () => {
  const [nav, setNav] = useState(true);

  return (
    <div className="flex justify-between items-center h-24 max-w-[1200px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#4074e6]">BitZone</h1>
      <ul className="hidden sm:flex">
        <li className="p-4">
          <HashLink smooth offset={50} duration={500} to="/#home">
            <button className="inline-flex items-center text-[#00df9a]">
              <BiHomeAlt className="fill-[#00df9a]" />
              Home
            </button>
          </HashLink>
        </li>
        <li className="p-4">
          <HashLink smooth offset={50} duration={500} to="/#solutions">
            <button className="inline-flex items-center text-[#00df9a]">
              <AiOutlineAppstore className="fill-[#00df9a]" />
              Solutions
            </button>
          </HashLink>
        </li>
        <li className="p-4">
          <HashLink smooth offset={50} duration={500} to="/#services">
            <button className="inline-flex items-center text-[#00df9a]">
              <AiOutlineSolution className="fill-[#00df9a]" />
              Services
            </button>
          </HashLink>
        </li>
        <li className="p-4">
          <HashLink smooth offset={50} duration={500} to="about">
            <button className="inline-flex items-center text-[#00df9a]">
              <AiOutlineInfoCircle className="fill-[#00df9a]" />
              About
            </button>
          </HashLink>
        </li>
        <li className="p-4">
          <HashLink smooth offset={50} duration={500} to="/#contact">
            <button className="inline-flex items-center text-[#00df9a]">
              <AiOutlinePhone className="fill-[#00df9a]" />
              Contact
            </button>
          </HashLink>
        </li>
      </ul>
      <div className="block sm:hidden">
        {nav ? (
          <button>
            <AiOutlineMenu onClick={() => setNav(false)} size={30} />
          </button>
        ) : (
          <button>
            <AiOutlineClose onClick={() => setNav(true)} size={30} />
          </button>
        )}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-600 bg-[#000300] ease-out duration-500"
            : "fixed left-[-100%] ease-linear duration-500"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          Bitzone
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4">
            <HashLink
              smooth
              offset={50}
              duration={500}
              to="/#home"
              onClick={() => setNav(true)}
            >
              <button className="inline-flex items-center text-[#00df9a]">
                <BiHomeAlt className="fill-[#00df9a]" />
                Home
              </button>
            </HashLink>
          </li>
          <li className="p-4">
            <HashLink
              smooth
              offset={50}
              duration={500}
              to="/#solutions"
              onClick={() => setNav(true)}
            >
              <button className="inline-flex items-center text-[#00df9a]">
                <AiOutlineAppstore className="fill-[#00df9a]" />
                Solutions
              </button>
            </HashLink>
          </li>
          <li className="p-4">
            <HashLink
              smooth
              offset={50}
              duration={500}
              to="/#serivces"
              onClick={() => setNav(true)}
            >
              <button className="inline-flex items-center text-[#00df9a]">
                <AiOutlineSolution className="fill-[#00df9a]" />
                Services
              </button>
            </HashLink>
          </li>
          <li className="p-4">
            <HashLink
              smooth
              offset={50}
              duration={500}
              to="/#about"
              onClick={() => setNav(true)}
            >
              <button className="inline-flex items-center text-[#00df9a]">
                <AiOutlineInfoCircle className="fill-[#00df9a]" />
                About
              </button>
            </HashLink>
          </li>
          <li className="p-4">
            <HashLink
              smooth
              offset={50}
              duration={500}
              to="/#contact"
              onClick={() => setNav(true)}
            >
              <button className="inline-flex items-center text-[#00df9a]">
                <AiOutlinePhone className="fill-[#00df9a]" />
                Contact
              </button>
            </HashLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPageNavbar;
