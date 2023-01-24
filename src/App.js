import './App.css';
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Content from './components/Content';
import Navbar2 from './components/Navbar2';
import Article from './components/Article';
import Settings from './components/Settings';
import Profile from './components/Profile';
import Articles from './components/Articles';
import PageArticle from './components/PageArticle';
import { useSelector } from "react-redux";

function App() {
  return (
    <div>
     <BrowserRouter>
      {/* <Navbar2 /> */}
     <Navbar />
    {/* {showContent && <Content />} */}
     <Routes>
      <Route exact path='/home' element={< Home />}></Route>
      <Route exact path='/signIn' element={<SignIn/>}></Route>
      <Route exact path='/signUp' element={<SignUp/>}></Route>
      <Route exact path='/Article' element={<Article/>}></Route>
      <Route exact path='/Settings' element={<Settings/>}></Route>
      <Route exact path='/Profile' element={<Profile/>}></Route>
      <Route exact path='/Articles' element={<Articles/>}></Route>
      <Route exact path="/:id" element={<PageArticle/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
