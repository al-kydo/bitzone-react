import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { ReactComponent as ClassroomSvg } from "../../assets/icons/classroomSvg.svg";
import { ReactComponent as CourseSvg } from "../../assets/icons/CourseSvg.svg";
import { ReactComponent as EmployeeSvg } from "../../assets/icons/employeeSvg.svg";
import { ReactComponent as FinanceSvg } from "../../assets/icons/financeSvg.svg";
import { ReactComponent as LearnZoneSvg } from "../../assets/icons/learnZoneSvg.svg";
import { ReactComponent as SettingsSvg } from "../../assets/icons/settingsSvg.svg";
import { ReactComponent as SpecificationSvg } from "../../assets/icons/SpecificationSvg.svg";
import { ReactComponent as StudentSvg } from "../../assets/icons/StudentSvg.svg";
import { ReactComponent as TutorSvg } from "../../assets/icons/TutorSvg.svg";
import pic1 from "../../assets/learn/1.png";
import pic2 from "../../assets/learn/2.png";
import pic3 from "../../assets/learn/3.png";
import pic4 from "../../assets/learn/4.png";
import pic5 from "../../assets/learn/5.png";
import pic6 from "../../assets/learn/6.png";
import pic7 from "../../assets/learn/7.png";
import pic8 from "../../assets/learn/8.png";

const LearnZone = () => {
  return (
    <div id="main" className="max-w-[1240px] mx-auto">
      <div className="flex mx-auto justify-center items-center my-5 p-5 shadow-xl">
        <Link className="mx-3" to="/container/solutionlayout">
          <button>
            <BiArrowBack className="fill-[#00df9a]" size={30} />
          </button>
        </Link>
        <LearnZoneSvg className="w-[50px] h-[50px] flex fill-[#00df9a]" />
        <h1 className="text-white mx-2 sm:text-xl md:text-3xl text-center">
          BitZone Learn Management Solution
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
            <p className="legend">Courses Window</p>
          </div>
          <div>
            <img src={pic3} className="w-full h-auto mx-auto rounded-lg" />
            <p className="legend">Course Students Window</p>
          </div>
          <div>
            <img src={pic4} className="w-full h-auto mx-auto rounded-lg" />
            <p className="legend">Finance Log Window</p>
          </div>
          <div>
            <img src={pic5} className="w-full h-auto mx-auto rounded-lg" />
            <p className="legend">Tutors Window</p>
          </div>
          <div>
            <img src={pic6} className="w-full h-auto mx-auto rounded-lg" />
            <p className="legend">Settings Window</p>
          </div>
          <div>
            <img src={pic7} className="w-full h-auto mx-auto rounded-lg" />
            <p className="legend">Tutor Payment Window</p>
          </div>
          <div>
            <img src={pic8} className="w-full h-auto mx-auto rounded-lg" />
            <p className="legend">Student Payment Window</p>
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
              <StudentSvg className="fill-[#00df9a] w-[25px] h-[25px] mx-1" />
              <p className="font-semibold">Student Management:</p>
            </div>
            <ul className="list-disc indent-4">
              <li>Courses</li>
              <li>Payments</li>
              <li>Withdraw courses</li>
              <li>Debt</li>
            </ul>
          </div>
          <div className="flex flex-col my-2 mx-2">
            <div className="flex">
              <TutorSvg className="fill-[#00df9a] w-[25px] h-[25px] mx-1" />
              <p className="font-semibold">Tutor Management:</p>
            </div>
            <ul className="list-disc indent-4">
              <li>Courses</li>
              <li>Payments</li>
              <li>Fees</li>
              <li>Debt</li>
            </ul>
          </div>
          <div className="flex flex-col my-2 mx-2">
            <div className="flex">
              <CourseSvg className="fill-[#00df9a] w-[25px] h-[25px] mx-1" />
              <p className="font-semibold">Course Management:</p>
            </div>
            <ul className="list-disc indent-4">
              <li>Courses log</li>
              <li>Students</li>
              <li>Tutors</li>
              <li>Schedule</li>
              <li>Session alerts</li>
              <li>Daily schedule</li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto my-2 items-start grid md:grid-cols-3">
          <div className="flex flex-col my-2 mx-2">
            <div className="flex">
              <ClassroomSvg className="fill-[#00df9a] w-[25px] h-[25px] mx-1" />
              <p className="font-semibold">Classroom Management:</p>
            </div>
            <ul className="list-disc indent-4">
              <li>Classroom schedule</li>
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
          <div className="flex flex-col my-2 mx-2">
            <div className="flex">
              <FinanceSvg className="w-[25px] h-[25px] flex fill-[#00df9a] mx-1" />
              <p className="font-semibold">Financial Management:</p>
            </div>
            <ul className="list-disc indent-4">
              <li>Complete financial log for the center</li>
              <li>Expense management included</li>
              <li>Dedicated expenses for each course</li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto my-2 items-start grid md:grid-cols-2">
          <div className="flex flex-col my-2 mx-2">
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

export default LearnZone;
