import React from "react";

const Home = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="sm:text-3xl md:text-4xl lg:text-5xl text-2xl sm:font-semibold md:font-bold md:py-6">
          Delivering IT solutions that enable you to work smarter
        </h1>
        <div>
          <p className="sm:text-2xl md:text-3xl lg:text-4xl sm:font-semibold md:font-bold py-4">
            Fast, flexible, reliable solutions for all your needs
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Software Delivery Simplified!
        </p>
        {/* <button className="bg-[#00df9a] w-[15rem] rounded-md md:font-medium my-6 mx-auto py-3 text-black">
          Discover more!
        </button> */}
      </div>
    </div>
  );
};

export default Home;
