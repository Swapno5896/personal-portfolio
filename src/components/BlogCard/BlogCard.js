import React from "react";
import image from "../../images/hotel.png";
const BlogCard = (props) => {
  console.log(props.bg);

  return (
    <div className="col-md-6">
      <div class="card" style={{ width: "19rem" }}>
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
