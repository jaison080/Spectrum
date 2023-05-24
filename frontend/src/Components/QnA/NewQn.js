import React, {useState} from 'react';
import QnForm from './QnForm';



const NewQn = (props) => {

    const[isAsking, setIsAsking] = useState(false);

    const saveQnDataHandler = (enteredQnData) => {
        const qnData = {
            ...enteredQnData,
            id: Math.random().toString(),
        }
        props.onAddQn(qnData);
        setIsAsking(false);
    }

    const startAskingHandler = () => {
      setIsAsking(true);
    }

    const stopAskingHandler = () => {
      setIsAsking(false);
    }

  return (
    <div className='new_qn'>
      {!isAsking && <button onClick={startAskingHandler} className='new_question_btn'>Clear Your Doubts Here</button>}
      {isAsking && <QnForm onSaveQnData ={saveQnDataHandler} onCancel = {stopAskingHandler}/>}   
    </div>
  )
}

export default NewQn
