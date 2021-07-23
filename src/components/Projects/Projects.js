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
      title: "Fitness club - A gim application ",
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

  // const personalProject =[
  //   {img:,title:'Service Master',description:'This is a wider card with supporting text below as a natural lead-in to additional',technology:['React','Redux','Typescript','Sass'],liveSite:'',uiCode:'',serverCode:''},
  //   {img:,title:'Medical Service',description:'This is a wider card with supporting text below as a natural lead-in to additional',technology:['React','Redux','Typescript','Sass'],liveSite:'',uiCode:'',serverCode:''},
  //   {img:,title:'Amazing Museum',description:'This is a wider card with supporting text below as a natural lead-in to additional',technology:['React','sass','Bootstrap'],liveSite:'',uiCode:'',serverCode:''},
  // ]

  const groupProject = [
    { img: gim, title: 'Fitness club - A gim application', description: 'A user can join gim though this application, an can see the benefit of this gim it have', technology: ['React', 'Bootstrap', 'Css', 'js'], liveSite: 'https://fitness-club-79595.web.app/', uiCode: 'https://github.com/Swapno5896/Fitness-Club', serverCode: '' },
    { img: hotel, title: 'Hotel service - A service application', description: ' This website is for travell lover , a tarveller can pre book an room where he can stay ', technology: ['React', 'Bootstrap', 'Css', 'js'], liveSite: 'https://amazing-hotel-bcdfb.web.app/', uiCode: 'https://github.com/Swapno5896/Luxury-Hotel', serverCode: '' },
    { img: resturent, title: 'Amazing Restaurant - A restaurant application', description: 'To make food lover life easier it helpful, hear a user can order food online or book table.', technology: ['React', 'Bootstrap', 'Css', 'js'], liveSite: 'https://fresh-food-9389b.web.app/', uiCode: 'https://github.com/Swapno5896/Luxury-Hotel', serverCode: '' },
  ]
  return (
    <div className="project-container">
      <h2 className="text-center project-title">
        Some Privious Projects . . .
      </h2>
      <div class="d-flex justify-content-center">
        <div className="row width-controll">
          <div className="col-md-8 col-sm-12 ">
            <div class="row ">
              {fakeData.map((dt) => (
                <MyProjectCard dt={dt}></MyProjectCard>
              ))}
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div class="row" style={{ marginTop: "34px" }}>
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
