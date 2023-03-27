import React from "react";
import { HashLink } from "react-router-hash-link";
import laptop from "../../assets/1.jpg";
import { ReactComponent as ManagementSolutionsSvg } from "../../assets/icons/management_solutionsSvg.svg";

const Solutions = () => {
  return (
    <>
      <div className="w-full rounded-xl shadow-xl bg-white py-16 px-4">
        <div className="max-w-[1240px] h-screen mx-auto grid md:grid-cols-2">
          <img
            src={laptop}
            className="w-[500px] rounded-lg mx-auto my-4 hover:scale-105 duration-300"
            alt="/"
          />
          <div className="flex flex-col justify-center mx-2 px-2">
            <p className="text-[#00df9a] text-3xl font-bold">Our Solutions</p>
            <h1 className="md:text-2xl sm:text-1xl text-1xl font-bold py-2">
              We specialize in developing Windows desktop solutions
            </h1>
            <p>Have a look at our set of management solutions</p>
            <HashLink
              smooth
              offset={50}
              duration={500}
              to="/container/solutionlayout#header"
            >
              <button className="bg-[#282428] text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:scale-105 duration-300">
                <div className="flex items-center justify-center">
                  <ManagementSolutionsSvg className="w-[25px] h-[25px] flex fill-[#00df9a] mx-1" />
                  Solutions Gallery
                </div>
              </button>
            </HashLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solutions;
