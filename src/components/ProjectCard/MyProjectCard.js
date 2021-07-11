import React from "react";
import "./MyProjectCard.SCSS";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faGrinStars } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
const MyProjectCard = (props) => {
  const { title, img, discription, liveSite, codeLink } = props.dt;
  console.log(title, img, discription, liveSite, codeLink);
  return (
    <div className=" col-md-6">
      <div style={{ margin: "51px 14px" }} class="card">
        <img src={img} class="card-img-top project-img" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{discription}</p>
        </div>

        <div class="card-body d-flex justify-content-around">
          <a href={liveSite} className="card-link">
            Live Site{" "}
            <span>

              <FontAwesomeIcon icon={faChartLine} />
            </span>
          </a>
          <a href={codeLink} className="card-link">
            Code Link{" "}
            <span>
              {" "}
              <FontAwesomeIcon icon={faGithubSquare} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyProjectCard;
