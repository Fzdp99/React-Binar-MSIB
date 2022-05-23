import React from 'react';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

const Detail = () => {
  const [data, setData] = useState([])
  const {id} = useParams()

  const fetchData = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => res.json())
    .then((result)=>{
      setData(result)
    })
  }

  console.log(data);

  useEffect(()=>{
    if(id){
      fetchData()
    }
  },[])

  return(
    <div>
      {data && (
        <>
          <Typography>{data.name}</Typography>
          <Typography>{data.username}</Typography>
          <Typography>{data.email}</Typography>
          <Typography>{data.phone}</Typography>
        </>
      )}        
    </div>
  )
}

export default Detail