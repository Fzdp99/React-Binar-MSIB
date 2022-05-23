import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import List from "./components/ListPage/List";
import Detail from "./components/DetailPage/Detail";

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
  ];
  return (
    <div className="App">
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
