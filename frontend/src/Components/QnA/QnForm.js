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
        const username = localStorage.getItem("token");
        console.log(username);
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
