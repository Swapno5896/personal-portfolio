import React from "react";
import About from "../About/About";
import MyNavbar from "../MyNavbar/MyNavbar";
import Projects from "../Projects/Projects";
import TopBanner from "../TopBanner/TopBanner";
import Footer from "../Footer/Footer";
const MainComponent = () => {
  return (
    <div>
      <MyNavbar></MyNavbar>
      <TopBanner></TopBanner>
      <Projects></Projects>
      <About></About>
      <Footer></Footer>
    </div>
  );
};

export default MainComponent;
