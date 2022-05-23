import "./App.css";
import React from "react";
import Home from "./components/HomePage/Home";
import List from "./components/ListPage/List";
import DetailList from "./components/DetailUser/Detail";
import DetailPost from "./components/DetailPost/Detail";
import Post from "./components/PostPage/Post";
import Navbar from "./components/Navbar/Navbar";
import UserUC from "./components/CreateUpdate/user";
import PostUC from "./components/CreateUpdate/post";
import Login from "./components/LoginPage/Login";
import { Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const link = [
    {
      path: "/",
      component: <Home />,
    },
    {
      path: "/list",
      component: <List />,
    },
    {
      path: "/list/detail/:id",
      component: <DetailList />,
    },
    {
      path: "/list/:action",
      component: <UserUC />,
    },
    {
      path: "/list/:action/:id",
      component: <UserUC />,
    },
    {
      path: "/post/detail/:id",
      component: <DetailPost />,
    },
    {
      path: "/post",
      component: <Post />,
    },
    {
      path: "/post/:action",
      component: <PostUC />,
    },
    {
      path: "/post/:action/:id",
      component: <PostUC />,
    },
    {
      path: "/login",
      component: <Login />,
    },
  ];
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        <GoogleOAuthProvider clientId="626474610190-rk4voukdv2g5sofm4idl00dj9sc3mvhh.apps.googleusercontent.com">
          <Routes>
            {link.map((data, i) => (
              <Route key={i} path={data.path} element={data.component}></Route>
            ))}
          </Routes>
        </GoogleOAuthProvider>
        ;
      </header>
    </div>
  );
}

export default App;
