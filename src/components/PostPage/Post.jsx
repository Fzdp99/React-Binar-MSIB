import React from 'react';
import { useState, useEffect } from 'react';
import Grid from "@mui/material/Grid";
import Card from '../Card/Card';
import { getPosts } from '../../Store/Posts';

const Post = () => {
  const [data, setData] = useState([])
  
  const fetchData = async () => {
    await getPosts().then((res)=>{
      setData(res)
    })
  }
  
  useEffect(()=>{
    fetchData()
  },[])

  return(
    <Grid
      container
      spacing={4}
    >
      {data.map((dt, i) => (
        <Card key={i} title={dt.title} content={dt.body} id={dt.id} />
      ))}
    </Grid>
  )
}

export default Post