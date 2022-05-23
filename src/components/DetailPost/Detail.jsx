import React from 'react';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getPost } from '../../Store/Posts';

const Detail = () => {
  const [data, setData] = useState([])
  const {id} = useParams()

  const fetchData = async () => {
    await getPost(id).then((res)=>{
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
          <Typography>User ID : {data.userId}</Typography>
          <Typography>{data.title}</Typography>
          <Typography>{data.body}</Typography>
        </>
      )}        
    </div>
  )
}

export default Detail