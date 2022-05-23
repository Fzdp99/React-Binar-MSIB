import React from 'react';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const history = useNavigate()
  
  return(
    <div>
      <h1>Ini Halaman Home</h1>
      
      <Button
        onClick={()=>history(`/list`)}
        variant="contained"
        color="secondary"
      >
        List
      </Button>
    </div>
  )
}

export default Home