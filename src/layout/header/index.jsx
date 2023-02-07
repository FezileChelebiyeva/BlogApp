import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
import '../../assets/sass/main.scss'
const Header = () => {
  return (
    <div id="header">
      <header>
        <div className="logo">
          <h1>The Blog Website</h1>
        </div>
        <ul>
          <li>
            {" "}
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={"/new-blog"}>New Blog</NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
