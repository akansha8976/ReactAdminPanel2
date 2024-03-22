import React from "react";

import {
  SearchBar,
  DropdownSearch,
  MessageCenter,
  AlertCenter,
  Profile,
} from "../topNavBarComponents/Functions";
function AlertIcons() {
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars"></i>
        </button>

        <SearchBar />

        <ul className="navbar-nav ml-auto">
          <DropdownSearch />

          <AlertCenter />

          <MessageCenter />

          <div className="topbar-divider d-none d-sm-block"></div>

          <Profile />
        </ul>
      </nav>
    </>
  );
}

export default AlertIcons;
