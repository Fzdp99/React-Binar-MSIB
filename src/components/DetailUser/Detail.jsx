import React from 'react';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getUser } from '../../Store/Users';
import "./Detail.css"

const Detail = () => {
  const [data, setData] = useState([])
  const {id} = useParams()

  const fetchData = async () => {
    await getUser(id).then((res)=>{
      setData(res)
    })
  }

  console.log(data);

  useEffect(()=>{
    if(id){
      fetchData()
    }
  },[])

  return(
    <div className='detail'>
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