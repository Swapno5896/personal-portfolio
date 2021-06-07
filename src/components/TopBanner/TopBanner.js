import React from "react";
import "./TopBanner.css";
import swapno from "../../images//swapno.png";
const TopBanner = () => {
  return (
    <div>
      <div class="container top-banner-container">
        <div class="row">
          <div class="col-md-4 offset-md-2 top-banner-container d-flex align-items-center">
            <div>
              <h3 className="title">Hello, I'm Swapno Mondol</h3>
              <p className="discription">
                I am a hard worker web developer. More than 6 months i am
                working on it. I have more than 10 mern stack projects. I always
                try to learn new things and want to join a company where i can
                learn more from team members. I love my work. Always fit for any
                situation and any works.
              </p>
            </div>
          </div>
          <div class="col-md-2 offset-md-2">
            <img className="TopBannerImage" src={swapno} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
