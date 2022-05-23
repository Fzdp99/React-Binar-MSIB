import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "../Card/Card"
import { getUsers } from "../../Store/Users";

const List =()=>{
  const [data, setData] = useState([])

  const fetchData = async () => {
    await getUsers().then((res)=>{
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
        <Card key={i} title={dt.username} content={dt.email} id={dt.id} isDetail={true}/>
      ))}
    </Grid>
  )
}

export default List