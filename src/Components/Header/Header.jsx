import React from 'react'
import HeaderImg from "../../images/header.jpg"
import "./Header.css"


const Header = () => {
  return (
      <>
          <section>
              <div className="header">
                  <div className="img">
                      <img src={HeaderImg} alt="" />
                  </div>

                  <div className="content">
                      <h6>Build Your Fitness World <br /> By Buiding Your Body</h6>

                      <button className='btn'>Join Now</button>
                  </div>
              </div>
      </section>
      </>
  )
}

export default Header