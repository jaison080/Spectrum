import React, { useState, useEffect } from 'react';
import NewAnswer from './NewAnswer';
import NewQn from './NewQn';
import './Recent_qn.css';

const Recent_qn = (props) => {
  const [answerRecent, setAnswerRecent] = useState('');


  const token = localStorage.getItem('token');

  const addAnswerHandler = (event) => {
    setAnswerRecent(event.target.value);
  };

  const saveSolvedQuestionDataHandler = (enteredSolutionData) => {
    const solutionData = {
      ...enteredSolutionData,
    };
    console.log(solutionData);
  };

  return (
    <div className='recent_qn_wrapper'>
      <div className='recent_qn_list'>
          <div key={props.id} className='qn_description'>
            <div className='recent_qn_title'>{props.title}</div>
            <div className='recent_qn'>Qn: {props.qn}</div>
            <div className='recent_qn_date'>
              {new Date(props.date).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </div>
            <div className='recent_qn_author'>{props.author}</div>
            <div className='solve_qn'><NewAnswer id={props.id} onSolveQuestion={saveSolvedQuestionDataHandler} /></div>
          </div>
      </div>
    </div>
  );
};

export default Recent_qn;
