import React from "react";
import { Outlet } from "react-router-dom";
import PageContainerNavBar from "../nav/PageContainerNavBar";
import BackToTop from "../nav/BackToTop";
import About from "../landing_page_components/About";

const PageContainer = () => {
  return (
    <>
      <PageContainerNavBar />
      <div className="max-w-[1240px] justify-center mx-auto">
        <Outlet />
      </div>

      <BackToTop />
    </>
  );
};

export default PageContainer;
