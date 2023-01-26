import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'

function E404() {
  const navigate = useNavigate();
  function homePage(){
    navigate('/')
  }
  return (
    <div className='E404' style={{backgroundColor:"rgb(246,246,246)"}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFpI88kqKYKt64eMD0fdCNN5IG-Pi1wbXYRg&usqp=CAU"/>
      <div className='message404'>
        404 page Not found
      </div>
      <div className='homeMessage'>
        <button className='btnHome' onClick={homePage}>Home</button>
      </div>
      <img src="https://www.pngkey.com/png/detail/487-4878743_rocket-power-mood-sticker-by-olympic-channel-gif.png"/>
    </div>
  )
}

export default E404
