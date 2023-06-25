import React, {useState} from 'react';
import QnForm from './QnForm';



const NewQn = (props) => {

    const[isAsking, setIsAsking] = useState(false);

    const saveQnDataHandler = (enteredQnData) => {
        const qnData = {
            ...enteredQnData,
            id: Math.random().toString(),
        }
        props.onAddQn();
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
      {!isAsking && <button onClick={startAskingHandler} className='new_question_btn'>Add Question</button>}
      {isAsking && (
        <div className="new_article_form_modal"><div className="new_article_form_content">
         <QnForm onSaveQnData ={saveQnDataHandler} onCancel = {stopAskingHandler}/>
         </div></div>
         )}   
    </div>
  )
}

export default NewQn
