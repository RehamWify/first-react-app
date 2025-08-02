import React from 'react'
import Style from './Notfound.module.css'

const Notfound = () => {
  return (
    <div className={`text-black text-center py-5 d-flex justify-content-center align-items-center ${Style.section}`}>
            <div className="mt-5 py-5">
                <h2 className={`text-uppercase mb-3 mt-3 fs-3 fw-bolder ${Style.title}`}>4O4 Not Found Works</h2>
            </div>
    </div>
  )
}

export default Notfound