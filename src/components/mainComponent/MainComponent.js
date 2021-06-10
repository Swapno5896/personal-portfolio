import React from "react";
import About from "../About/About";
import MyNavbar from "../MyNavbar/MyNavbar";
import Projects from "../Projects/Projects";
import TopBanner from "../TopBanner/TopBanner";
import Footer from "../Footer/Footer";
import Blog from "../Blog/Blog";
import ContactUs from "../Contact/ContactUs.js";

const MainComponent = () => {
  return (
    <div>
      <MyNavbar></MyNavbar>
      <TopBanner></TopBanner>
      <Projects></Projects>
      <Blog></Blog>
      <About></About>

      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default MainComponent;
