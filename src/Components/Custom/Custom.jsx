import React from 'react'
import Custom1 from "../../images/custom.jpg"
import Custom2 from "../../images/custom2.jpg"
import Custom3 from "../../images/custom3.jpg"
import "./Custom.css"



const Custom = () => {
  return (
      <>
          <section>
              <div className="custom container">
                  <div className="row">
                      <div className="col-sm-4">
                          <div className="box">
                              <img src={Custom2} className="img-fluid" alt="" />
                          </div>
                      </div>



                      <div className="col-sm-4">
                          <div className="box">
                              <img src={Custom1} className="img-fluid" alt="" />
                          </div>
                      </div>




                      <div className="col-sm-4">
                          <div className="box">
                              <img src={Custom3} className="img-fluid" alt="" />
                          </div>
                      </div>
                  </div>
              </div>
      </section>
      </>
  )
}

export default Custom