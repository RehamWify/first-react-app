import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const[scroll,setScroll] = useState(false)

  function handleScroll(){
    if(window.scrollY > 0){
      setScroll(true)
    }else{
      setScroll(false)
    }
  }
  window.addEventListener('scroll',handleScroll)
  return (
    <>
    <nav
      className={`navbar navbar-expand-lg fixed-top ${scroll ? "py-2" : "py-4"}`}
    >
      <div className="container">
        <NavLink className="navbar-brand fs-2 text-white fw-bold" to="/">START FRAMEWORK</NavLink>
        <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span><i className="fa-solid fa-bars"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-3">
              <NavLink className="nav-link rounded-3 text-white fw-bold" aria-current="page" to="/about">ABOUT</NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className="nav-link rounded-3 text-white fw-bold" to="/portfolio">PORTFOLIO</NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className="nav-link rounded-3 text-white fw-bold" to="/contact">CONTACT</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar