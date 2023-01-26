import React from 'react'
import Settings from './components/Settings'
import Article from './components/Article'
import Profile from './components/Profile'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar2 from './components/Navbar2'
import Articles from './components/Articles'

function AuthApps() {
  return (
    <div>
      <BrowserRouter>
       <Navbar2/>
        <Routes>
            <Route exact path='/Settings' element={<Settings/>}></Route>
            <Route exact path='/Profile' element={<Profile/>}></Route>
            <Route exact path='/Article' element={<Article/>}></Route>    
            <Route exact path='/' element={<Articles/>}></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AuthApps
