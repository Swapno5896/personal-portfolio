import React from "react";
import "./MyProjectCard.CSS";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faGrinStars } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
const MyProjectCard = (props) => {
  const { title, img, discription, liveSite, codeLink } = props.dt;
  console.log(title, img, discription, liveSite, codeLink);
  return (
    <div className="card-container col-md-6">
      <div class="card">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{discription}</p>
        </div>
        {/* <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul> */}
        <div class="card-body">
          <a href={liveSite} class="card-link">
            Live Site{" "}
            <span>
              {" "}
              <FontAwesomeIcon icon={faChartLine} />
            </span>
          </a>
          <a href={codeLink} class="card-link">
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
