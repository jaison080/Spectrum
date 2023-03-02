import React from 'react';
import './JobItems.css';
import JobDate from './JobDate';

const JobItems = (props) => {

    return (
      <div className='job_item'>
        <div>
            <div className='details'>
              <div className='title'>{props.title}</div>
              <div className='font_size'>
                <div className='company'>{props.company}  {props.rating}⭐</div>            
                <div>{props.location}</div>
                <span><div className='amount'>${props.amount}  {props.timing}</div></span>
              </div>
              
              <div>{props.skills}</div>
              <div className='date'><JobDate date={props.date}/></div>
            </div>
        </div>
      </div>
    );
  }

export default JobItems;
