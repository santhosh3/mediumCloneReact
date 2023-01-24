import React from 'react'
import './Settings.css'

function Settings() {
  return (
    <div className='container'>
      <div className='c2'>
        Your Settings
      </div>
      <div className='a1'>
        <input className='a11' placeholder='image' type='text' />
      </div>
      <div className='a2'>
      <input className='a11' placeholder="userName" type='text' />
      </div>
      <div className='a3'>
      <textarea rows={"8"} className='a33' placeholder='Short Bio About You' type='text' />
      </div>
      <div className='a4'>
      <input className='a44' placeholder='email' type='text' />
      </div>
      <div className='a5'>
      <input className='a44' placeholder='New Password' type='text' />
      </div>
      <div className='button'>
       <div>
       <button className='btn4'>Log out</button>
       </div>
       <div>
       <button className='btn3'>Update Settings</button>
       </div>
      </div>
    </div>
  )
}

export default Settings
