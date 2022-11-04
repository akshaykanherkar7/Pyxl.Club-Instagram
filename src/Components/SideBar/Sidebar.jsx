import React from "react";
import "./Sidebar.css";
import { TiThLarge } from "react-icons/ti";

const Sidebar = () => {
  return (
    <div id="sidebar_Outer">
      <img
        style={{ width: "80%" }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDukpoPvXH-FjCWHHt_FkrYd5SNiLRSy16X5o4uVrWu2eyJVmL8ff3z38fT4uGTOfoEQ&usqp=CAU"
        alt="insta_logo"
      />

      <div>
        <span>
          <i class="fa-solid fa-house"></i>
        </span>
        <span>Home</span>
      </div>

      <div>
        <span>
          <i class="fa-solid fa-cart-shopping"></i>
        </span>
        <span>Search</span>
      </div>

      <div>
        <span>
          <i class="fa-solid fa-cube"></i>
        </span>
        <span>Explore</span>
      </div>

      <div>
        <span>
          <TiThLarge />
        </span>
        <span>Messages</span>
      </div>

      <div>
        <span>
          <TiThLarge />
        </span>
        <span>Notifications</span>
      </div>

      <div>
        <span>
          <i class="fa-solid fa-chart-simple"></i>
        </span>
        <span>Create</span>
      </div>

      {/* <div>
        <span>
          <i class="fa-solid fa-people-roof"></i>
        </span>
        <span>Staff</span>
      </div> */}

      <div style={{ marginTop: "55px" }}>
        <span>
          <i class="fa-solid fa-house"></i>
        </span>
        <span>More</span>
      </div>
    </div>
  );
};

export default Sidebar;
