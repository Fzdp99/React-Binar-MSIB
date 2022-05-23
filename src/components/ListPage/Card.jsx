import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import "./Card.css"

const Card = (props) => {
  const {username, email, id} = props

  const history = useNavigate()

  return (
    <Grid  item xs={4}>
      <div className="card">
        <p>Username : {username}</p>
        <p>Email : {email}</p>
        <Button
          onClick={()=>history(`/detail/${id}`)}
          variant="contained"
          color="secondary"
        >
          Detail
        </Button>
      </div>
    </Grid>
  );
};

export default Card;

