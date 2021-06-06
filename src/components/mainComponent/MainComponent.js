import React from "react";
import MyNavbar from "../MyNavbar/MyNavbar";
import Projects from "../Projects/Projects";
import TopBanner from "../TopBanner/TopBanner";

const MainComponent = () => {
  return (
    <div>
      <MyNavbar></MyNavbar>
      <TopBanner></TopBanner>
      <Projects></Projects>
      <h2>this is main component</h2>
    </div>
  );
};

export default MainComponent;
