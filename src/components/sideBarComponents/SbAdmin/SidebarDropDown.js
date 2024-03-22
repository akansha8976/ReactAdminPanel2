import React from "react";
import { Link } from "react-router-dom";
function SidebarDropDown({ icon, name }) {
  return (
    <Link
      className="nav-link collapsed"
      to="/"
      data-toggle="collapse"
      data-target="#collapseUtilities"
      aria-expanded="true"
      aria-controls="collapseUtilities"
    >
      <i className={icon}></i>
      <span>{name}</span>
    </Link>
  );
}

export default SidebarDropDown;
