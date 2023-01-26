import React from 'react'
import smily from '/home/pc/Desktop/frontEnd/shopping/src/assets/icons8-smiling-face-with-sunglasses-48.png'
import './Profile.css'
import settings from '/home/pc/Desktop/frontEnd/shopping/src/assets/graySettings.png'
import {useNavigate} from 'react-router-dom'

function Profile() {
  let navigate = useNavigate();
  function settingsPage(){
    navigate('../Settings')
  };
  let userString = localStorage["user"]
  let user = JSON.parse(userString)
  

  return (
    <div className='profile-container'>
      <div className='p1'>
      <img src={user.image} className='pm'/>
      </div>
      <div className='p2'>
        {user.username}
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          {user.bio}
        </div>
      </div>
      <div className='p3'>
        <button className='pb' onClick={settingsPage}>
            <img src={settings} alt="settings" className='pg'/>
            Edit Profile Settings
        </button>
      </div>
    </div>
  )
}

export default Profile
