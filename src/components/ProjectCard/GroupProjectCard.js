import React from "react";
import image from "../../images/hotel.png";
import "./GroupProjectCard.css";
const GroupProjectCard = () => {
  return (
    <div class="card  group-project-container">
      <div class="row g-3">
        <div class="col-md-4 col-sm-4">
          <img className="group-project-img" src={image} alt="..." />
        </div>
        <div class="col-md-8 col-sm-8">
          <div class="card-body">
            <h5 class="card-title">Group project</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupProjectCard;
