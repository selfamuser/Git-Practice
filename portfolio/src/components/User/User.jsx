import React from 'react'
import { useParams } from 'react-router-dom'
function User() {

    const {userId} = useParams()
  return (
    <h1 className='text-4xl text-orange-700 font-bold align-middle text-center'>
        User : {userId}
    </h1>
  )
}

export default User