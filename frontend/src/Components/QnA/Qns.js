import React from 'react';
import './Qns.css';
import NewQn from './NewQn';

const Qns = (props) => {

    const addQnHandler = (qns) => {
        console.log(qns);
    }

  return (
    <div>
            
            <div className='qn_wrapper'>
            <div><img src={props.image} alt='profile' className='answer_img' /></div>
                <div className='solver_identity'> 
                    <div className='solver'>{props.solver}</div>
                    <div className='solver_designation'>{props.designation}</div>
                </div>
            <div className='qn_answering' >{props.qn}? </div>
            <div className='answer'>{props.answer} </div>
            </div>
    </div>
  )
}

export default Qns
