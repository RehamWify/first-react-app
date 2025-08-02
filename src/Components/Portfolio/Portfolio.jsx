import React, { useState } from 'react'
import Style from './Portfolio.module.css'
import port1 from './../../assets/images/imgi_1_poert1.png'
import port2 from './../../assets/images/imgi_2_port2.png'
import port3 from './../../assets/images/imgi_3_port3.png'
import Modal from '../modal/Modal'
import Card from '../Card/Card'
// import Backdrop from '../Backdrop/Backdrop'

const imgList = [port1, port2, port3, port1, port2, port3]

const Portfolio = () => {
      // State to manage which image is selected for the modal.
  const [selectedImage, setSelectedImage] = useState(null);

  /**
   * Opens the modal with the selected image.
   * @param {object} image - The image object to display in the modal.
   */
  const openModal = (image) => {
    setSelectedImage(image);
  };

  /**
   * Closes the modal by resetting the selected image state.
   */
  const closeModal = () => {
    setSelectedImage(null);
  };

  /**
   * Prevents the click event from bubbling up to the modal's backdrop.
   * @param {object} e - The click event object.
   */
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

    return (
        <>
        <div className={`text-black text-center py-5 ${Style.section}`}>
                <div className=" pt-5">
                    <h2 className={`text-uppercase mb-3 mt-3 fs-1 fw-bolder ${Style.title}`}>portfolio component</h2>
                    <div className={`d-flex justify-content-center align-items-center mb-3 ${Style.star}`}>
                        <i className='fa-solid fa-star'></i>
                    </div>
                </div>
                <div className='container'>
                    <div className="row g-5">
                        {
                            imgList.map((ele, idx) => {
                                return (
                                    <Card key={idx} image={ele} onClick={() => openModal(imgList[idx])} />
                                )
                            })
                        }
                    </div>
                </div>
                {selectedImage && <Modal image={selectedImage} onClose={closeModal} handleModal={handleModalContentClick} />}
            </div>
        </>
    )
}

export default Portfolio

