import React,{useState} from 'react';
import './AnswerForm.css';


const AnswerForm = (props) => {

  const[enteredAnswer, setEnteredAnswer] = useState('');

  const answerChangeHandler = (event) => {
    setEnteredAnswer(event.target.value);
  }


  const answerSubmitHandler = (event) => {
    event.preventDefault();
    const answerData = {
      ans: enteredAnswer,
    }
    props.onSaveAnswerHandler(answerData);
    setEnteredAnswer('');

  }
  


  return (
    <div>
      <form onSubmit={answerSubmitHandler} className='new_answer_form'>
        <textarea type='text' placeholder='Answer Here' className='answer_area' onChange={answerChangeHandler} value={enteredAnswer}></textarea>
        <div className='answer_buttons'><button type='button' onClick={props.onCancel}>Cancel</button> <button type='submit'>Submit</button></div>
        </form>
    </div>
  )
}

export default AnswerForm
