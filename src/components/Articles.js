import React,{useState, useEffect} from 'react'
import axios from 'axios'
import SingleArticle from './SingleArticle';
import '/home/pc/Desktop/frontEnd/shopping/src/components/Articles.css'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {contentActions} from '../store/ShowContent';

function Articles() {
  let [articles, setArticles] = useState({
    isLoading : true,
    article : []
  });
  useEffect(() => {
    axios.get('https://api.realworld.io/api/articles')
    .then(res => res.data.articles)
    .then(res => setArticles({
          isLoading:false,
          article:res
    }))
  },[])
  
  const dispatch = useDispatch();
  function showOffContent(){
    dispatch(contentActions.contentOff())
  }

  return (
    <div className='aaa'>
      <div className='ar'>
      <div className='gf'>
      Global Feed
      </div>
     <div className='gg'>
     {
      !articles.isLoading?(
        articles.article.map((items,index) => (
        <div onClick={showOffContent} key={index}>
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
        <div className='lp'>
          <div className="ll"></div>
          <div className="ll"></div>
          <div className="ll"></div>
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
  )
}

export default Articles
