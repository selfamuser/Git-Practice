import React, { useEffect } from 'react'
import { useState } from 'react'

function Github() {

    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/selfamuser')
        .then(response => response.json())
        .then(data =>{
            setData(data)   
        })
    })

  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Followers : {data.followers} 
    <h1>Name : {data.name}</h1>
    <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github