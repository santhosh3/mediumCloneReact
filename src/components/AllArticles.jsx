import React from 'react'
import GloalArticle from './GlobalFeeds'
import Articles from './Articles'
import { useNavigate } from 'react-router-dom'
import './AllArticles.css'

function AllArticles() {
 
let [show, setShow] = React.useState({
    "global":true,
    "feed":false
})
  
function gl(){
   setShow({
    "global":true,
    "feed":false
   })
}
function fe(){
    setShow({
     "global":false,
     "feed":true
    })
}


  return (
    <div className='A11'>
      <div className='mainBTN'>
      <div className='abtn'>
        <button className='btn3' onClick={gl} >Global</button>
      </div>
      <div className='gbtn'>
        <button className='btn4' onClick={fe}>Feed</button>
      </div>
      </div>
     {!show.global && <GloalArticle/>}
     {!show.feed && <Articles/>}
    </div>
  )
}

export default AllArticles
