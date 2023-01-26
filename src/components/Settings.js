import React,{useState,useEffect} from 'react'
import './Settings.css'
import { useNavigate } from 'react-router-dom';

function Settings() {

  let userString = localStorage["user"]
  let user = JSON.parse(userString)

  let [admin, setAdmin] = useState({
    image:'',
    username:'',
    bio:'',
    email:'',
    password:'', 
  })

  let [success,setSuccess] = useState(false)
  let [error,setError] = useState(false)

  const navigate = useNavigate();
  function signOut(){
    localStorage.removeItem("app_user");
    navigate('/')
    window.location.reload(true)
  }
 
  function submitHandler(e){
    e.preventDefault();
      const {image,username,bio,email,password} = admin
      if(image.length==0 && username.length==0 && bio.length==0 && email.length==0 && password.length==0){
         setError(true)
      }
      else{
        let obj = {
          image:(admin.image.length > 0)? (admin.image) : (user.image),
          username:(admin.username.length > 0)? (admin.username) : (user.username),
          bio:(admin.bio.length > 0)? (admin.bio) : null,
          email:(admin.email.length > 0 && admin.email.match('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'))? (admin.email) : (user.email),
      }
      if(admin.password.length > 6){
        obj["password"] = admin.password
      }
      console.log(obj)
      let URL = 'https://api.realworld.io/api/user'
      fetch(URL, {
      method:'PUT',
      headers:{
        'Content-Type':'application/json',
         authorization:`Token ${localStorage["app_user"]}`
      },
      body: JSON.stringify({user:obj})
      }).then((res) => res.json())
       .then((res) => {
        localStorage.setItem("app_user", res.user.token);
        localStorage.setItem("user",JSON.stringify(res.user));
       }).then(
          setError(false),
          setSuccess(true)
       ).then(
        setTimeout(() => {
          navigate('/')
        },4000)
       )
      }
  }

  return (
    <div className='container'>
      <div className='c2'>
        Your Settings
      </div>
      <form onSubmit={submitHandler}>
      <div className='a1'>
        <input className='a11' placeholder={user.image} type='text' 
        onChange={(e) => {
          setAdmin({...admin, image: e.target.value})
        }}
        />
      </div>
      <div className='a2'>
      <input className='a11' placeholder={user.username} type='text' 
       onChange={(e) => {
        setAdmin({...admin, username: e.target.value})
      }}
      />
      </div>
      <div className='a3'>
      <textarea rows={"8"} className='a33' placeholder='Short Bio About You' type='text' 
       onChange={(e) => {
        setAdmin({...admin, bio: e.target.value})
      }}
      />
      </div>
      <div className='a4'>
      <input className='a44' placeholder={user.email} type='text' 
       onChange={(e) => {
        setAdmin({...admin, email: e.target.value})
      }}
      />
      </div>
      <div className='a5'>
      <input className='a44' placeholder='New Password' type='text'
       onChange={(e) => {
        setAdmin({...admin, password: e.target.value})
      }}
      />
      </div>
      <div className='button'>
       <div>
       <button className='btn4' onClick={signOut}>Log out</button>
       </div>
       <div>
       <input className='btn3' value="Update Settings" type='submit' />
       </div>
      </div>
     { success &&
         <div class="alert alert-success" id='success'>
           <strong>Successfully!</strong>&nbsp;&nbsp; Updated the form 
         </div>
     }
     { error &&
      <div class="alert alert-danger" id='success'>
      <strong>Type!</strong>&nbsp;&nbsp; Some thing to update form
      </div>
     }
      </form>
    </div>
  )
}

export default Settings
