import React from 'react';
import "./Home.css"
// import Button from "@mui/material/Button";
// import ButtonGroup from "@mui/material/ButtonGroup";
// import { useNavigate } from "react-router-dom";

const Home = () => {
  // const history = useNavigate()
  
  return(
    <div className='home'>
      <h1>WELCOME</h1>

      {/* <ButtonGroup size="large" color="warning" variant="outlined" aria-label="outlined button group">
        <Button
          onClick={()=>history(`/list`)}
        >
          User
        </Button>
        <Button
          onClick={()=>history(`/post`)}
        >
          Post
        </Button>
      </ButtonGroup> */}
      
    </div>
  )
}

export default Home