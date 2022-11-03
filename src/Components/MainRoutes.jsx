import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
