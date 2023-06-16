import React from 'react'
import JobDate from '../Jobs/JobDate';
import './Apartments.css';

const Apartments = (props) => {
  return (
      <div className='apartment'>
        <div>
            <img src={props.image} alt='hi' className='apartment_img'></img>
        </div>
        <div className='apartment_title'>{props.title}</div>
        <div className='font_size'>
            <div>{props.location} </div>
            <div className='rent'>{props.rent} </div>
            <div className='facility'>{props.facility} </div>
        </div>
        <div className='apartment_details'>{props.details} </div>
        <div className='ap_date'><JobDate date={props.date} /> </div>
      </div>
  )
}

export default Apartments;
