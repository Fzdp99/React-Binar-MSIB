import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import "./Card.css"

const Card = () => {
  const [data, setData] = useState([
    { title: "Mangga", content: "Arum Manis", price: 9000 },
    { title: "Apel", content: "Apel Khas Malang", price: 12000 },
    { title: "Jeruk", content: "Mandarin", price: 18000 },
    { title: "Jeruk", content: "California", price: 24000 },
  ]);

  const [totalData, setTotalData] = useState([
    {
      jumlah: 0,
      total: 0,
    },
    {
      jumlah: 0,
      total: 0,
    },
    {
      jumlah: 0,
      total: 0,
    },
    {
      jumlah: 0,
      total: 0,
    },
  ]);

  const handleAdd = (i) => {
    let jumlah = totalData[i].jumlah + 1;
    let total = totalData[i].total + data[i].price ;

    const item = totalData[i]
    
    const updatedItem = {
      ...item,
      jumlah,
      total
    };

    const updatedArray = [...totalData];
    updatedArray[i] = updatedItem;

    // console.log(item);

    setTotalData(updatedArray);
  }

  const handleDell = (i) => {
    let jumlah = totalData[i].jumlah - 1;
    let total = totalData[i].total - data[i].price ;

    const item = totalData[i]
    
    const updatedItem = {
      ...item,
      jumlah,
      total
    };

    const updatedArray = [...totalData];
    updatedArray[i] = updatedItem;

    // console.log(item);

    setTotalData(updatedArray);
  }

  return (
      <Grid
      container
      spacing={4}
      justifyContent="center"
      >
        {data.map((dt, index) => {
          return (
            <Grid item xs={3} key={index}>
              <div className="card">
                <h1>{dt.title}</h1>
                <h4>{dt.content}</h4>
                <p>{dt.price}</p>

                <Grid
                  container
                  direction="row"
                  justifyContent="space-evenly"
                  alignItems="center"
                >
                  <Button
                    onClick={() => handleAdd(index)}
                    variant="contained"
                    color="secondary"
                  >
                    Inc
                  </Button>

                  <p>{totalData[index].jumlah}</p>

                  <Button onClick={() => handleDell(index)} variant="contained" color="error">
                    Dic
                  </Button>
                </Grid>
                <p>Total Price : {totalData[index].total}</p>
              </div>
            </Grid>
          );
        })}
      </Grid>
  );
};

export default Card;

// Referensi : https://stackoverflow.com/questions/68651307/what-is-the-best-way-to-update-an-object-in-a-usestate-and-see-the-change-immedi