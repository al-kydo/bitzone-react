import React from "react";
import { ReactComponent as IdeaSvg } from "../../assets/icons/IdeaSvg.svg";
import { ReactComponent as StorySvg } from "../../assets/icons/StorySvg.svg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full text-white">
      <div className="max-w-[1240px] rounded-xl shadow-xl flex items-center justify-center mx-auto">
        <div className="justify-center">
          <IdeaSvg className="w-[150px] h-[150px]" />
        </div>
        <h1 className="md:text-3xl text-2xl text-center my-16 py-10">
          Our mission is to inspire <i>creativity</i> and simplicity with
          liberating technologies
        </h1>
      </div>
      <div className="max-w-[1240px] my-16">
        <div className="flex items-center justify-center">
          <StorySvg className="w-[150px] h-[150px] fill-[#00df9a]" />
          <h2 className="text-3xl text-center shadow-2xl rounded-xl">
            Our Story
          </h2>
        </div>

        <div className="md:text-2xl text-xl my-5">
          <ul className="list-disc indent-2 mx-[3rem]">
            <li>
              {" "}
              <p className="my-2">
                Simply put, I am a passionate software developer who loves to{" "}
                <i>play around </i>
                with technologies.
              </p>
            </li>
            <li>
              <p className="my-2">
                I started out building and developing Windows desktop
                applications using C# and the .Net framework.
              </p>
            </li>
            <li>
              <p className="my-2">
                I worked as a tainer for over 8 years, training and qualifing
                employees to benefit from technologies in more than one field of
                administration.
              </p>
            </li>
            <li>
              <p className="my-2">
                With over 7 years of experience, several management applications
                were developed. You can check out some of those apps in the{" "}
                <Link
                  to="/container/solutionlayout#header"
                  className="text-cyan-400"
                >
                  Solutions
                </Link>{" "}
                section!
              </p>
            </li>
            <li>
              <p className="my-2">
                My work has expanded to cover web development and building
                beautiful web apps using the latest technologies.
              </p>
            </li>
          </ul>

          <p className="my-4 mx-4 text-blue-400">
            In case you wonder, this site was built with ReactJS!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
