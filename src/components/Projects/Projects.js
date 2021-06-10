import React from "react";
import "./project.scss";
import hotel from "../../images/hotel.png";
import resturent from "../../images/resturent.png";
import gim from "../../images/gim.png";
import MyProjectCard from "../ProjectCard/MyProjectCard";
import GroupProjectCard from "../ProjectCard/GroupProjectCard";
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
    <div className="project-container">
      <h2 className="text-center project-title">
        Some Privious Projects . . .
      </h2>
      <div class="d-flex justify-content-center">
        <div className="row width-controll">
          <div className="col-md-8 col-sm-12 ">
            <div class="row">
              {fakeData.map((dt) => (
                <MyProjectCard dt={dt}></MyProjectCard>
              ))}
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div class="row">
              {fakeData.map((dt) => (
                <GroupProjectCard></GroupProjectCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
