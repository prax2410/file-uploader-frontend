import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoute from "./auth/PrivateRoute";
import Login from "./pages/Login";
import Home from "./pages/Home";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                    {/* <Route exact path="/" element={<Home />} /> */}
                    <Route exact path="/" element={<PrivateRoute><Home /></PrivateRoute>} end />
                </Routes>
			</Fragment>
        </BrowserRouter>
    );
};

export default AppRoutes;