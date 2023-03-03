import React from 'react';
import './Login.css'

const Login = () => {
  return (
    <div className='login_form'>
        <form >
            <div><img src='./images/prof.png' alt='login_logo' className='login_logo'></img></div>
            <div><input type='text' placeholder='email' className='login_data'></input></div>
            <div><input type='password' placeholder='password' className='login_data'></input></div>
            <div><button className='login_submit'>Submit</button> </div>
        </form>
        <p>New User? <a href='Signup'>Signup</a></p>
        <p className='forgot_ps'><a href='password'>Forgot Password</a></p>
    </div>
  )
}

export default Login
