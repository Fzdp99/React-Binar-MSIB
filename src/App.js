import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import List from "./components/ListPage/List";
import Detail from "./components/DetailPage/Detail";
import Post from "./components/PostPage/Post";
import Navbar from "./components/Navbar/Navbar";

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
      path: "/detail/:id",
      component: <Detail />,
    },
    {
      path: "/post",
      component: <Post />,
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
