import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Api = () => {
    const [data, setData] = useState([])



    const fetchApi = async () =>{
        const apiKey = "https://jsonplaceholder.typicode.com/users";
        const userData=  await axios.get(apiKey)
        setData(userData.data)
    }

    useEffect(()=>{
        fetchApi();
    })

  return (
    <div>
      {
        data.map(per => (
            <div className="border-2 border-red-700">
                <img className='w-20' src={`/profiles/avatar${per.id}.png`} alt="" />
                <h1>Name: {per.name}</h1>
                <h4>Username: {per.username}</h4>
                <h4>Email: {per.email}</h4>
            </div>
        ))
      }
    </div>
  )
}

export default Api
