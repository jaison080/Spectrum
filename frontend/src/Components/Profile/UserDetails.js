import React, {useState, useEffect} from 'react';
import './UserDetails.css'

const UserDetails = () => {
    const [userDetails, setUserDetails] = useState({});

    const token = localStorage.getItem('token');

    const fetchUserDetails = async() => {
        try{
            const result = await fetch('http://localhost:5000/api/users/', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if(result.ok){
                const data = await result.json();
                setUserDetails(data);
                console.log(data);
            }else{
                console.error('Error:', result.status);
            }
        }
        catch(error){
            console.error('Error:', error);
        }
    }
    useEffect(() => {
        fetchUserDetails();
      }, []);

  return (
    <div className='user__Details'>
      <div>
        {userDetails.profilePicture && <img src = {userDetails.profilePicture} alt = 'profile_pic' className='user_profile_pic'/>}
        {!userDetails.profilePicture && <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt = 'profile_pic' className='user_profile_pic'/>}
      </div>
      <div className='user__Name'>
        {userDetails.name}
      </div>
      <div className='user__Bio'>
        {userDetails.bio}
      </div>
      <div className='details'>
        <h5>User Details</h5>
        <button className='edit__button'>Edit Profile</button>
        <div className='details_wrapper'>
            Email<div className='user__Email'>{userDetails.email}</div>
        </div>  
        <div className='details_wrapper'>
            DOB<div className='user__Dob'>
                {new Date(userDetails.dob).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
                })}
            </div>
        </div>
        <div className='details_wrapper'>
            Gender<div className='user__Gender'>{userDetails.gender}</div>
        </div>
        <div className='details_wrapper'>
            Sexual Orientation<div className='user__SexualOrientation'>{userDetails.sexualOrientation ? userDetails.sexualOrientation : "nil"}</div>
        </div>
        <div className='details__wrapper'>
            <button className='change__button'>Change Password</button>
        </div>
      </div>
      
    </div>
  )
}

export default UserDetails
