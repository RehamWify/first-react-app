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











//     const [change , setChange]=useState({
//         name: false,
//         age: false,
//         email: false,
//         password: false,
//     });

//     function handleChange() {
//         setChange(true)
//     }
// return (
//     <>
//     <div className={`text-black text-center py-5 ${Style.section}`}>
//         <div className=" pt-5">
//                     <h2 className={`text-uppercase mb-3 mt-3 fs-1 fw-bolder ${Style.title}`}>Contact Section</h2>
//                     <div className={`d-flex justify-content-center align-items-center mb-3 ${Style.star}`}>
//                             <i className='fa-solid fa-star '></i>
//                     </div>
//         </div>
//         <div className="container ">
//             <form  class="row justify-content-between pt-5">
//             <div className="col-md-12 col-lg-6">
//                         <div className="input-group mb-3 pe-0 pe-lg-1">
//                             <label htmlFor="name" className=''>userName:</label>
//                         <input type="text" 
//                         name="name"
//                         id="name"
//                         className="form-control" 
//                         onChange={handleChange}
//                         placeholder="userName" 
//                         aria-label="Name" 
//                         aria-describedby="basic-addon1"
//                         required />
//                         </div>
//             </div>
//             <div className="col-md-12 col-lg-6">
//                         <div className="input-group mb-3 pe-0 pe-lg-1">
//                             <label htmlFor="age" className=''>userAge:</label>
//                         <input type="text" 
//                         name="age"
//                         id="age"
//                         className="form-control"
//                         onChange={handleChange}
//                         placeholder="userAge" 
//                         aria-label="userAge" 
//                         aria-describedby="basic-addon1"
//                         required />
//                         </div>
//             </div>
//             <div className="col-md-12 col-lg-6">
//                         <div className="input-group mb-3 ps-0 ps-lg-1">
//                             <label htmlFor="email" className=''></label>
//                         <input type="email" 
//                         name="email"
//                         id="email"
//                         className="form-control" 
//                         onChange={handleChange}
//                         placeholder="userEmail" 
//                         aria-label="userEmail" 
//                         aria-describedby="basic-addon1"
//                         required />
//                         </div>
//             </div>
//             <div className="col-md-12 col-lg-6">
//                         <div className="form-group mb-3 pe-0 pe-lg-1">
//                             <label htmlFor="userPassword" className=''></label>
//                         <input type="password" 
//                         name="userPassword"
//                         id="userPassword"
//                         className="form-control" 
//                         onChange={handleChange}
//                         placeholder="userPassword" 
//                         aria-label="userPassword" 
//                         aria-describedby="basic-addon1"
//                         required />
//                         </div>
//             </div>
//             <div className="py-4">
//                 <button className="btn btn-submit " type="submit" value="Submit">Submit</button>
//             </div>
//             </form>
//         </div>
//     </div>
//     </>
// )


export default Contact