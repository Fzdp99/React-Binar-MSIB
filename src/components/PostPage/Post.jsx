import React from 'react';
import { useState, useEffect } from 'react';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from '../Card/Card';
import { useNavigate } from "react-router-dom";
import { getPosts } from '../../Store/Posts';
import "./Post.css" 

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

  const history = useNavigate()

  return(
    <div>
      <div className="createBt">
        <Button
          onClick={()=>history(`/post/create`)}
          variant="contained"
          color="secondary"
        >
          Create Post
        </Button>
      </div>
      <Grid
        container
        spacing={4}
      >
        {data.map((dt, i) => (
          <Card key={i} title={dt.title} content={dt.body} id={dt.id} />
        ))}
      </Grid>
    </div>
  )
}

export default Post