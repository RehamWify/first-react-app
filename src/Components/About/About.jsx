import React from 'react'
import Style from "./About.module.css"
const About = () => {
  return (
    <>
      <div className={`text-white ${Style.section}`}>
        <div className='text-center mt-5 pt-5'>
          <h2 className='text-uppercase mb-3 fs-1 fw-bolder text-center'>
            about component
          </h2>
          <div className={`d-flex justify-content-center align-items-center mb-3 ${Style.star}`}>
            <i className='fa-solid fa-star'></i>
          </div>
        </div>
        <div className="container">
            <div className='row px-5 pt-3 pb-5'>
          <div className='col-md-6 ps-md-5'>
            <p className='max-width-md-300'>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well asnoptional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className='col-md-6 pe-5'>
            <p className='max-width-md-300'>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default About
