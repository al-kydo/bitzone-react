import React from "react";
import { HashLink } from "react-router-hash-link";
import beautyCenterPic from "../../assets/beauty_center/1.png";
import clinicPic from "../../assets/clinic/1.png";
import { ReactComponent as BeautyCenterSvg } from "../../assets/icons/beautycenter.svg";
import { ReactComponent as ClinicZoneSvg } from "../../assets/icons/clinicZoneSvg.svg";
import { ReactComponent as LearnZoneSvg } from "../../assets/icons/learnZoneSvg.svg";
import { ReactComponent as ManagementSolutionsSvg } from "../../assets/icons/management_solutionsSvg.svg";
import { ReactComponent as PharmacyZoneSvg } from "../../assets/icons/pharmacyZoneSvg.svg";
import { ReactComponent as SpecificationSvg } from "../../assets/icons/SpecificationSvg.svg";
import learnPic from "../../assets/learn/1.png";
import pharmacyPic from "../../assets/pharmacy/1.png";

const SolutionLayout = () => {
  return (
    <div className="max-w-[1240px] justify-center">
      <div className="flex mx-auto justify-center items-center my-5 p-5 shadow-xl">
        <ManagementSolutionsSvg className="w-[50px] h-[50px] flex fill-[#00df9a] mx-1" />
        <h1
          id="header"
          className="my-5 mx-3 text-center text-white sm:text-3xl"
        >
          Our Management Solutions
        </h1>
      </div>
      <div className="bg-white py-16 px-4 h-[100%] rounded-xl">
        <div className="max-w-[1240px] mx-auto my-28 grid md:grid-cols-2">
          <HashLink to="beautycenter#carousel">
            <img
              src={beautyCenterPic}
              title="Go to Beauty Center gallery"
              className="w-[500px] mx-auto my-4 rounded-lg hover:scale-105 duration-300"
              alt="Go to beauty center gallery"
            />
          </HashLink>

          <div className="flex flex-col justify-center mx-2">
            <div className="flex items-center">
              <BeautyCenterSvg className="w-[50px] h-[50px] flex fill-[#00df9a] mx-1" />
              <p className="text-[#00df9a] text-3xl font-bold">Beauty Center</p>
            </div>

            <h1 className="md:text-2xl sm:text-1xl text-1xl font-bold py-2">
              Custom made application focuses on the management of beuaty
              centers with minimum effort.
            </h1>
            <div className="mx-auto">
              <HashLink to="beautycenter#specs">
                <button
                  title="See Beauty Center specifications"
                  className="bg-[#282428] text-[#00df9a] w-[200px] rounded-lg font-medium my-6 mx-auto md:mx-0 py-3 hover:scale-105 duration-300"
                >
                  <div className="flex items-center justify-center">
                    <SpecificationSvg className="w-[25px] h-[25px] flex fill-[#00df9a] mx-1" />
                    Specifications
                  </div>
                </button>
              </HashLink>
            </div>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto my-28 grid md:grid-cols-2">
          <div className="flex flex-col justify-center mx-2">
            <div className="flex items-center">
              <ClinicZoneSvg className="w-[50px] h-[50px] flex fill-[#00df9a] mx-1" />
              <p className="text-[#00df9a] text-3xl font-bold mx-2">
                ClinicZone
              </p>
            </div>

            <h1 className="md:text-2xl sm:text-1xl text-1xl font-bold py-2">
              Our clinic management application helps you manage your clinic
              efficiently.
            </h1>
            <div className="mx-auto">
              <HashLink to="cliniczone#specs">
                <button
                  title="See ClinicZone specifications"
                  className="bg-[#282428] text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:scale-105 duration-300"
                >
                  <div className="flex items-center justify-center">
                    <SpecificationSvg className="w-[25px] h-[25px] flex fill-[#00df9a] mx-1" />
                    Specifications
                  </div>
                </button>
              </HashLink>
            </div>
          </div>
          <HashLink to="cliniczone#carousel">
            <img
              src={clinicPic}
              title="Go to ClinicZone gallery"
              className="w-[500px] mx-auto my-4 rounded-md hover:scale-105 duration-300"
              alt="Go to ClinicZone Gallery"
            />
          </HashLink>
        </div>
        <div className="max-w-[1240px] mx-auto grid my-28 md:grid-cols-2">
          <HashLink to="pharmacyzone#carousel">
            <img
              src={pharmacyPic}
              title="Go to PharmacyZone gallery"
              className="w-[500px] mx-auto my-4 rounded-lg hover:scale-105 duration-300"
              alt="Go to PharmacyZone Gallery"
            />
          </HashLink>
          <div className="flex flex-col justify-center mx-2">
            <div className="flex items-center">
              <PharmacyZoneSvg className="w-[50px] h-[50px] flex fill-[#00df9a] mx-1" />
              <p className="text-[#00df9a] text-3xl font-bold">PharmacyZone</p>
            </div>
            <h1 className="md:text-2xl sm:text-1xl text-1xl font-bold py-2">
              Wonderful solution that simplifies the management of pharmacy
              stores.
            </h1>
            <div className="mx-auto">
              <HashLink to="pharmacyzone#specs">
                <button
                  title="Go to PharmacyZone specifications"
                  className="bg-[#282428] text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:scale-105 duration-300"
                >
                  <div className="flex items-center justify-center">
                    <SpecificationSvg className="w-[25px] h-[25px] flex fill-[#00df9a] mx-1" />
                    Specifications
                  </div>
                </button>
              </HashLink>
            </div>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto grid my-28 md:grid-cols-2">
          <div className="flex flex-col justify-center mx-2">
            <div className="flex items-center">
              <LearnZoneSvg className="w-[50px] h-[50px] flex fill-[#00df9a] mx-1" />
              <p className="text-[#00df9a] text-3xl font-bold">LearnZone</p>
            </div>

            <h1 className="md:text-2xl sm:text-1xl text-1xl font-bold py-2">
              Managing a learning center takes alot of work. We present to you
              our solution to help you with your tasks.
            </h1>
            <div className="mx-auto">
              <HashLink to="learnzone#specs">
                <button className="bg-[#282428] text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:scale-105 duration-300">
                  <div className="flex items-center justify-center">
                    <SpecificationSvg className="w-[25px] h-[25px] flex fill-[#00df9a] mx-1" />
                    Specifications
                  </div>
                </button>
              </HashLink>
            </div>
          </div>
          <HashLink to="learnzone#carousel">
            <img
              src={learnPic}
              title="Go to LearnZone gallery"
              className="w-[500px] mx-auto my-4 rounded-lg hover:scale-105 duration-300"
              alt="Go to PharmacyZone Gallery"
            />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default SolutionLayout;
