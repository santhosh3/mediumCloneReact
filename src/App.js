import './App.css';
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
import { useEffect, useState } from 'react';
import E404 from './components/E404';
import GlobalFeeds from './components/GlobalFeeds';
import AllArticles from './components/AllArticles';

function App() {
  let [update, setUpdate] = useState({
    isLoggedIn: false,
    user:null,
    isVerified: true
  });

 let URL = "https://api.realworld.io/api/user"
  
  useEffect(() => {
    let token = localStorage["app_user"];
     if(token){
      fetch(URL, {
        method:"GET",
        headers:{
          "authorization": `Token ${token}`
        }
      }).then((res) => {
         if(res.ok){
            return res.json();
         }
         return res.json().then(({errors}) => {
          return Promise.reject(errors)
         })
      })
      .then(({user}) => updateUser(user))
      .catch((errors) => console.log(errors))
    }else{
      setUpdate({isVerified:false})
    }
  },{})

  function updateUser(user){
    setUpdate({isLoggedIn:true,user,isVerified:false});
    localStorage.setItem("app_user", user.token);
    localStorage.setItem("user",JSON.stringify(user));
  }

 


  return(
    <div>
       {
          (update.isVerified)?(
            <div className='spinner'>
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
            
          ):(
            <div>
              {
                (update.isLoggedIn)?(
                  <BrowserRouter>
                  <Navbar2/>
                  <Routes>
                      <Route exact path='/Settings' element={<Settings/>}></Route>
                      <Route exact path='/Profile' element={<Profile/>}></Route>
                      <Route exact path='/Article' element={<Article/>}></Route>    
                      {/* <Route exact path='/' element={<Articles/>}></Route>  */}
                      <Route exact path="/:id" element={<PageArticle/>}/>
                      <Route path="*" element={<E404/>}></Route>
                      <Route exact path='/'element={<AllArticles/>}></Route>
                  </Routes>
                </BrowserRouter>
                ):(
                  <BrowserRouter>
                  <Navbar />
                  <Routes>
                      <Route exact path='/signIn' element={<SignIn updateUser={updateUser}/>}></Route>
                      <Route exact path='/signUp' element={<SignUp updateUser={updateUser}/>}></Route>
                      <Route exact path="/:id" element={<PageArticle/>}/>
                      <Route exact path='/' element={<Articles/>}/>
                      <Route path="*" element={<E404/>}></Route>
                  </Routes>
                  </BrowserRouter>
                )
              }
            </div>
          )
       }
    </div>
  )
  





























// return(
//   <div>
//    {
//     (update.isVerified)?(
//       <h2>loading...</h2>
//     ):(null)
//    }
//    {
//     (update.isLoggedIn)? (
//       <div>
//       <BrowserRouter>
//         <Navbar2 /> 
//         <Routes>
//           <Route exact path='/Settings' element={<Settings/>}></Route>
//           <Route exact path='/Profile' element={<Profile/>}></Route>
//           <Route exact path='/Article' element={<Article/>}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//     ):(
//       <div>
//        <BrowserRouter>
//         <Navbar />
//         <Routes>
//            <Route exact path='/signIn' element={<SignIn updateUser={updateUser}/>}></Route>
//            <Route exact path='/signUp' element={<SignUp updateUser={updateUser}/>}></Route>
//            <Route exact path='/Articles' element={<Articles/>}></Route>
//            <Route exact path="/:id" element={<PageArticle/>}/>
//         </Routes>
//        </BrowserRouter>
//     </div>
//     )
//    }
//   </div>
// )


}

export default App;




















// function AuthenticatedApps(){
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar2 /> 
//         <Routes>
//           <Route exact path='/Settings' element={<Settings/>}></Route>
//           <Route exact path='/Profile' element={<Profile/>}></Route>
//           <Route exact path='/Article' element={<Article/>}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// function unAuthenticatedApps(props){
//   return(
//     <div>
//        <BrowserRouter>
//         <Navbar />
//         <Routes>
//            <Route exact path='/signIn' element={<SignIn updateUser={props.updateUser}/>}></Route>
//            <Route exact path='/signUp' element={<SignUp updateUser={props.updateUser}/>}></Route>
//            <Route exact path="/:id" element={<PageArticle/>}/>
//         </Routes>
//        </BrowserRouter>
//     </div>
//   )
// }



 // return (
  //   <div>
  //    <BrowserRouter>
  //     {/* <Navbar2 /> */}
  //    <Navbar />
  //   {/* {showContent && <Content />} */}
  //    <Routes>
  //     <Route exact path='/home' element={< Home />}></Route>
  //     <Route exact path='/signIn' element={<SignIn updateUser={updateUser}/>}></Route>
  //     <Route exact path='/signUp' element={<SignUp updateUser={updateUser}/>}></Route>
  //     <Route exact path='/Article' element={<Article/>}></Route>
  //     <Route exact path='/Settings' element={<Settings/>}></Route>
  //     <Route exact path='/Profile' element={<Profile/>}></Route>
  //     <Route exact path='/Articles' element={<Articles/>}></Route>
  //     <Route exact path="/:id" element={<PageArticle/>}/>
  //    </Routes>
  //    </BrowserRouter>
  //   </div>
  // );