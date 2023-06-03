import React,{useState} from 'react'
import './QnForm.css';
import Button from '../UI/Button';

const QnForm = (props) => {
//const { title, content, isAnonymous, topics } = req.body;
    const[enteredQn, setEnteredQn] = useState('');
    const [isChecked, setIsChecked] = useState(false)
    const [item,setItem] = useState({
      title:'',
      content:'',
      isAnonymous:'',
      topics:'',
    });

    const titleChangeHandler = (event) => {
      setItem((prevItem) => ({...prevItem, title: event.target.value}))
  }

    const qnChangeHandler = (event) => {
        setItem((prevItem) => ({...prevItem, content: event.target.value}))
    }

    const checkBoxChangeHandler = (event) => {
      setItem((prevItem) => ({...prevItem, isAnonymous: event.target.value}))
      // setIsChecked(event.target.checked);
    }

    const topicsChangeHandler = (event) => {
      setItem((prevItem) => ({...prevItem, topics: event.target.value}))
  }

    const qnSubmitHandler = async(event) => {
        event.preventDefault();

        const qnData ={
            qn: enteredQn,
        };

        props.onSaveQnData(qnData);
        setEnteredQn('');
        const username = localStorage.getItem("token");
        console.log(username);
    }



  return (
    <div>
      <form className='qn_form_control' onSubmit={qnSubmitHandler}>
        <div className='qn_form'>
                    <div className='title_qn'>
                      <input type='text' className='qn_title' placeholder='title' onChange={titleChangeHandler}></input>
                    </div>
                    <div className='qn_details'>
                        <textarea type="text" id="qn_input" onChange={qnChangeHandler} className='question_area' value={enteredQn} placeholder='Clear Your Doubts' />                    
                    </div>
                    <div className='b2'>
                        <label className='checkbox_description'>Ask Anonymously<input type='checkbox' className='qn_checkbox' checked={isChecked} onChange={checkBoxChangeHandler} /></label>
                        
                    </div>
                    <div className='topics_qn'>
                      <input type='text' className='qn_topic' placeholder='topics' onChange={topicsChangeHandler}></input>
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

// import React, { useState, useEffect } from 'react';
// import jwt_decode from 'jwt-decode';
// import './QnForm.css';
// import Button from '../UI/Button';

// const QnForm = (props) => {
//   const [enteredQn, setEnteredQn] = useState('');
//   const [username, setUsername] = useState('');

//   useEffect(() => {
//     // retrieve the token from local storage
//     const token = localStorage.getItem('token');
//     if (token) {
//       // decode the token to extract the username
//       const { username } = jwt_decode(token);
//       setUsername(username);
//     }
//   }, []);

//   const qnChangeHandler = (event) => {
//     setEnteredQn(event.target.value);
//   };

//   const qnSubmitHandler = async (event) => {
//     event.preventDefault();

//     const qnData = {
//       qn: enteredQn,
//       username: username,
//     };

//     try {
//       const response = await fetch('http://localhost:5000/api/questions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`,
//         },
//         body: JSON.stringify(qnData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log(data);
//         props.onSaveQnData(data);
//         setEnteredQn('');
//       } else {
//         console.log('Error submitting question:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <form className='qn_form_control' onSubmit={qnSubmitHandler}>
//         <div className='qn_form'>
//           <div className='b1'>
//             <input
//               type='text'
//               id='qn_input'
//               onChange={qnChangeHandler}
//               className='input_control'
//               value={enteredQn}
//               placeholder='Clear Your Doubts'
//             />
//           </div>
//           <div className='b2'>
//             <button type='qn_submit' className='qn_button'>
//               Submit
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default QnForm;
