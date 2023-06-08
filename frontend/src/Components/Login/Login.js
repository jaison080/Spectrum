import React, {useState} from 'react';
import './Login.css';
import MyComponent from '../UI/MyComponent';


const Login = () => {

  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [item,setItem] = useState({
    email:'',
    password:''
  })


  const emailChangeHandler = (event) => {
    setItem((prevItem) => ({ ...prevItem, email: event.target.value }))
  }
  const passwordChangeHandler = (event) => {
    setItem((prevItem) => ({ ...prevItem, password: event.target.value }))
  }

  const [error, setError] = useState('');
  

  const logInSubmitHandler = async(event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify(item)
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/users/login', requestOptions);
  
    if(response.ok) {
      const data = await response.json();
      console.log(data);
      console.log(data.token);
      localStorage.setItem("token",data.token);
  
        const blogsResponse = await fetch('http://localhost:5000/api/blogs', {
          headers: {
            'Authorization': `Bearer ${data.token}`,
          },
        });
  
        if (blogsResponse.ok) {
          const blogsData = await blogsResponse.json();
          console.log(blogsData);
          window.location.href = '/blogs';
        } else {
          console.log('Error fetching blogs:', blogsResponse.statusText);
        }
      } else {
        const errorsResponse = await response.json();
        console.log('Error registering user:', errorsResponse.message);
        setError(errorsResponse.message);      
      }
  
    } catch (error) {
      console.error('Error:', error);
    }

  } 


  return (
    <div  className='background_users'>

      <div className='login_form'>  
      <div className='login_box'>
        <MyComponent />
      </div>
        <form onSubmit={logInSubmitHandler}>
          <div><img src='./images/prof.png' alt='login_logo' className='login_logo'></img></div>
          <div><input type='text' placeholder='email' className='login_data' onChange={emailChangeHandler} value={item.email} style={{ textAlign: 'center' }}></input></div>
          <div><input type='password' placeholder='password' className='login_data' onChange={passwordChangeHandler} value={item.password} style={{ textAlign: 'center' }}></input></div>
          <div><button className='login_submit'>Submit</button></div>
        </form>
        {error && <div className="error">{error}</div>}
        <p>New User? <a href='Signup'>Signup</a></p>
        <p className='forgot_ps'><a href='password'>Forgot Password</a></p>
      </div>
    </div>
  );
  
}

export default Login
