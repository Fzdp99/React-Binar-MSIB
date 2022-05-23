import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
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
        <p className="par">{title}</p>
        <p className="par">{content}</p>
        {isDetail ? (
          <div>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              <Button
                onClick={()=>history(`/list/update/${id}`)}
              >
                Update
              </Button>
              <Button
                onClick={()=>history(`/list/detail/${id}`)}
              >
                Detail
              </Button>
            </ButtonGroup>
          </div>
        ) : (
          <div>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              <Button
                onClick={handleDelete}
              >
                Delete
              </Button>
              <Button
                onClick={()=>history(`/post/update/${id}`)}
              >
                Update
              </Button>
              <Button
                onClick={()=>history(`/post/detail/${id}`)}
              >
                Detail
              </Button>
            </ButtonGroup>
          </div>
        )}
      </div>
    </Grid>
  );
};

export default Card;

