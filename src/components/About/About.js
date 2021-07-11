import React from "react";
import "./About.css";
import swapno2 from "../../images/swapno-2.jpg";
import backGroundImg from "../../images/about-back.jpg";
const About = () => {
  return (
    <div class="about-container">
      <img className="bg-img" src={backGroundImg} alt="" />

      <div class="row about-content">
        <div class="col-md-4 offset-md-2">
          <img className="about-img" src={swapno2} alt="" />
        </div>
        <div class="col-md-3 offset-md-1">
          <h3 className='text-center'>About Me</h3>
          <p className="about-me-text">
            An aspiring MERN Stack Developer.I lost myself when I dive into the
            codes. I am a professional web designer and developer.No project is
            too big or too small for me. Recently I have completed react and
            node js. I am expertise in
          </p>
          <hr />
          <p className="about-me-text">
            {" "}
            Html5,Css3,Javascript,Bootstrap,Jquery,React,Node JS,Express
            JS,Mongo DB. Resourceful Web Developer lends hands-on approach to
            customizing web presence strategy. More than 2 years of experience
            working closely with Web Development to outline organizational needs
            and translate them
            <hr />
            into extensive lines of code that support
            objectives. Adept creation of scripts using HTML, CSS and JavaScript
            to convey unique branding and promote sales and marketing
            opportunities. Specialty supporting intricate backend needs and
            lending assistance throughout webpage lifecycle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
