import Home from "./Page/Home";
import Layout from "./Page/Layout";
import Board from "./Page/Board";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
  const { title, setTitle } = useState(initialTitle);
  const updateTitle = () => {
    console.log(document.querySelector("title"));
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
        <Route path="/board" element={<Board />} />
      </Route>
    </Routes>
  );
}

export default App;
