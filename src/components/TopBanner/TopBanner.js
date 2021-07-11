import React from "react";
import "./TopBanner.scss";
import swapno from "../../images/swapno.png";
const TopBanner = () => {
  return (
    <div>
      <div class="container top-banner-container">
        <div class="row mt-5">
          <div class="col-md-4  d-flex align-items-center offset-md-2">
            <div>
              <h3 className="title pb-3">Hello, I'm Swapno Mondol</h3>
              <p className="discription">
                I am a hard worker web developer. More than 6 months i am
                working on it. I have more than 10 mern stack projects. I always
                try to learn new things and want to join a company where i can
                learn more from team members. I love my work. Always fit for any
                situation and any works.
              </p>
            </div>
          </div>
          <div class="col-md-2 offset-md-1">
            <img className="TopBannerImage" src={swapno} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
