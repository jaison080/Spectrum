import React, { useState, useEffect } from 'react';
import './QnA.css';
import Recent_qn from './Recent_qn';
import Qns from './Qns';
import NewQn from './NewQn';

const Dummy_Recent_Qns = [
  // Dummy data
];

const Dummy_Qns_list = [
  // Dummy data
];

const QnA = (props) => {
  const [recentQns, setRecentQns] = useState(Dummy_Recent_Qns);
  const [qnaDetails, setQnaDetails] = useState([]);
  const [unansweredQuestions, setUnansweredQuestions] = useState([]);
  const [loading, setLoading] = useState(true); 

  const addQnHandler = (recentQns) => {
    fetchQuestions();
    setRecentQns((prevRecentQns) => {
      return [recentQns, ...prevRecentQns];
    });  
  };
  

  const token = localStorage.getItem('token');

  const fetchQnA = async () => {
    try {
      const response = await fetch(
        'http://localhost:5000/api/qna/getAllAnsweredQuestions',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setQnaDetails(data);
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false); 
    }
  };

  const fetchQuestions = async () => {
    try {
      const response = await fetch(
        'http://localhost:5000/api/qna/getAllUnansweredQuestions',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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

  useEffect(() => {
    fetchQnA();
    fetchQuestions();
  }, []);



  return (
    <div>
      <div className="Recent_Qn">
        <div className="heading_recent">
          <h3>Unanswered Questions</h3>
        </div>
        <div className="recent_qn_list">
          {unansweredQuestions.map((recent_qn) => (
            <Recent_qn
              key={recent_qn._id}
              qn={recent_qn.content}
              id={recent_qn._id}
              title={recent_qn.title}
              date={recent_qn.createdAt}
              author={recent_qn.author.name}
              auth_pic={recent_qn.author.profilePicture}
            />
          ))}
        </div>
      </div>
      <div className="Questions">
        <div className="clear_your_doubts">
          <NewQn onAddQn={addQnHandler} />
        </div>
        <div className="question_answer">
          {loading ? ( // Display loading animation while loading
            <div className="loading-animation">
              <div className="circle"></div>
            </div>
          ) : (
            qnaDetails.map((details) => (
              <Qns
                key={details._id}
                id={details._id}
                author={details.author.name}
                auth_pic={details.author.profilePicture}
                answer_id={details.answers.map((answer) => answer._id)}
                solver_name={details.answers.map((ans) => ans.answerer.name)}
                qn={details.content}
                answer={details.answers.map((ans) => ans)}
                topics={details.topics}
                title={details.title}
                likes={details.likes.length}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default QnA;
