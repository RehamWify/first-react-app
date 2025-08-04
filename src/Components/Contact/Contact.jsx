import React, { useState } from 'react'
import Style from "./Contact.module.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    userName: false,
    userAge: false,
    userEmail: false,
    userPassword: false,
  });


  function handleChange (e)  {
    {
    setFormData((previous) => ({
        ...previous,
        [e.target.id]: e.target.value.trim() !== ""
    }));
    }
    

  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

return (
    <>
    <div className={`text-black text-center py-5 ${Style.section}`}>
        <div className="pt-5">
            <h2 className={`text-uppercase mb-3 mt-3 fs-1 fw-bolder ${Style.title}`}>Contact Section</h2>
            <div className={`d-flex justify-content-center align-items-center mb-3 ${Style.star}`}>
                <i className='fa-solid fa-star '></i>
            </div>
        </div>
        <div className="container mt-5">
            <form onSubmit={handleSubmit} className="row justify-content-center">
                <div className={`position-relative mb-3 ${Style.formBox}`}>
                    <label
                        htmlFor="userName"
                        style={{
                            transition: 'opacity 0.3s ease, left 0.3s ease, top 0.3s ease',
                            position: 'absolute',
                            left: '0',
                            top: formData.userName ? '-20%' : '15%',
                            transform: 'translateY(-50%)',
                            color: '#1abc9c',
                            fontSize: '16px',
                            pointerEvents: 'none',
                            opacity: formData.userName ? 1 : 0,
                        }}
                    >
                        userName :
                    </label>
                    <input
                        type="text"
                        name="userName"
                        placeholder="userName"
                        id="userName"
                        onChange={handleChange}
                    />
                </div>
                <div className={`position-relative mb-3 ${Style.formBox}`}>
                    <label
                        htmlFor="userAge"
                        style={{
                            transition: 'opacity 0.3s ease, left 0.3s ease, top 0.3s ease',
                            position: 'absolute',
                            left: '0',
                            top: formData.userAge ? '-20%' : '15%',
                            transform: 'translateY(-50%)',
                            color: '#1abc9c',
                            fontSize: '16px',
                            pointerEvents: 'none',
                            opacity: formData.userAge ? 1 : 0,
                        }}
                    >
                        userAge :
                    </label>
                    <input
                        type="number"
                        name="userAge"
                        placeholder="userAge"
                        id="userAge"
                        onChange={handleChange}
                    />
                </div>
                <div className={`position-relative mb-3 ${Style.formBox}`}>
                    <label
                        htmlFor="userEmail"
                        style={{
                            transition: 'opacity 0.3s ease, left 0.3s ease, top 0.3s ease',
                            position: 'absolute',
                            left: '0',
                            top: formData.userEmail ? '-20%' : '15%',
                            transform: 'translateY(-50%)',
                            color: '#1abc9c',
                            fontSize: '16px',
                            pointerEvents: 'none',
                            opacity: formData.userEmail ? 1 : 0,
                        }}
                    >
                        userEmail :
                    </label>
                    <input
                        type="email"
                        name="userEmail"
                        placeholder="userEmail"
                        id="userEmail"
                        onChange={handleChange}
                    />
                </div>
                <div className={`position-relative mb-3 ${Style.formBox}`}>
                    <label
                        htmlFor="userPassword"
                        style={{
                            transition: 'opacity 0.3s ease, left 0.3s ease, top 0.3s ease',
                            position: 'absolute',
                            left: '0',
                            top: formData.userPassword ? '-20%' : '15%',
                            transform: 'translateY(-50%)',
                            color: '#1abc9c',
                            fontSize: '16px',
                            pointerEvents: 'none',
                            opacity: formData.userPassword ? 1 : 0,
                        }}
                    >
                        userPassword :
                    </label>
                    <input
                        type="password"
                        name="userPassword"
                        placeholder="userPassword"
                        id="userPassword"
                        onChange={handleChange}
                    />
                </div>
                <div className={`position-relative ${Style.formBox}`}>
                    <button type="submit">Send Message</button>
                </div>
            </form>
        </div>
    </div>
    </>
);
};

export default Contact
