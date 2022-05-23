import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import "./page.css";
import { Alert } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { createPost ,updatePost, getPost } from '../../Store/Posts';

const Page = () => {
  const [status, setStatus] = useState()
  const [isLoading, setLoading] = useState(false)

  const [data,setData] = useState()
  const {id,action} = useParams()

  const [title,setTitle] = useState("")
  const [body,setBody] = useState("")

  const isEdit = action === "update" ? true : false ;
  
  const fetchData = async () => {
    await getPost(id).then((res)=>{
      setData(res)
    })
  }

  const handleCreate = async () =>{
    setLoading(true);
    await createPost().then((res)=>{
      setStatus(res)
    })
    setLoading(false)
  } 

  const handleUpdate = async () =>{
    setLoading(true);
    await updatePost(id).then((res)=>{
      setStatus(res)
    })
    setLoading(false)
  } 

  useEffect(()=>{
    fetchData()
  },[])

  useEffect(()=>{
    if(isEdit && data){
      setTitle(data.title)
      setBody(data.body)
    }
  },[data])

  setTimeout(()=>{
    setStatus(null);
  },3000)

  return(
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {isEdit ? (
        <div>
          <div className='alert'>
            {status && (
              <div>
                <Alert variant="outlined" severity="success">{status==200 ? "Success":"Failed"}</Alert>
              </div>
            )}
            {isLoading && 
              <div>
                <Alert variant="outlined" severity="info">Please wait.......</Alert>
              </div>}
          </div>
          <div className='formInput'>
            <TextField value={title} label="Title" color="warning" focused/>
            <TextField value={body} label="Body" color="warning" focused/>
            <div>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleUpdate}
              >
                Update
              </Button>
            </div>
          </div>
        </div>
      ):(
        <div>
          <div className='alert'>
            {status && (
              <div>
                <Alert variant="outlined" severity="success">{status==201 ? "Success":"Failed"}</Alert>
              </div>
            )}
            {isLoading && 
              <div>
                <Alert variant="outlined" severity="info">Please wait.......</Alert>
              </div>}
          </div>
          <div className='formInput'>
            <TextField label="Title" color="warning" focused/>
            <TextField label="Body" color="warning" focused/>
            <div>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleCreate}
              >
                Create
              </Button>
            </div>
          </div>
        </div>
      )}
    </Box>
  )
}

export default Page