import React from "react";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../app/routes";
import "./Header.css";
import logo from "../../../assets/images/reddit-logo-white.png";

const Header = () => {
  return (
    <>
      <div className="search-section">
        <div className="logo-section">
          <img className="logo" alt="reddit" src={logo} />
          <p>minimal-reddit</p>
        </div>
        <div className="search-bar">
            <input placeholder="Ask Reddit" />
            <button>Ask</button>
        </div>
        <div className="icon-section">
            <p>notifications</p>
            <p>post</p>
            <p>account</p>
        </div>
      </div>
      <div className="nav-section">
        <nav>
          <ul className="nav-tab">
            <li>
              <NavLink to={ROUTES.homeRoute()}>Home</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.popularRoute()}>Popular</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.exploreRoute()}>Explore</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
