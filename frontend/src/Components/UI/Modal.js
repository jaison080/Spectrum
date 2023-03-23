import React from 'react';
import './modal.css';

const Modal = (props) => {
  const { showModal, handleClose, children } = props;
  const showHideClassName = showModal ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

export default Modal;