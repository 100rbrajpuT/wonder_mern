import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")


  const handleSubmit = ()=>{
    const payload = {
      email,
      password, 
     
    }

    //http://localhost:8080/user/login
//https://afternoon-garden-45528.herokuapp.com/notes
    fetch("https://afternoon-garden-45528.herokuapp.com/user/login",{
      method: "POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(payload)
    })
    .then((res)=>res.json())  
    .then((res)=>{
      console.log(res)
      if(res.token){
        localStorage.setItem("psc_app_token",res.token)
        alert("login successful")
      }
    })
    .catch((err)=> console.log(err))
  }

return (
  <div>
      <h1>Login here</h1>
      <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)} />
      <br/>
      <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
      <br/>
    
      <button onClick={handleSubmit}>Register</button>
  </div>
)
}

export default Login
