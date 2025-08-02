import React from 'react'
import Style from './Modal.module.css'

  // A simple Modal component, rendered conditionally.
const Modal = ({ image, onClose , handleModal }) => {
    if (!image) return null;

    return (
      <div className={`${Style.modalBackdrop}`} onClick={onClose}>
        <div className={`${Style.modalContent}`} onClick={handleModal}>
          {/* Close button */}
          {/* <button onClick={onClose} className="modalCloseButton">
            &times;
          </button> */}
          {/* Enlarged image */}
          <img src={image} alt="" className={`${Style.modalImage}`} />
        </div>
      </div>
    );
  };


  export default Modal