import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { homeRoutes } from "./index";
import { Public } from "../pages/public";


const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path={'/'} element={<Public/>}>
                {homeRoutes.map((route, index) => (
                    <Route key={index} path={route.path} element={<route.component />} />
                ))}
            </Route>
        </Routes>
    </Router>
);

export default AppRoutes;