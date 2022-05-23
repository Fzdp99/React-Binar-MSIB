import React from 'react';
import TextField from '@mui/material/TextField';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { GoogleOAuthProvider, GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom"
import "./Login.css"

const Home =()=>{

  const history = useNavigate()

  const login = useGoogleLogin({
    onSuccess: tokenResponse => handleSuccess(tokenResponse),
  });

  const handleSuccess =(res)=>{
    localStorage.setItem("token",res.credential);
    history("/")
  }

  return(
    <React.Fragment>
      <CardContent>
        <TextField fullWidth label="Email" id="fullWidth" margin="normal"/>
        <TextField fullWidth label="Password" id="fullWidth" margin="normal"/>
      </CardContent>
      <CardActions>
        <div className='sgnBT'>
          <div className='btSign'>
            <Button variant="outlined">Sign in</Button>
          </div>
          <div className='btSign'>
            {/* <GoogleOAuthProvider clientId="626474610190-rk4voukdv2g5sofm4idl00dj9sc3mvhh.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={credentialResponse => {
                  console.log(credentialResponse);
                  handleSuccess(credentialResponse);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />;
            </GoogleOAuthProvider>; */}
            <Button onClick={() => login()} variant="outlined">Sign in with google</Button>
          </div>
        </div>
      </CardActions>
    </React.Fragment>
  )
}

export default Home