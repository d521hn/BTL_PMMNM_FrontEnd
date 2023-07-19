import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { homeRoutes } from "./index";

const AppRoutes = () => (
  <Router>
    <Routes>
      {homeRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  </Router>
);

export default AppRoutes;