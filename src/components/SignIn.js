import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './SignIn.css'
import login from '/home/pc/Desktop/frontEnd/shopping/src/assets/Login.gif'
import { useNavigate } from 'react-router'

function SignIn() {
  const navigate = useNavigate()
  const [data,setData] = useState({
    email : "",
    password : "",
    errors: {
      email: "",
      password: ""
    }
  })

  let URL = 'https://api.realworld.io/api/users/login'

  function submitHandler(e){
    e.preventDefault()
    const {email,password} = data;
    fetch(URL,{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: {email,password}}),
    })
    .then((res) => {
      if(!res.ok){
          res.json().then(({errors}) => 
          setData((prevState) => {
          return {
          ...prevState.errors,
          email: 'Email or Password is incorrect!'
          }
        })
       )
      throw new Error('Fetch is not successful')
      }
      return res.json()
    }).then(({user}) => {
       console.log(user)
       setData({
       email:"", password:""
       });
       navigate('../Articles')
    })
    .catch((error) => console.log(error))
  }
  
  console.log(data)

  return (
   <div className='main-container'>
    <div className='s0'>
    <img src={login} alt="login"/>
    </div>
    <div className='s1'>
     <div className='s11'>
      Sign In
     </div>
     <div className='s22'>
      <Link to='../signUp' className='s221'>
        Need an Account?
      </Link>
     </div>
     <form onSubmit={submitHandler}>
     <div className='s33'>
      <input className='input' type='text' placeholder='email'
      onChange={(e) => {
        setData({...data, email: e.target.value})
      }}
      />
     </div>
     <div className='s44'>
      <input className='input' type='password'placeholder='password'
      onChange={(e) => {
        setData({...data, password: e.target.value})
      }}
      />
     </div>
     <div className='s55'>
      <input type="submit" value="login" className="btn2"/>
     </div>
     </form>
    </div>
   </div>
  )
}

export default SignIn
