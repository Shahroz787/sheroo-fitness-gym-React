import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <h6>Important Terms</h6>
              <i className="fas fa-arrow-right">
                {" "}
                <a href="#1">Lorem, ipsum</a>
              </i>

              <i className="fas fa-arrow-right">
                {" "}
                <a href="#1">Lorem, ipsum</a>
              </i>

              <i className="fas fa-arrow-right">
                <a href="#1">Lorem, ipsum</a>
              </i>

              <i className="fas fa-arrow-right">
                <a href="#1">Lorem, ipsum</a>
              </i>

              <i className="fas fa-arrow-right">
                <a href="#1">Lorem, ipsum</a>
              </i>

              <i className="fas fa-arrow-right">
                <a href="#1">Lorem, ipsum</a>
              </i>
            </div>

            <div className="col-sm-4">
              <h6>Important Dates</h6>

              <i className="fas fa-arrow-right">
                {" "}
                <a href="#1">26 June, 2022</a>
              </i>

              <i className="fas fa-arrow-right">
                {" "}
                <a href="#1">6 June, 2022</a>
              </i>

              <i className="fas fa-arrow-right">
                {" "}
                <a href="#1">12 June, 2022</a>
              </i>

              <i className="fas fa-arrow-right">
                {" "}
                <a href="#1">20 June, 2022</a>
              </i>

              <i className="fas fa-arrow-right">
                {" "}
                <a href="#1">30 June, 2022</a>
              </i>
            </div>

            <div className="col-sm-4">
              <h6>Important Links</h6>
              <i className="fas fa-arrow-right">
                {" "}
                <a href="#1">Home</a>
              </i>

              <i className="fas fa-arrow-right">
                {" "}
                <a href="#1">About</a>
              </i>

              <i className="fas fa-arrow-right">
                <a href="#1">Services</a>
              </i>

              <i className="fas fa-arrow-right">
                <a href="#1">Contact</a>
              </i>

              <i className="fas fa-arrow-right">
                <a href="#1">Gym</a>
              </i>

              <i className="fas fa-arrow-right">
                <a href="#1">Login</a>
              </i>
            </div>
          </div>
        </div>

        <div className="customFooter">
          <p>&copy; All reserved by Shahroz Ahmed || Sheroo Gym</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
