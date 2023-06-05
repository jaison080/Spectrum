import React, { useState, useEffect } from 'react';
import NewAnswer from './NewAnswer';
import NewQn from './NewQn';
import './Recent_qn.css';

const Recent_qn = (props) => {
  const [answerRecent, setAnswerRecent] = useState('');
  const [unansweredQuestions, setUnansweredQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const token = localStorage.getItem('token');
  const fetchQuestions = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/qna/getAllUnansweredQuestions', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
      });
      if (response.ok) {
        const data = await response.json();
        setUnansweredQuestions(data);
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
        {unansweredQuestions.map((question) => (
          <div key={question._id} className='qn_description'>
            {question.title}<br></br>
            Qn: {question.content}<br></br>
            {question.author}
            <NewAnswer id={question._id} onSolveQuestion={saveSolvedQuestionDataHandler} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recent_qn;
