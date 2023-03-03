import React,{useState} from 'react'
import './QnForm.css';
import Button from '../UI/Button';

const QnForm = (props) => {

    const[enteredQn, setEnteredQn] = useState('');

    const qnChangeHandler = (event) => {
        setEnteredQn(event.target.value)
    }

    const qnSubmitHandler = (event) => {
        event.preventDefault();

        const qnData ={
            qn: enteredQn,
        };

        props.onSaveQnData(qnData);
        setEnteredQn('');
    }



  return (
    <div>
      <form className='qn_form_control' onSubmit={qnSubmitHandler}>
        <div className='qn_form'>
                    <div className='b1'>
                        <input type="text" id="qn_input" onChange={qnChangeHandler} className='input_control' value={enteredQn} placeholder='Clear Your Doubts' />
                    </div>
                    <div className='b2'>
                        <button type='qn_submit' className='qn_button'>Submit</button>
                    </div>
        </div>      
      </form>
    </div>
  )
}

export default QnForm;
