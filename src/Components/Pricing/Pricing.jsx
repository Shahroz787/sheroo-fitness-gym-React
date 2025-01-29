import React from "react";
import "./Pricing.css"


const Pricing = () => {
  return (
    <>
      <div className="pricing container" id="pricingscroll">
        <div className="row">
          <div className="col-sm-4 col-md-12 col-lg-4">
            <div className="box">
              <h6>Basic</h6>
              <h5>$101</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, perferendis hic numquam alias eaque qui vitae error
                placeat earum. Obcaecati, rem dolor impedit sunt doloribus
                incidunt quidem commodi earum repellendus?
                          </p>
                          <button className="btn">Buy Now</button>
            </div>
                  </div>
                  


                  <div className="col-sm-4 col-md-12 mid col-lg-4">
            <div className="box active">
              <h6>Advance</h6>
              <h5>$201</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, perferendis hic numquam alias eaque qui vitae error
                placeat earum. Obcaecati, rem dolor impedit sunt doloribus
                incidunt quidem commodi earum repellendus?
                          </p>
                          <button className="btn">Buy Now</button>
            </div>
                  </div>
                  






                  <div className="col-sm-4 col-md-12 col-lg-4">
            <div className="box">
              <h6>Premium</h6>
              <h5>$301</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, perferendis hic numquam alias eaque qui vitae error
                placeat earum. Obcaecati, rem dolor impedit sunt doloribus
                incidunt quidem commodi earum repellendus?
                          </p>
                          <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
