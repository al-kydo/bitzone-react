import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSolution,
  AiOutlineAppstore,
  AiOutlineInfoCircle,
  AiOutlinePhone,
} from "react-icons/ai";
import { Link } from "react-scroll";
import { Link as ReactLink } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";

const LandingPageNavbar = () => {
  const [nav, setNav] = useState(true);

  return (
    <div className="flex justify-between items-center h-24 max-w-[1200px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">BitZone</h1>
      <ul className="hidden sm:flex">
        <li className="p-4">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button className="inline-flex items-center text-[#00df9a]">
              <BiHomeAlt className="fill-[#00df9a]" />
              Home
            </button>
          </Link>
        </li>
        <li className="p-4">
          <Link
            activeClass="active"
            to="solutions"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button className="inline-flex items-center text-[#00df9a]">
              <AiOutlineAppstore className="fill-[#00df9a]" />
              Solutions
            </button>
          </Link>
        </li>
        <li className="p-4">
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button className="inline-flex items-center text-[#00df9a]">
              <AiOutlineSolution className="fill-[#00df9a]" />
              Services
            </button>
          </Link>
        </li>
        <li className="p-4">
          <ReactLink to="/container/about">
            <button className="inline-flex items-center text-[#00df9a]">
              <AiOutlineInfoCircle className="fill-[#00df9a]" />
              About
            </button>
          </ReactLink>
        </li>
        <li className="p-4">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button className="inline-flex items-center text-[#00df9a]">
              <AiOutlinePhone className="fill-[#00df9a]" />
              Contact
            </button>
          </Link>
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
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setNav(true)}
            >
              <button className="inline-flex items-center text-[#00df9a]">
                <BiHomeAlt className="fill-[#00df9a]" />
                Home
              </button>
            </Link>
          </li>
          <li className="p-4">
            <Link
              activeClass="active"
              to="solutions"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setNav(true)}
            >
              <button className="inline-flex items-center text-[#00df9a]">
                <AiOutlineAppstore className="fill-[#00df9a]" />
                Solutions
              </button>
            </Link>
          </li>
          <li className="p-4">
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setNav(true)}
            >
              <button className="inline-flex items-center text-[#00df9a]">
                <AiOutlineSolution className="fill-[#00df9a]" />
                Services
              </button>
            </Link>
          </li>
          <li className="p-4">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setNav(true)}
            >
              <button className="inline-flex items-center text-[#00df9a]">
                <AiOutlineInfoCircle className="fill-[#00df9a]" />
                About
              </button>
            </Link>
          </li>
          <li className="p-4">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setNav(true)}
            >
              <button className="inline-flex items-center text-[#00df9a]">
                <AiOutlinePhone className="fill-[#00df9a]" />
                Contact
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPageNavbar;
