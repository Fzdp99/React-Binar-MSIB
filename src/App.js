import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import List from "./components/ListPage/List";
import DetailList from "./components/DetailUser/Detail";
import DetailPost from "./components/DetailPost/Detail";
import Post from "./components/PostPage/Post";
import Navbar from "./components/Navbar/Navbar";
import UserUC from "./components/CreateUpdate/user";
import PostUC from "./components/CreateUpdate/post";

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
  ];
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        <Routes>
          {link.map((data, i) => (
            <Route key={i} path={data.path} element={data.component}></Route>
          ))}
        </Routes>
      </header>
    </div>
  );
}

export default App;
