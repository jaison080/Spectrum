import React from 'react';
import QnForm from './QnForm';



const NewQn = (props) => {

    const saveQnDataHandler = (enteredQnData) => {
        const qnData = {
            ...enteredQnData,
            id: Math.random().toString(),
        }
        props.onAddQn(qnData);
    }

  return (
    <div className='new_qn'>
        <QnForm onSaveQnData ={saveQnDataHandler}  /> 
    </div>
  )
}

export default NewQn
