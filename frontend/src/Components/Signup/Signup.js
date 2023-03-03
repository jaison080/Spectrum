import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className='form_bg'>
      <form className='form_control'>
        <div><img src='./images/prof.png' alt='signup_logo' className='signup_logo'></img></div>
        <div className='u_name'><input type='text' placeholder='Name' className='input_data' required/></div>
        <div className='u_mail'><input type='text' placeholder='E-mail' className='input_data' required/></div>
        <div className='u_password'><input type='password' placeholder='Password' className='input_data' required/></div>
        <div className='u_gender'><input type='text' placeholder='gender' className='input_data'/></div>
        <div className='u_DOB'><input type='date' placeholder='Date Of Birth' className='dob' required/></div>
        <div className='u_Bio'><input type='text' placeholder='Bio' className='input_data'/></div>
        <div className='u_Img'><input type='img' placeholder='Profile_pic' className='input_data'/></div>
        <div><button className='u_submit'>Submit</button> </div>
      </form>
      <p>Already A User? <a href='login'>Login</a></p>
    </div>
  )
}

export default Signup
