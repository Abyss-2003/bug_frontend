import React, { useState } from 'react';
import './Modal.css';

const Modal = ({isOpen,children,isClose }) => {
//   const [isOpen,setIsOpen]=useState(true)
//   if (!isOpen) return null;/
  const onClose=()=>{
    isClose(false)
  }
    
  return (
    <>
    {{isOpen} && (<div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>)}
    </>
  );
};

export default Modal;
