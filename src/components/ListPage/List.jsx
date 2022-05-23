import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "./Card"

const List =()=>{
  const [data, setData] = useState([])

  const fetchData = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/`)
    .then((res) => res.json()).then((result)=>{
      setData(result)
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
        <Card key={i} username={dt.username} email={dt.email} id={dt.id} />
      ))}
    </Grid>
  )
}

export default List