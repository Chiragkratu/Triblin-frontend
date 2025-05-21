import React from 'react';
import '../styles/popupmodel.css';
import { IoIosCloseCircleOutline } from "react-icons/io";

const PopupModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-backdrop">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}><IoIosCloseCircleOutline/></button>
        {children}
      </div>
    </div>
  );
};

export default PopupModal;
