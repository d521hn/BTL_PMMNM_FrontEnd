import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { homeRoutes, checkoutRoutes } from "./index";
import { Public } from "../pages/public";
import path from "../ultils/path";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path={path.PUBLIC} element={<Public />}>
        {homeRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Route>
      {checkoutRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  </Router>
);

export default AppRoutes;