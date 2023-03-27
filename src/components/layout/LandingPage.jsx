import React from "react";
import { Element } from "react-scroll";
import Solutions from "../landing_page_components/Solutions";
import Home from "../landing_page_components/Home";
import Services from "../landing_page_components/Services";
import BackToTop from "../nav/BackToTop";
import About from "../landing_page_components/About";
import LandingPageNavbar from "../nav/LandingPageNavbar";

const LandingPage = () => {
  return (
    <>
      <LandingPageNavbar />

      <Element id="h" name="home" className="element">
        <Home />
      </Element>
      <Element id="solutions" name="solutions" className="element">
        <Solutions />
      </Element>
      <Element id="services" name="services" className="element">
        <Services />
      </Element>

      <BackToTop />
    </>
  );
};

export default LandingPage;
