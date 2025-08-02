import React from 'react'
import Style from "./Card.module.css"
// A simple Card component to display a single image.
    const Card = ({ image, onClick }) => (
        <div onClick={onClick} className="col-md-6 col-lg-4" >
            <div className="rounded-3 overflow-hidden position-relative">
                <img className='w-100 rounded-3' src={image} alt="" />
                <div
                    className={`w-100 h-100 position-absolute top-0 start-0 d-flex justify-content-center align-items-center ${Style.inner}`}>
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
            </div>
        </div>
    );



export default Card 
