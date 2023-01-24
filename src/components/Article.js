import React from 'react'
import './Article.css'

function Article() {
  return (
    <div className='container' style={{margin:'3%'}}>
      <div className='a1'>
        <input className='a11' placeholder='Article Title' type='text' />
      </div>
      <div className='a2'>
      <textarea name="textarea" placeholder='whats the article about?' rows="7" cols="121">Write something here</textarea>
      </div>
      <div className='a3'>
      <input className='a33' placeholder='Write Your Article' type='text' />
      </div>
      <div className='a4'>
      <input className='a44' placeholder='Tags' type='text' />
      </div>
      <div>
        <button className='btn3'>Publish</button>
      </div>
    </div>
  )
}

export default Article
