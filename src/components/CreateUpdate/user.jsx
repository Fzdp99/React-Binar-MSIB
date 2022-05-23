import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import "./page.css";
import { Alert } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { createUser, updateUser, getUser } from '../../Store/Users';

const Page = () => {
  const [status, setStatus] = useState()
  const [isLoading, setLoading] = useState(false)

  const [data,setData] = useState()
  const {id,action} = useParams()

  const [name,setName] = useState("")
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")

  const isEdit = action === "update" ? true : false ;
  
  const fetchData = async () => {
    await getUser(id).then((res)=>{
      setData(res)
    })
  }

  useEffect(()=>{
    fetchData()
  },[])

  useEffect(()=>{
    if(isEdit && data){
      setName(data.name)
      setUsername(data.username)
      setEmail(data.email)
      setPhone(data.phone)
    }
  },[data])

  const handleCreate = async () =>{
    setLoading(true);
    await createUser().then((res)=>{
      setStatus(res)
    })
    setLoading(false)
  } 

  const handleUpdate = async () =>{
    setLoading(true);
    await updateUser(id).then((res)=>{
      setStatus(res)
    })
    setLoading(false)
  } 

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
            <TextField value={name} label="Name" color="warning" focused/>
            <TextField value={username} label="Username" color="warning" focused/>
            <TextField value={email} label="Email" color="warning" focused/>
            <TextField value={phone} label="Phone" color="warning" focused/>
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
            <TextField label="Name" color="warning" focused/>
            <TextField label="Username" color="warning" focused/>
            <TextField label="Email" color="warning" focused/>
            <TextField label="Phone" color="warning" focused/>
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