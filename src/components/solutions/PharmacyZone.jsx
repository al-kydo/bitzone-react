import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { ReactComponent as DealerSvg } from "../../assets/icons/DealerSvg.svg";
import { ReactComponent as EmployeeSvg } from "../../assets/icons/employeeSvg.svg";
import { ReactComponent as FinanceSvg } from "../../assets/icons/financeSvg.svg";
import { ReactComponent as InventoryManagementSvg } from "../../assets/icons/inventory_management.svg";
import { ReactComponent as OrdersSvg } from "../../assets/icons/ordersSvg.svg";
import { ReactComponent as PatientSvg } from "../../assets/icons/PatientSvg.svg";
import { ReactComponent as PharmacyZoneSvg } from "../../assets/icons/pharmacyZoneSvg.svg";
import { ReactComponent as SettingsSvg } from "../../assets/icons/settingsSvg.svg";
import { ReactComponent as SpecificationSvg } from "../../assets/icons/SpecificationSvg.svg";
import { ReactComponent as VisitTypeSvg } from "../../assets/icons/visitTypeSvg.svg";
import pic1 from "../../assets/pharmacy/1.png";
import pic2 from "../../assets/pharmacy/2.png";
import pic3 from "../../assets/pharmacy/3.png";
import pic4 from "../../assets/pharmacy/4.png";
import pic5 from "../../assets/pharmacy/5.png";
import pic6 from "../../assets/pharmacy/6.png";
import pic7 from "../../assets/pharmacy/7.png";
import pic8 from "../../assets/pharmacy/8.png";

const PharmacyZone = () => {
  return (
    <div id="main" className="max-w-[1240px] mx-auto">
      <div className="flex mx-auto justify-center items-center my-5 p-5 shadow-xl">
        <Link className="mx-3" to="/container/solutionlayout">
          <button>
            <BiArrowBack className="fill-[#00df9a]" size={30} />
          </button>
        </Link>
        <PharmacyZoneSvg className="w-[50px] h-[50px] flex fill-[#00df9a]" />
        <h1 className="text-white mx-2 sm:text-xl md:text-3xl text-center">
          BitZone Pharmacy Management Solution
        </h1>
      </div>
      <div id="carousel">
        <Carousel autoPlay={true} infiniteLoop={true}>
          <div>
            <img src={pic1} className="w-full h-auto mx-auto rounded-lg" />
            <p className="legend">Main Window</p>
          </div>
          <div>
            <img src={pic2} className="w-full h-auto mx-auto rounded-lg" />
            <p className="legend">Products Window</p>
          </div>
          <div>
            <img src={pic3} className="w-full h-auto mx-auto rounded-lg" />
            <p className="legend">Inventory Check Window 1</p>
          </div>
          <div>
            <img src={pic4} className="w-full h-auto mx-auto rounded-lg" />
            <p className="legend">Inventory Check Window 2</p>
          </div>
          <div>
            <img src={pic5} className="w-full h-auto mx-auto rounded-lg" />
            <p className="legend">Finance Log Window</p>
          </div>
          <div>
            <img src={pic6} className="w-full h-auto mx-auto rounded-lg" />
            <p className="legend">Buy Orders Window</p>
          </div>
          <div>
            <img src={pic7} className="w-full h-auto mx-auto rounded-lg" />
            <p className="legend">Sell Orders Window</p>
          </div>
          <div>
            <img src={pic8} className="w-full h-auto mx-auto rounded-lg" />
            <p className="legend">Dealers Window</p>
          </div>
        </Carousel>
      </div>

      <div id="specs" className="w-full py-6 px-4 text-white">
        <div className="flex items-center justify-center">
          <SpecificationSvg className="w-[25px] h-[25px] flex fill-[#00df9a] mx-1" />
          <h2 className="text-center sm:text-2xl my-3">Specifications</h2>
        </div>
        <div className="max-w-[1240px] mx-auto my-2 items-start grid md:grid-cols-3">
          <div className="flex flex-col my-2 mx-2">
            <div className="flex">
              <InventoryManagementSvg className="w-[25px] h-[25px] flex fill-[#00df9a] mx-1" />
              <p className="font-semibold">Inevntory Management:</p>
            </div>
            <ul className="list-disc indent-4">
              <li>Product inevntory</li>
              <li>Product amount alerts</li>
              <li>Product expiry date alerts</li>
              <li>Checking all products status and amount</li>
              <li>All inevntory cost and price</li>
            </ul>
          </div>
          <div className="flex flex-col my-2 mx-2">
            <div className="flex">
              <PatientSvg className="w-[25px] h-[25px] flex fill-[#00df9a] mx-1" />
              <p className="font-semibold">Client (Patient) Management:</p>
            </div>
            <ul className="list-disc indent-4">
              <li>Profile and data</li>
              <li>Financial log and activity</li>
              <li>Paymetns log</li>
              <li>Insurance</li>
              <li>Debt and InAdvance (Account)</li>
              <li>Buy orders</li>
            </ul>
          </div>
          <div className="flex flex-col my-2 mx-2">
            <div className="flex">
              <DealerSvg className="w-[25px] h-[25px] flex fill-[#00df9a] mx-1" />
              <p className="font-semibold">Dealer Management:</p>
            </div>
            <ul className="list-disc indent-4">
              <li>Profile and data</li>
              <li>Financial log and activity</li>
              <li>Orders</li>
              <li>Paymetns log</li>
              <li>Debt and inAdvance (Account)</li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto my-2 items-start grid md:grid-cols-3">
          <div className="flex flex-col my-2 mx-2">
            <div className="flex">
              <VisitTypeSvg className="w-[25px] h-[25px] flex fill-[#00df9a] mx-1" />
              <p className="font-semibold">
                Product and Pharmaceutical Types Management:
              </p>
            </div>

            <ul className="list-disc indent-4">
              <li>Product types</li>
              <li>Pharmaceutical types</li>
            </ul>
          </div>
          <div className="flex flex-col my-2 mx-2">
            <div className="flex">
              <OrdersSvg className="w-[25px] h-[25px] flex fill-[#00df9a] mx-1" />
              <p className="font-semibold">Buy and Sell Orders Management:</p>
            </div>
            <ul className="list-disc indent-4">
              <li>Buy orders log</li>
              <li>Sell orders log</li>
            </ul>
          </div>
          <div className="flex flex-col my-2 mx-2">
            <div className="flex">
              <EmployeeSvg className="w-[25px] h-[25px] flex fill-[#00df9a] mx-1" />
              <p className="font-semibold">Employee Management:</p>
            </div>
            <ul className="list-disc indent-4">
              <li>Employee types</li>
              <li>Profile and data</li>
              <li>Salaries are included in financial log every month</li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto my-2 items-start grid md:grid-cols-2">
          <div className="justify-center items-center my-2 mx-2">
            <div className="flex">
              <FinanceSvg className="w-[25px] h-[25px] flex fill-[#00df9a] mx-1" />
              <p className="font-semibold">Financial Management:</p>
            </div>
            <ul className="list-disc indent-4">
              <li>Complete financial log for the pharmacy</li>
              <li>Expense management included</li>
            </ul>
          </div>
          <div className="justify-center items-center my-2 mx-2">
            <div className="flex">
              <SettingsSvg className="w-[25px] h-[25px] flex fill-[#00df9a] mx-1" />
              <p className="font-semibold">Technical:</p>
            </div>
            <ul className="list-disc indent-4">
              <li>Embedded database</li>
              <li>Auto database backup</li>
              <li>Windows 7 and above</li>
              <li>.Net 7.0</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyZone;
