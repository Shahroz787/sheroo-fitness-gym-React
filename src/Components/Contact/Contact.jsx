import React from "react";
import "./Contact.css";

const Contact = () => {
  const map =
    'https://www.google.com/maps/embed?x7qLQGFMdRoNc8DWA" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';

  return (
    <>
      <section className="contacts padding">
        <div className="container shadow flexSB" id="contactscoll">
          <div className="left contact-row row">
            <iframe src={map} title="contactFrame"></iframe>
          </div>
          <div className="right contact-row row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>273-usmania colony jail road,karachi</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p>shahrozahmed787@gmail.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p>+8801792674690</p>
              </div>
            </div>

            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea
                cols="30"
                rows="10"
                placeholder="Write your speech here..."
              ></textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
