import React from 'react'
import '/home/pc/Desktop/frontEnd/shopping/src/components/SingleArticle.css'
import picture from '/home/pc/Desktop/frontEnd/shopping/src/assets/Ease-of-doing-business.jpg'
import moment from 'moment'


function SingleArticle({key,image,name,description,date,tags,title}) {
  console.log(date)
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

/*


import React from 'react'
import '../App.css'

function Country({darkMode, name, capital, population, region, flag,code,showDetails}) {
  const showDetailsHandler = () => {
    showDetails(code)
  }
  return (
    <div className={`country ${darkMode?'darkMode':''}`} onClick={showDetailsHandler}>
        <div className='flag_container'>
            <img src= {flag} alt="flags" />
        </div>
        <div className='details'>
            <h2 className={`values ${darkMode ? 'darkMode':''}`}>{name}</h2>
            <p>Population:{" "}
             <span className={`values ${darkMode ? 'darkMode':''}`}>{population}</span>
            </p>
            <p>Region:{" "}
             <span className={`values ${darkMode ? 'darkMode':''}`}>{region}</span>
            </p>
            <p>Capital:{" "}
             <span className={`values ${darkMode ? 'darkMode':''}`}>{capital}</span>
            </p>
        </div>
    </div>
  )
}

export default Country

*/