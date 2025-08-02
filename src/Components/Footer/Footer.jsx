import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='footer'>
          <div className="container">
            <div className="row">
                <div className='footer-body col-md-4 py-5'>
            <h3 className='text-uppercase'>location</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          <div className='footer-body col-md-4 py-5'>
            <h3 className='text-uppercase'>around the web</h3>
            <div className='icons'>
              <i className='fa-brands fa-facebook mx-1 icon'></i>
              <i className='fa-brands fa-twitter mx-1 icon'></i>
              <i className='fa-brands fa-linkedin-in mx-1 icon'></i>
              <i className='fa-solid fa-globe mx-1 icon'></i>
            </div>
          </div>
          <div className='footer-body col-md-4 py-5'>
            <h3 className='text-uppercase'>about freelancer</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
            </div>
          </div>
      </div>
      <div className="final text-white text-center py-3">
            <p>Copyright © Your Website 2021</p>
          </div>
    </>
  )
}

export default Footer
