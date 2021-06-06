import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  const fakeData = [
    {
      title: "Travelling ",
      discription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi iure nulla distinctio quae ipsa facere fuga, dolore, natus aspernatur id omnis cum veritatis! Quis quasi illum cupiditate soluta. Consequatur, ipsam!",
    },
    {
      title: "Travelling ",
      discription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi iure nulla distinctio quae ipsa facere fuga, dolore, natus aspernatur id omnis cum veritatis! Quis quasi illum cupiditate soluta. Consequatur, ipsam!",
    },
    {
      title: "Travelling ",
      discription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi iure nulla distinctio quae ipsa facere fuga, dolore, natus aspernatur id omnis cum veritatis! Quis quasi illum cupiditate soluta. Consequatur, ipsam!",
    },
    {
      title: "Travelling ",
      discription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi iure nulla distinctio quae ipsa facere fuga, dolore, natus aspernatur id omnis cum veritatis! Quis quasi illum cupiditate soluta. Consequatur, ipsam!",
    },
    {
      title: "Travelling ",
      discription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi iure nulla distinctio quae ipsa facere fuga, dolore, natus aspernatur id omnis cum veritatis! Quis quasi illum cupiditate soluta. Consequatur, ipsam!",
    },
  ];
  return (
    <div className="d-flex justify-content-center">
      <div v class="card border-primary mb-3">
        {fakeData.map((dt) => (
          <ProjectCard></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
