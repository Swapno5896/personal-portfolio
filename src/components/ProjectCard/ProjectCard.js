import React from "react";
import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faGrinStars } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
const ProjectCard = (props) => {
  const { title, img, discription, liveSite, codeLink } = props.dt;
  return (
    <div className="project-container">
      <div class="card mb-3 project-card">
        <div class="row g-0">
          <div class="col-md-4 col-sm-8 d-flex justify-content-center project-image-container">
            <img class="project-image" src={img} alt="" />
          </div>

          <div class="col-md-8 col-sm-12">
            <div class="card-body">
              <h5 class="card-title text-center  ">{title}</h5>
              <p class="card-text text-center">{discription}</p>
              <p class="card-text">
                <div className="project-tech d-flex justify-content-center">
                  <p>Html</p>
                  <p>Css</p>
                  <p>React</p>
                  <p>Javascript</p>
                </div>
                <div className="project-tech d-flex justify-content-center">
                  <a href={liveSite} target="_blank">
                    <FontAwesomeIcon icon={faChartLine} />
                    Live site
                  </a>
                  <a href={codeLink} target="_blank">
                    <span className="project-card-icon">
                      <FontAwesomeIcon icon={faGithubSquare} />
                    </span>
                    Code Link
                  </a>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
