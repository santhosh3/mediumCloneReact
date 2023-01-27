import React,{useState, useEffect} from 'react'
import axios from 'axios'
import SingleArticle from './SingleArticle';
import './Articles.css'
import {Link} from 'react-router-dom'
import Content from './Content';

function GloalArticle() {
  let [articles, setArticles] = useState({
    isLoading : true,
    article : []
  });

  const headers = {
    authorization: `Token ${localStorage.getItem("app_user")}`,
    "Content-Type": "application/json",
  }

  useEffect(() => {
    axios.get('https://api.realworld.io/api/articles?limit=10&offset=0',{
        method: "GET",
        headers: headers,
    })
    .then(res => res.data.articles)
    .then(res => setArticles({
          isLoading:false,
          article:res
    }))
  },[])
  
  
  return (
    <div>
     {!localStorage["app_user"] && <Content />}
    <div className='aaa'>
      <div className='ar'>
      <div className='gg'>
     {
      !articles.isLoading?(
        articles.article.map((items,index) => (
        <div key={index} className="allItems">
          <Link to={`/${items.slug}`} key={index} style={{textDecoration:'none',color:'black'}}>
        <SingleArticle 
        key={index}
        title={items.title}
        image={items.author.image}
        name={items.author.username}
        description={items.description}
        tags={items.tagList[0]}
        date={items.createdAt}
        />
        </Link>
        </div>
      ))):(
        <div>
          <div class="spinner-grow text-primary" role="status">
          <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-success" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-danger" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-info" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-light" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-dark" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        </div>
      )
     }
     </div>
      </div>
      <div className='a22'>
      DISCOVER MORE OF WHAT MATTERS TO YOU
      <div className='bbtn'>
        <div><button className='b'>implementations</button></div>
        <div><button className='b'>welcome</button></div>
        <div><button className='b'>introduction</button></div>
        <div><button className='b'>codebaseShow</button></div>
        <div><button className='b'>ipsum</button></div>
        <div><button className='b'>qui</button></div>
        <div><button className='b'>quia</button></div>
        <div><button className='b'>et</button></div>
        <div><button className='b'>cupiditate</button></div>
        <div> <button className='b'>deserunt</button></div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default GloalArticle
