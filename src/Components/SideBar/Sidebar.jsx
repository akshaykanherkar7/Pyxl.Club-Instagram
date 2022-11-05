import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { TiThLarge } from "react-icons/ti";
import CreateNewPostModal from "../CreatePostModal/CreateNewPostModal";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [path, setPath] = useState("");
  console.log("path:", path);
  const handleGoHome = () => {
    navigate("/homepage");
    setPath("homepage");
  };

  const handleCreate = () => {
    setPath("create");
  };

  useEffect(() => {
    setPath("homepage");
  }, []);
  return (
    <div id="sidebar_Outer">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDukpoPvXH-FjCWHHt_FkrYd5SNiLRSy16X5o4uVrWu2eyJVmL8ff3z38fT4uGTOfoEQ&usqp=CAU"
        alt="insta_logo"
      />

      <div onClick={handleGoHome}>
        <span id="visible">
          <i class="fa-solid fa-house"></i>
        </span>
        <span
          id="hide"
          style={path === "homepage" ? { fontWeight: "bold" } : null}
        >
          Home
        </span>
      </div>

      <div>
        <span id="visible">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
        <span id="hide">Search</span>
      </div>

      <div>
        <span id="visible">
          <i class="fa-solid fa-compass"></i>
        </span>
        <span id="hide">Explore</span>
      </div>

      <div>
        <span id="visible">
          <i class="fa-solid fa-message"></i>
        </span>
        <span id="hide">Messages</span>
      </div>

      <div>
        <span id="visible">
          <i class="fa-regular fa-heart"></i>
        </span>
        <span id="hide">Notifications</span>
      </div>

      {/* <div> */}
      {/* <span id="visible">
          <i class="fa-regular fa-square-plus"></i>
        </span>
        <span id="hide">Create</span> */}
      <CreateNewPostModal
        handleCreate={handleCreate}
        path={path}
      ></CreateNewPostModal>
      {/* </div> */}

      {/* <div>
        <span>
          <i class="fa-solid fa-people-roof"></i>
        </span>
        <span>Staff</span>
      </div> */}

      <div style={{ marginTop: "55px" }}>
        <span id="visible">
          <i class="fas fa-bars" id="bars"></i>
        </span>
        <span id="hide">More</span>
      </div>
    </div>
  );
};

export default Sidebar;
