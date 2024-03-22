import React, { useState, useEffect } from "react";
import { data, alertDropDown } from "./TopNavData";
import NavDropdown from "react-bootstrap/NavDropdown";
import Loading from "../../Loading";
export function SearchBar() {
  return (
    <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
      <div className="input-group">
        <input
          type="text"
          className="form-control bg-light border-0 small"
          placeholder="Search for..."
          aria-label="Search"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button">
            <i className="fas fa-search fa-sm"></i>
          </button>
        </div>
      </div>
    </form>
  );
}
export function DropdownSearch() {
  return (
    <li className="nav-item dropdown no-arrow d-sm-none">
      <a
        className="nav-link dropdown-toggle"
        href="/"
        id="searchDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className="fas fa-search fa-fw"></i>
      </a>
      {/* <!-- Dropdown - Messages --> */}
      <div
        className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
        aria-labelledby="searchDropdown"
      >
        <form className="form-inline mr-auto w-100 navbar-search">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </li>
  );
}
export function MessageCenter() {
  const [openMessage, setOpenMessage] = useState(false);
  const messageToggleOpen = () => setOpenMessage((prevOpen) => !prevOpen);
  const messageMenuClass = `dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in${
    openMessage ? " show" : ""
  }`;

  useEffect(() => {
    let handler = (event) => {
      if (!event.target.closest("#messagesDropdown")) {
        setOpenMessage(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <>
      <li
        className="nav-item dropdown no-arrow mx-1"
        onClick={messageToggleOpen}
      >
        <a
          className="nav-link dropdown-toggle"
          id="messagesDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="fas fa-envelope fa-fw"></i>
          {/* <!-- Counter - Messages --> */}
          <span className="badge badge-danger badge-counter">8</span>
        </a>
        {/* <!-- Dropdown - Messages --> */}
        <div className={messageMenuClass} aria-labelledby="messagesDropdown">
          <h6 className="dropdown-header">Message Center</h6>

          {data.map((item, index) => (
            <a className="dropdown-item d-flex align-items-center" key={index}>
              <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src={item.imf} alt="..." />
                <div className={item.className}></div>
              </div>
              <div className="font-weight-bold">
                <div className="text-truncate">{item.text}</div>
                <div className="small text-gray-500">{item.name}</div>
              </div>
            </a>
          ))}

          <a className="dropdown-item text-center small text-gray-500">
            Read More Messages
          </a>
        </div>
      </li>
    </>
  );
}
export function AlertCenter() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prevOpen) => !prevOpen);

  const menuClass = `dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in${
    open ? " show" : ""
  }`;

  useEffect(() => {
    let handler = (event) => {
      if (!event.target.closest("#alertsDropdown")) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <>
      <li className="nav-item dropdown no-arrow mx-1">
        <a
          className="nav-link dropdown-toggle"
          id="alertsDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={toggleOpen}
        >
          <i className="fas fa-bell fa-fw"></i>
          {/* <!-- Counter - Alerts --> */}
          <span className="badge badge-danger badge-counter">4+</span>
        </a>

        <div className={menuClass} aria-labelledby="alertsDropdown">
          <h6 className="dropdown-header">Alerts Center</h6>

          {alertDropDown.map((item, index) => (
            <a className="dropdown-item d-flex align-items-center" key={index}>
              <div className="mr-3">
                <div className={item.class}>
                  <i className={item.icon}></i>
                </div>
              </div>
              <div>
                <div className="small text-gray-500">{item.date}</div>
                <span className="font-weight-bold">{item.para}</span>
              </div>
            </a>
          ))}

          <a className="dropdown-item text-center small text-gray-500">
            Show All Alerts
          </a>
        </div>
      </li>
    </>
  );
}
export function Profile() {
  const [loading, setLoading] = useState(false);
  const handleImageLoad = () => {
    setLoading(false);
  };
  return (
    <NavDropdown
      title={
        <div>
          <span className="mr-2 d-none d-lg-inline text-gray-600 small ">
            Douglas McGee..
          </span>
          {loading && <Loading />}
          <img
            className={`img-profile rounded-circle me-2 ${
              loading ? "d-none" : ""
            }`}
            src="img/undraw_profile.svg"
            alt=".."
            onLoad={handleImageLoad}
          />
        </div>
      }
      id="collasible-nav-dropdown"
    >
      <NavDropdown.Item href="#action/3.1">
        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
        Profile
      </NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">
        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
        Settings
      </NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">
        {" "}
        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
        Activity Log
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">
        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
        Logout
      </NavDropdown.Item>
    </NavDropdown>
  );
}
