import React, { useState } from "react";
import { Router, Routes, Route } from "react-router-dom";
import Auth from "./Page/Auth";
import Home from "./Page/Home";

export default () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Routes>
        <Route>
          {isLoggedIn ? (
            <>
              <Route path="/">
                <Home />
              </Route>
            </>
          ) : (
            <Route path="/auth">
              <Auth />
            </Route>
          )}
        </Route>
      </Routes>
    </Router>
  );
};
