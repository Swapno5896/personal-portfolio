import React from "react";
import "./TopBanner.css";
const TopBanner = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-4 offset-md-2 top-banner-container d-flex align-items-center">
            <div>
              <h3 className="title">Hello, I'm Swapno Mondol</h3>
              <p className="discription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                ea! Corporis, amet dolor consectetur fugit harum nihil
                necessitatibus voluptatum. Excepturi maxime laborum autem
                dolorum minus doloremque ipsa consectetur nemo blanditiis!
              </p>
            </div>
          </div>
          <div class="col-md-2 offset-md-2">
            <img
              className="TopBannerImage"
              src="https://i.pinimg.com/564x/5a/f2/1c/5af21ceb1c74f261bcc3f42272974722.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
