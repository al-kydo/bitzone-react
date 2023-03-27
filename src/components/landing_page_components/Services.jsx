import React from "react";
import { ReactComponent as WindowsSvg } from "../../assets/icons/windowsSvg.svg";
import { ReactComponent as CustomServicesSvg } from "../../assets/icons/CustomServicesSvg.svg";
import { ReactComponent as WebServicesSvg } from "../../assets/icons/WebServicesSvg.svg";
import { ReactComponent as TrainingServicesSvg } from "../../assets/icons/TrainingServicesSvg.svg";

const Services = () => {
  return (
    <div className="w-full rounded-xl shadow-xl py-[10rem] px-4">
      <div className="max-w-[1240px] mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="w-full bg-slate-200 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <div className="mx-auto">
            <WindowsSvg className="w-[75px] h-[75px] my-[-50px] flex fill-[#00df9a] mx-2" />
          </div>
          <h2 className="text-3xl font-bold text-center py-8">Windows</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-4">
              Integrating latest Microsoft technologies to build top services
            </p>
          </div>
          {/* <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Explore more
          </button> */}
        </div>
        <div className="w-full bg-slate-200 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <div className="mx-auto">
            <CustomServicesSvg className="w-[75px] h-[75px] my-[-50px] flex fill-[#00df9a] mx-2" />
          </div>
          <h2 className="text-3xl font-bold text-center py-8">
            Custom Services
          </h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-4">
              Leave the technologies to us and concentrate on your business
            </p>
          </div>
          {/* <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#282428]">
            Tell us more
          </button> */}
        </div>
        <div className="w-full bg-slate-200 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <div className="mx-auto">
            <WebServicesSvg className="w-[75px] h-[75px] my-[-50px] flex fill-[#00df9a] mx-2" />
          </div>
          <h2 className="text-3xl font-bold text-center py-8">Web Services</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-4">
              We take care of your business identity on the Web!
            </p>
          </div>
          {/* <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#282428]">
            Order Now
          </button> */}
        </div>
        <div className="w-full bg-slate-200 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <div className="mx-auto">
            <TrainingServicesSvg className="w-[75px] h-[75px] my-[-50px] flex fill-[#00df9a] mx-2" />
          </div>

          <h2 className="text-3xl font-bold text-center py-8">Training</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-4">
              Training staff is an essential part of any organization's success
            </p>
          </div>
          {/* <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Order Now
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
