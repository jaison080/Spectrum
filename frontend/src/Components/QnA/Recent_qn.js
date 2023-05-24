import React,{useState} from 'react';
import NewAnswer from './NewAnswer';

const Recent_qn = (props) => {


  const [answerRecent, setAnswerRecent] = useState('');
  const [unansweredQuestions, setUnansweredQuestions] = useState([props.qn]);

  const addAnswerHandler = (event) => {
    setAnswerRecent(event.target.value)
  }

  const saveSolvedQuestionDataHandler = (enteredSolutionData) => {
    const solutionData = {
      ...enteredSolutionData,
      qn: props.qn,
      id: Math.random().toString
    }
    console.log(solutionData);
  }


  return (
    <div className='recent_qn_wrapper'>
        <div className='recent_qn_list'>
            <div className='qn_description'>Qn:{props.qn}</div>
            <NewAnswer onSolveQuestion={saveSolvedQuestionDataHandler}/>
        </div>
    </div>
  )
}

export default Recent_qn
