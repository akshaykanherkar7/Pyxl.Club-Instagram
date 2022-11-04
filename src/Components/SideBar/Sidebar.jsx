import React from "react";
import "./Sidebar.css";
import { TiThLarge } from "react-icons/ti";

const Sidebar = () => {
  return (
    <div id="sidebar_Outer">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDukpoPvXH-FjCWHHt_FkrYd5SNiLRSy16X5o4uVrWu2eyJVmL8ff3z38fT4uGTOfoEQ&usqp=CAU"
        alt="insta_logo"
      />

      <div>
        <span id="visible">
          <i class="fa-solid fa-house"></i>
        </span>
        <span id="hide">Home</span>
      </div>

      <div>
        <span id="visible">
          <i class="fa-solid fa-cart-shopping"></i>
        </span>
        <span id="hide">Search</span>
      </div>

      <div>
        <span id="visible">
          <i class="fa-solid fa-cube"></i>
        </span>
        <span id="hide">Explore</span>
      </div>

      <div>
        <span id="visible">
          <TiThLarge />
        </span>
        <span id="hide">Messages</span>
      </div>

      <div>
        <span id="visible">
          <TiThLarge />
        </span>
        <span id="hide">Notifications</span>
      </div>

      <div>
        <span id="visible">
          <i class="fa-solid fa-chart-simple"></i>
        </span>
        <span id="hide">Create</span>
      </div>

      {/* <div>
        <span>
          <i class="fa-solid fa-people-roof"></i>
        </span>
        <span>Staff</span>
      </div> */}

      <div style={{ marginTop: "55px" }}>
        <span id="visible">
          <i class="fa-solid fa-house"></i>
        </span>
        <span id="hide">More</span>
      </div>
    </div>
  );
};

export default Sidebar;
