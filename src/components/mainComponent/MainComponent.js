import React from "react";
import About from "../About/About";
import MyNavbar from "../MyNavbar/MyNavbar";
import Projects from "../Projects/Projects";
import TopBanner from "../TopBanner/TopBanner";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import Blog from "../Blog/Blog";
const MainComponent = () => {
  return (
    <div>
      <MyNavbar></MyNavbar>
      <TopBanner></TopBanner>
      <Projects></Projects>
      <Blog></Blog>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default MainComponent;
