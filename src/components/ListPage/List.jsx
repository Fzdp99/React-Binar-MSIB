import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "../Card/Card"
import { getUsers } from "../../Store/Users";
import { useNavigate } from "react-router-dom";
import "./List.css"

const List =()=>{
  const [data, setData] = useState([])

  const history = useNavigate()

  const fetchData = async () => {
    await getUsers().then((res)=>{
      setData(res)
    })
  }

  useEffect(()=>{
    fetchData()
  },[])

  return(
    <div>
      <div className="createBt">
        <Button
          onClick={()=>history(`/list/create`)}
          variant="contained"
          color="secondary"
        >
          Create User
        </Button>
      </div>
      <Grid
        container
        spacing={4}
      >
        {data.map((dt, i) => (
          <Card key={i} title={dt.username} content={dt.email} id={dt.id} isDetail={true}/>
        ))}
      </Grid>
    </div>
  )
}

export default List