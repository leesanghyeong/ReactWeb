import Home from "./Page/Home";
import Layout from "./Page/Layout";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Crud from "./Page/Crud";
import Login from "./Page/Login";
import Board from "./Page/Borad";
import Identity from "./Page/Identity";

const useTitle = (initialTitle) => {
  const { title, setTitle } = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

function App() {
  useTitle("loding");
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Crud" element={<Crud />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Board" element={<Board />} />
        <Route path="/identity" element={<Identity />} />
      </Route>
    </Routes>
  );
}

export default App;
