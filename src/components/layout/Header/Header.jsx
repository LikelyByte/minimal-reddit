import React from "react";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../app/routes";

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
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
  );
};

export default Header;
