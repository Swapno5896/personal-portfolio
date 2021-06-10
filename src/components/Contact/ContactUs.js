import React from "react";
import "./ContactUs.scss";
const ContactUs = () => {
  return (
    <div class="d-flex justify-content-center contact-us-parent">
      <div className="row w-70 contact-us-container">
        <div className="col-md-6 col-sm-12">
          <h2 className="text-center">Contact Us</h2>
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

            <button type="submit" class="btn btn-primary">
              Sent Message
            </button>
          </form>
        </div>
        <div className="col-md-6 col-sm-12">
          <h2 className="text-center">Gei in touch</h2>
          <p>
            {" "}
            A contact page is a common web page on a website for visitors to
            contact the organization or individual providing the website. The
            page contains one or more of the following items: an e-mail address.
            a telephone number. ... a contact form for a text message or
            inquiry.
          </p>
          <p> 329 Jashore,Khulna,Bangladesh</p>
          <p>01303477128</p>
          <p>tajul.azazil@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
