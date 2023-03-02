import React from 'react'
import './Button.css';

const Button = (props) => {
  return (
    <div>
      <button className='butt' type={props.type || 'button'} onClick={props.onClick} >
        {props.children}
      </button>
    </div>
  )
}

export default Button;
