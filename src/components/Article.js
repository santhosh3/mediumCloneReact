import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Article.css'

function Article() {
  let navigate = useNavigate()
  const [data,setData] = React.useState({
    title : "",
    body : "",
    description: "",
    tagList:""
  })

  let URL = 'https://api.realworld.io/api/articles'


function submitHandler(e){
  e.preventDefault();
  let obj = {
    title : data.title,
    body: data.body,
    description: data.description,
    tagList: data.tagList.split(',')
  }
  fetch(URL, {
    method:'POST',
    headers:{
      'Content-Type':'application/json',
       authorization:`Token ${localStorage["app_user"]}`
    },
    body: JSON.stringify({article:obj})
  }).then((res) => res.json())
    .then((res) => console.log(res))
    .then(navigate('/'))
}

  console.log(data)

  return (
    <center>
      <form onSubmit={submitHandler}>
      <div className='container' style={{margin:'3%'}}>
      <div className='a1'>
        <input className='a11' placeholder='Article Title' type='text' 
         onChange={(e) => {
          setData({...data, title: e.target.value})
        }}
        />
      </div>
      <div className='a2'>
      <textarea name="textarea" placeholder='whats the article about?' rows="7" cols="121"
        onChange={(e) => {
          setData({...data, body: e.target.value})
        }}
      >Write something here</textarea>
      </div>
      <div className='a3'>
      <input className='a33' placeholder='Write Your Article' type='text' 
        onChange={(e) => {
          setData({...data, description: e.target.value})
        }}
      />
      </div>
      <div className='a4'>
      <input className='a44' placeholder='Tags' type='text' 
        onChange={(e) => {
          setData({...data, tagList: e.target.value})
        }}
      />
      </div>
      <div>
        <button className='btn3'>Publish</button>
      </div>
    </div>
      </form>
    </center>
  )
}

export default Article
