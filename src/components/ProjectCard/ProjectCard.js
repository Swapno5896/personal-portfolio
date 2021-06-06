import React from "react";
import "./ProjectCard.css";
const ProjectCard = () => {
  return (
    <div>
      <div class="card mb-3 project-card">
        <div class="row g-0">
          <div class="col-md-4 col-sm-8 d-flex justify-content-center">
            <img
              class="project-image"
              src="https://i.pinimg.com/564x/5a/f2/1c/5af21ceb1c74f261bcc3f42272974722.jpg"
              alt=""
            />
          </div>

          <div class="col-md-8 col-sm-12">
            <div class="card-body">
              <h5 class="card-title text-center  ">Card title</h5>
              <p class="card-text text-center">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <div className="project-tech d-flex justify-content-center">
                  <p>dskfl</p>
                  <p>dskfl</p>
                  <p>dskfl</p>
                  <p>dskfl</p>
                </div>
                <div className="project-tech d-flex justify-content-between">
                  <p>Live site</p>
                  <p>Code Link</p>
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
