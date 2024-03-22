import React from "react";
import { NavLink } from "react-router-dom";
function NavLinks({ icon, name, route }) {
  return (
    <li className="nav-item">
      <NavLink className="nav-link" to={route}>
        <i className={icon}></i>
        <span>{name}</span>
      </NavLink>
    </li>
  );
}

export default NavLinks;
