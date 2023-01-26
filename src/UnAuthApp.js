import React from 'react'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageArticle from './components/PageArticle';
import Content from './components/Content';
import Articles from './components/Articles';

function UnAuthApp(props) {
  return (
    <div>
      <BrowserRouter>
         <Navbar />
         <Content/>
         <Routes>
            <Route exact path='/signIn' element={<SignIn updateUser={props.updateUser}/>}></Route>
             <Route exact path='/signUp' element={<SignUp updateUser={props.updateUser}/>}></Route>
             <Route exact path="/:id" element={<PageArticle/>}/>
             <Route exact path="/" element={<Articles/>}/>
          </Routes>
         </BrowserRouter>
    </div>
  )
}

export default UnAuthApp
