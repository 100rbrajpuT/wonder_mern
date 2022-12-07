import React, { useState } from 'react'

const Signup = () => {
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [age, setAge]= useState("");

    const handleSubmit = ()=>{
      alert("registered")
      const payload = {
        email,
        password, 
        age
      }

      fetch("https://afternoon-garden-45528.herokuapp.com/user/signup",{
        method: "POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(payload)
      })
      .then((res)=>res.json())  
      .then((res)=>console.log(res))
      .catch((err)=> console.log(err))
      
    }
    
  return (
    <div>
        <h1>Signup here</h1>
        <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)} />
        <br/>
        <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
        <br/>
        <input type="email" placeholder='age' onChange={(e)=>setAge(e.target.value)} />
        <br/> <br/>
        <button onClick={handleSubmit}>Signup</button>
    </div>
  )
}

export default Signup
