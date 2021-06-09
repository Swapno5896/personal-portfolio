import React from "react";
import "./Blog.css";
import image from "../../images/hotel.png";
const Blog = () => {
  return (
    <div>
      <div class="container d-flex justify-content-center">
        <div class="row w-80">
          <div class="col-md-4">
            <div class="card" style={{ width: "23rem" }}>
              <img src={image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>{" "}
            <div class="card" style={{ width: "23rem" }}>
              <img src={image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class="card" style={{ width: "23rem" }}>
              <img src={image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
            <div class="card" style={{ width: "23rem" }}>
              <img src={image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>{" "}
          <div class="col-md-4 ">
            <div class="card mb-3 card-small" style={{ maxWidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={image} class="card-img-top" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                    </p>
                    <p class="card-text">
                      <a href="#" class="btn btn-primary">
                        Read more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div class="card mb-3 card-small" style={{ maxWidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={image} class="card-img-top" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                    </p>
                    <p class="card-text">
                      <a href="#" class="btn btn-primary">
                        Read more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div class="card mb-3 card-small" style={{ maxWidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={image} class="card-img-top" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                    </p>
                    <p class="card-text">
                      <a href="#" class="btn btn-primary">
                        Read more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div class="card mb-3 card-small" style={{ maxWidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={image} class="card-img-top" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                    </p>
                    <p class="card-text">
                      <a href="#" class="btn btn-primary">
                        Read more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
