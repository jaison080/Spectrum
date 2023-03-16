import React,{useState} from 'react';
import NewAnswer from './NewAnswer';

const Recent_qn = (props) => {


  const [answerRecent, setAnswerRecent] = useState('');

  const addAnswerHandler = (event) => {
    setAnswerRecent(event.target.value)
  }



  return (
    <div className='recent_qn_wrapper'>
        <div className='recent_qn_list'>
            <div className='qn_description'>Qn:{props.qn}</div>
            <NewAnswer />
        </div>
    </div>
  )
}

export default Recent_qn
