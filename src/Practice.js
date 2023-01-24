//in App.js

import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

// let [state, setState] = useState({
//     isLoggedIn: false,
//     user: null,
//     isVerified: true
// });

// let URL = `https://api.realworld.io/api/user`

// useEffect(() => {
//     let storageKey = localStorage[localStorageKey];
//     if(storageKey){
//         fetch(URL, {
//             method:"GET",
//             headers: {
//                 authorization: `Token ${storageKey}`
//             },
//         })
//         .then((res) => {
//           if(res.ok){
//              return res.json();
//           }
//           return res.json().then(({errors}) => {
//             return Promise.reject(errors);
//           });
//         })
//         .then(({user}) => updateUser(user))
//         .catch((error) => console.log(error))
//     }else{
//         setState({isVerified:false})
//     }
// })

// function updateUser(user){
//     setState({isLoggedIn:true, user, isVerified:false});
//     localStorage.setItem(localStorageKey, user.token)
// };

//signUp form API

function signIn(){
    const navigate = useNavigate()
    function handleSubmit(event){
        event.preventDefault();
        const {username,email,password} = register
        fetch(URL, {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({user:{username,email,password}})
        }).then(res => {
           if(!res.ok){
               return res.json().then(({error}) => {
                 return Promise.reject(error);
               });
           }
           return res.json();
        })
        .then(({user}) => {
           props.updateUser(user)
           setRegister({username:"", email:"", password:""});
           navigate('../Articles')
        })
        .catch((errors) => setRegister({errors}));
    }
}

//login form API

function login(props){
    const navigate = useNavigate()
    function handleSubmit(event){
        event.preventDefault();
        const {email,password} = login
        fetch(URL, {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({user:{username,email,password}})
        }).then(res => {
           if(!res.ok){
               return res.json().then(({errors}) => {
                    return Promise.reject(errors)
            });
         }
           return res.json()
        }).then(({user}) => {
           props.updateUser(user);
           navigate('../Articles');
        })
        .catch((errors) => {
            setLogin(prevState => {
            return {
                ...prevState,
                errors:{
                   ...prevState.errors,
                   email: "Email or password is incorrect"
                },
            };
           });
        });
    }; 
}

//In App.js
function App(){
    let [update, setUpdate] = useState({
        isLoggedIn: false,
        user: null,
        isVerified: true
    });
    useEffect(() => {
        if(localStorage["app_user"]){
           let URL = "https://api.realworld.io/api/user"
           fetch(URL, {
             method:"GET",
             headers: {
                "authorization": `Token ${localStorage["app_user"]}`
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
    })
    function updateUser(user){
        setUpdate({isLoggedIn:true,user,isVerified:false});
        localStorage.setItem('app_user', user.token)
    }

//In routes
 <div>
    {
        (update.isVerified)?(
            <h1>loading...</h1>
        ):(null)
    }
    <Header isLoggedIn={update.isLoggedIn} user={update.user}/>
    {
        update.isLoggedIn? <AuthenticatedApps/> : <unAuthenticatedApps updateUser={updateUser}/>
    }
 </div>
 }

 function AuthenticatedApps(){
   return (<BrowserRouter>
            <Routes>
                <Route path='/post' >
                    <post />
                </Route>
            </Routes>
          </BrowserRouter>)
 }
 function unAuthenticatedApps(props){
  return <div>
    <Route path="/login">
        <login updateUser={props.updateUser}/>
    </Route>
 
     <Route path="/signUp">
        <signUp updateUser={props.updateUser}/>
    </Route>
   </div>
 }

 //navbar header component

 function Header(props){
    <div>
        <nav>
            {
                props.isLoggedIn ? <AuthHeader/> : <NonAuthHeader/>
            }
        </nav>
    </div>
 }

 function NonAuthHeader(){
    <div>
        Header components
    </div>
 }

 function AuthHeader(){
    <div>
        Header components
    </div>
 }