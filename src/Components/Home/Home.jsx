import React from 'react'
import avatar from "./../../assets/images/imgi_1_avataaars.svg"
import Style from "./Home.module.css"

const Home = () => {
  return (
    <>
    <div className={`py-5 text-white ${Style.section}`}>
        <div className='d-flex justify-content-center align-items-center  mx-auto mb-3 mt-5'>
            <img  className='w-25 mb-3' src={avatar} alt="Avatar image" />
        </div>
        <h2 className='text-uppercase mb-3 fs-1 fw-bolder text-center'>start framework</h2>
        <div className={`d-flex justify-content-center align-items-center mb-3 ${Style.star}`}>
            <i className='fa-solid fa-star'></i>
        </div>
        <div className='text-center pb-3'>Graphic Artist - Web Designer - Illustrator</div>
    </div>
    
    </>
  )
}

export default Home