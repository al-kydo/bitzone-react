import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-700 mx-auto py-16 px-4 grid lg:grid-cols-3 gap-2 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">BitZone</h1>
        <p className="py-4">We build complete beautiful tech solutions</p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">What We Do</h6>
          <ul>
            <li className="py-2 text-sm">Software Solutions</li>
            <li className="py-2 text-sm">Web Development</li>
            <li className="py-2 text-sm">E-Commerce</li>
            <li className="py-2 text-sm">Management Systems</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">IT Services</li>
            <li className="py-2 text-sm">Web Support</li>
            <li className="py-2 text-sm">Training</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Solutions</li>
            <li className="py-2 text-sm">Projects</li>
            <li className="py-2 text-sm">Commerce</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
