import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../../Store/Posts";
import "./Card.css"

const Card = (props) => {
  const {title, content, id, isDetail} = props
  const [status, setStatus] = useState()
  const [isLoading, setLoading] = useState(false)
  const history = useNavigate()

  const handleDelete = async () => {
    setLoading(true);
    await deletePost(id).then((res)=>{
      setStatus(res)
    })
    setLoading(false)
  }

  setTimeout(()=>{
    setStatus(null);
  },3000)

  return (
    <Grid  item xs={4}>
      <div className="card">
        {status && (
          <div className="alert">{status==200 ? "Success":"Failed"}</div>
        )}
        {isLoading && <div className="alert">Please wait....</div>}
        <p>{title}</p>
        <p>{content}</p>
        {isDetail ? (
          <Button
            onClick={()=>history(`/detail/${id}`)}
            variant="contained"
            color="secondary"
          >
            Detail
          </Button>
        ) : (
          <Button
            onClick={handleDelete}
            variant="contained"
            color="secondary"
          >
            Delete
          </Button>
        )}
      </div>
    </Grid>
  );
};

export default Card;

