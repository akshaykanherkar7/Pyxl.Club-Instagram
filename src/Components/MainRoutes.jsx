import React from "react";
import { Route, Routes } from "react-router-dom";
import RequiredAuth from "../hoc/RequiredAuth";
import HomePage from "../Pages/HomePage";
import MainHomePage from "../Pages/MainHomePage";
import SavedPosts from "../Pages/SavedPosts";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route
          path="/homepage"
          element={
            <RequiredAuth>
              <MainHomePage />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/savedposts"
          element={
            <RequiredAuth>
              <SavedPosts />
            </RequiredAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
