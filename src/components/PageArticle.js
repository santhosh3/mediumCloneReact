import { useState, useEffect } from 'react';
import './PageArticle.css'
import { useParams } from 'react-router'
import axios from 'axios';
import image from '../assets/Ease-of-doing-business.jpg'
import moment from 'moment'
import E404 from './E404';
import { Link } from 'react-router-dom';

function PageArticle() {
  let params = useParams();
  let id = params.id;

  let [page,setPage] = useState({
    isLoading:true,
    singlePage:{}
  });
  let [error,setError] = useState('');

  let url = `https://api.realworld.io/api/articles/${id}`

  useEffect(() => {  
    axios.get(url)
      .then(response => {
        setPage({
          isLoading:false,
          singlePage:response
        })
      })
      .catch(error => {
        setError(error.message)
      });
  }, []);

  
  
    
  return (
    <div className='p1'>
     {
      !page.isLoading?(
        <div className='f1'>
          <div className='g1'>
          <div className='p11'>
            <div className='pim'>
              <div className='pm1'>
                <img src={page.singlePage.data.article.author.image} className='pm11'/>
              </div>
              <div className='pn1'>
               <div>
               {page.singlePage.data.article.author.username}
               </div>
              <div>
              {moment(page.singlePage.data.article.createdAt.slice(0,10),'YYYY-MM-DD').from(moment(moment().format().slice(0,10), 'YYYY-MM-DD'))} 
              </div>
              </div>
            </div>
            <div className='content'>
               <div className='pt'>
                 {page.singlePage.data.article.title}
               </div>
               <div className='pd'>
                 {page.singlePage.data.article.description}
               </div>
               <div className='pm2'>
                 <img src={image} className='pm22'/>
               </div>
               <div className='pbody'>
                  {page.singlePage.data.article.body}
               </div>
               <div className='ptags'>
                  {
                  page.singlePage.data.article.tagList.map((item,index) => (
                    <div key={index} className='ptag'>
                      {item}
                    </div>
                  ))
                  }
               </div>
            </div>
        </div>
     </div>
    <div className='g2'>
     <div className='un1'>
     <button className='un'>Get unlimited access</button>
     </div>
     <div className='gi'>
      <img src={page.singlePage.data.article.author.image} 
      style={{width:'8em'}}
      className='pm11'/>
     </div>
     <div className='ga'>
      {page.singlePage.data.article.author.username}
     </div>
     <div className='gff'>
     {page.singlePage.data.article.favoritesCount} followers
     </div>
    </div>
   { !localStorage["app_user"] && 
   <div className='signIn'>
    <Link to='../signIn' className='btn123' style={{textDecoration:"none"}}>Sign-In</Link>
    &nbsp; &nbsp;  or &nbsp; &nbsp; 
     <Link to='../SignUp' className='btn123' style={{textDecoration:"none"}}>Sign-Up</Link>
     &nbsp;  to comment on a post
    </div>}
    {  localStorage["app_user"] &&
      <div className='comment'>
      <div className='comment1'>
      <textarea rows="3" cols="50" className='comment2'/>
      </div>
      <div className='comment3'>
        <button className='comment4' style={{fontWeight:"bold"}}>Post comment</button>
      </div>
      </div>
    }
    </div>
      ):(
        <div>
          {
            (error.length > 0) ? (
              <div>
                <E404 />
              </div>
            ) : (
              <div className='loading'>
                <div className="loader"></div>
              </div>
            )
          }
        </div>
      )
     }
    </div>
  )
}

export default PageArticle
