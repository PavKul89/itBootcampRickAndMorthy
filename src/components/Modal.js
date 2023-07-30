import React from 'react';
import './Post.css';

const Modal = ({ active, setActive, cartData }) => {
  const { image, name, status, species, origin, location, gender } = cartData;
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? 'modal-content active' : 'modal-content'}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-flex">
          <div>
            <img src={image} alt="" />
          </div>
          <div>
            <p>Name:{name}</p>
            <p>Status:{status}</p>
            <p>Species:{species}</p>
            <p>Origin:{origin.name}</p>
            <p>Location:{location.name}</p>
            <p>Gender:{gender}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
