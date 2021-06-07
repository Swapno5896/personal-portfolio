import React from "react";
import "./project.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import hotel from "../../images/hotel.png";
import resturent from "../../images/resturent.png";
import gim from "../../images/gim.png";
const Projects = () => {
  const fakeData = [
    {
      title: "Fitness club - A gim application ",
      discription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi iure nulla distinctio quae ipsa facere fuga, dolore, natus aspernatur id omnis cum veritatis! Quis quasi illum cupiditate soluta. Consequatur, ipsam!",
      img: hotel,
      liveSite: "https://fitness-club-79595.web.app/",
      codeLink: "https://github.com/Swapno5896/Fitness-Club",
    },
    {
      title: "Luxury Hotel - A Hotel application ",
      discription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi iure nulla distinctio quae ipsa facere fuga, dolore, natus aspernatur id omnis cum veritatis! Quis quasi illum cupiditate soluta. Consequatur, ipsam!",
      img: resturent,
      liveSite: "https://amazing-hotel-bcdfb.web.app/",
      codeLink: "https://github.com/Swapno5896/Luxury-Hotel",
    },
    {
      title: "Amazing Restaurant - A restaurant application ",
      discription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi iure nulla distinctio quae ipsa facere fuga, dolore, natus aspernatur id omnis cum veritatis! Quis quasi illum cupiditate soluta. Consequatur, ipsam!",
      img: gim,
      liveSite: "https://fresh-food-9389b.web.app/",
      codeLink: "https://github.com/Swapno5896/resturent/tree/dev-shuvo",
    },
  ];
  return (
    <div className="d-flex  justify-content-center project-container">
      <div v class="card  mb-3">
        {fakeData.map((dt) => (
          <ProjectCard dt={dt}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
