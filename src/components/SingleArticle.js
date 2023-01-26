import React from 'react'
import './SingleArticle.css'
import picture from '../assets/Ease-of-doing-business.jpg'
import moment from 'moment'


function SingleArticle({image,name,description,date,tags,title}) {
  return (
    <div className='main'>
     <div className='a'>
       <div className='f'>
       <div className='header'>
        <div className='hi'>
          <img src={image} className='hi1'/>
        </div>
        <div className='name'>
          {name}
          <div>
            {
              moment(date.slice(0,10),'YYYY-MM-DD').from(moment(moment().format().slice(0,10), 'YYYY-MM-DD'))
            }
          </div>
        </div>
       </div>
       <div className='body'>
          <div className='title'> 
            {title.slice(0,80)}
          </div>
          <div className='des'>
            {description.slice(0,100)}
            <div className='tags'>
              Read More... . . 3min read ____ {tags}
            </div>
          </div>
       </div>
       </div>
       <div className='f2'>
        <img src={picture} className='pic'/>
       </div>
     </div>
     <div className='b'>
       
     </div>
    </div>
  )
}

export default SingleArticle

