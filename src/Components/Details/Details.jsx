import React from "react";
import DetailsPic from "../../images/details.png";
import "./Details.css"



const Details = () => {
  return (
    <>
      <div className="container details" id="aboutscroll">
        <div className="row">
          <div className="col-sm-5">
            <h6>There is No Tomorrow</h6>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              expedita minus, recusandae mollitia laboriosam tempore quos
              distinctio odio adipisci explicabo provident, nam reiciendis
              facere? Quam excepturi magnam reprehenderit quia dolorum! Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Deserunt,
              adipisci.
            </p>

            <button className="btn">View More</button>
          </div>

          <div className="offset-sm-2 col-sm-5">
            <img src={DetailsPic}  alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
