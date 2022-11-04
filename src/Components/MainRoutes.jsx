import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import MainHomePage from "../Pages/MainHomePage";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/homepage" element={<MainHomePage />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
