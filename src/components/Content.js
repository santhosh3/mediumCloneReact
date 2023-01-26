import React from 'react'
import './Content.css'
import { useNavigate } from 'react-router'

function Content() {
  const navigate = useNavigate();
  function signUp(){
    navigate('/signUp')
  }

  return (
    <div className='c1'>
      <div className='c11'> 
      Stay curious.
      </div>
      <div className='c22'>
      Discover stories, thinking, and expertise from writers on any topic.
      </div>
      <div>
        <button className='btn1' onClick={signUp}>
            getStarted
        </button>
      </div>
    </div>
  )
}

export default Content
