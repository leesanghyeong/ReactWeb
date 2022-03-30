import Home from "./Page/Home";
import Layout from "./Page/Layout";
import Board from "./Page/Board";
import { Routes, Route } from "react-router-dom";
import React from "react";

function App() {
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
