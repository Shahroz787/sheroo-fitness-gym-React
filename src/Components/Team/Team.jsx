import React from "react";
import Team1 from "../../images/team.jpg";
import Team2 from "../../images/team2.jpg";
import Team3 from "../../images/team3.jpg";
import "./Team.css"


const Team = () => {
  return (
    <>
      <section id="servicescroll">
        <div className="teams container">
          <div className="row">
            <div className="col-sm-4">
              <div className="box">
                <img src={Team1} className="img-fluid" alt="" />

                <div className="content">
                  <h6>Ruhi Gym Team</h6>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="box">
                <img src={Team2} className="img-fluid" alt="" />

                <div className="content">
                  <h6>Ruhi Gym Team</h6>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="box">
                <img src={Team3} className="img-fluid" alt="" />

                <div className="content">
                  <h6>Ruhi Gym Team</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
