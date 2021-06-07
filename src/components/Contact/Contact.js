import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="container-parent">
      <div class="container contact-container d-flex justify-content-center">
        <div class="row w-75">
          <div class="col-md-6 col-sm-3">
            <h2>Get In Touch</h2>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Name
                </label>
                <input type="Name" class="form-control" />{" "}
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <label for="exampleInputEmail1" class="form-label"></label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Message
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              {/* <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div> */}
              <button type="submit" class="btn btn-primary">
                Sent Message
              </button>
            </form>
          </div>
          <div class="col-md-6 col-sm-3">
            <h2 style={{ paddingBottom: "20px" }}>Contact Us</h2>
            <p>
              {" "}
              A contact page is a common web page on a website for visitors to
              contact the organization or individual providing the website. The
              page contains one or more of the following items: an e-mail
              address. a telephone number. ... a contact form for a text message
              or inquiry.
            </p>
            <p> 329 Jashore,Khulna,Bangladesh</p>
            <p>01303477128</p>
            <p>tajul.azazil@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
