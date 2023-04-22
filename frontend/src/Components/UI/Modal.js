import React from 'react';
import './modal.css';

const Modal = (props) => {
  const classes = 'modal-main ' + props.className; 

  return (
    <div className='modal'>
      <section className={classes}>
        {props.children}
      </section>
    </div>
  );
};

export default Modal;