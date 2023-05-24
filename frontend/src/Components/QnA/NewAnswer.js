import React, {useState} from 'react';
import AnswerForm from './AnswerForm';

const NewAnswer = (props) => {

    const[isSolving, setIsSolving] = useState(false);

    const saveAnswerDataHandler = (enteredAnswerData) => {
        const answerData = {
            ...enteredAnswerData,
            id: Math.random().toString(),
        }
        // console.log(answerData);
        props.onSolveQuestion(answerData);
        // props.onAddAnswer(answerData);
        setIsSolving(false);
    }

    const startAnsweringHandler = () => {
        setIsSolving(true);
    }

    const stopAnsweringHandler = () => {
        setIsSolving(false);
    }

  return (
    <div className='new_answer'>
        {!isSolving && <button onClick={startAnsweringHandler} className='new_answer_btn'>Solve</button>}
        {isSolving && <AnswerForm onSaveAnswerData ={saveAnswerDataHandler} onCancel={stopAnsweringHandler} />}
    </div>
  )
}

export default NewAnswer
