import React, { useEffect, useState } from 'react';
import axios from "axios"

const Home = () => {
    const [products, setProudtcs]= useState([])

  
    const getData = ()=>{
      //https://afternoon-garden-45528.herokuapp.com/
      fetch("http://localhost:8080/products",{
        method: "GET",
        
        headers:{
        //   'Authorization':`Bearer ${token}`
        'Authorization':`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzhmOGQ5ZWU2Y2MxN2I3YWU2OWRiNWYiLCJpYXQiOjE2NzAzNTIzMTh9.0k_KhDPc8GFyFko1cThN44DR1Sa9WQcbPKNDltaXeYg`
        },
       
      })
      .then((res)=>res.json()) 
      //.then((res)=> console.log(res)) 
      .then((res)=> setProudtcs(res)) 
      .catch((err)=> console.log(err))
    }
  
    useEffect(()=>{
      getData()
    },[]) 
      //console.log(products)
  return (
    <div>
      home
      {products.length > 0 && 
               products.map((e)=>{
                return (
                <div className='block' key={e.id}>
                     <img src={e.Image}/>
                     <p>{e.Heading}</p>
                </div>
                    )
               })
            
         }
    </div>
  )
}

export default Home
