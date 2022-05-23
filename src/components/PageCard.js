import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const Card = () => {
  const [Data, setData] = useState(2000);

  return (
    <div className="card">
      <h4>Title : Default Title </h4>
      <h4>Deskipsi : ..........</h4>
      <h4>Price : {Data}</h4>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button onClick={() => setData(Data * 2)}>Inc</Button>
        <Button onClick={() => setData(Data / 2)}>Dic</Button>
      </ButtonGroup>
    </div>
  );
};

export default Card;
