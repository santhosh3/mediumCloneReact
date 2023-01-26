import React from 'react'
import { Link } from 'react-router-dom'
import signUp from '/home/pc/Desktop/frontEnd/shopping/src/assets/Sign up.gif'
import { useNavigate } from 'react-router';
import './SignUp.css'

function SignUp(props) {
  const [register, setRegister] = React.useState({
    username : "",
    email : "",
    password : "",
    errors: {
      username: "",
      email: "",
      password: ""
    }
  });
  let navigate = useNavigate()

  let URL = 'https://api.realworld.io/api/users'
  
  function submitHandler(e){
    e.preventDefault();
    const {username, email, password} = register
    fetch(URL, {
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({user:{username,email,password}})
    }).then(res => {
       if(!res.ok){
           console.log(res)
           return res.json().then(({errors}) => {
             return Promise.reject(errors);
           });
       }
       return res.json();
    }).then(({user}) => {
       console.log(user)
       props.updateUser(user);
       navigate('../Articles')
    })
    .catch((errors) => setRegister({errors}));
  }

  

   /**
    name1234
    name1234@gmail.com
    123456
    */

  return (
    <div className='main-container'>
      <div className='s0'>
      <img src={signUp} alt="login"/>
      </div>
      <div className='s1'>
      <div className='s11'>
      Sign Up
     </div>
     <div className='s22'>
      <Link to='../signIn' className='s221'>
        Have an Account?
      </Link>
     </div>
     <form onSubmit={submitHandler} autoComplete="off">
     <div className='s33'>
      <input className='input'  type='text'  placeholder='username' 
      onChange={(e) => {
        setRegister({...register, username: e.target.value})
      }}
      />
      <div className='errors'>
      {register.errors.username}
     </div>
     </div>
     <div className='s33'>
      <input className='input' type='text'  placeholder='email' 
      onChange={(e) => {
        setRegister({...register, email: e.target.value})
      }}
      />
      <div className='errors'>
      {register.errors.email} 
      </div>
     </div>
     <div className='s44'>
      <input className='input' type='password' placeholder='password' 
      onChange={(e) => {
        setRegister({...register, password: e.target.value})
      }}
      />
      <div className='errors'>
        {register.errors.password}
      </div>
     </div>
     <div className='s55'>
     <input className='btn2' type="submit" value="signUp"/><br />
     </div>
     </form>
     </div>
    </div>
  )
}

export default SignUp
