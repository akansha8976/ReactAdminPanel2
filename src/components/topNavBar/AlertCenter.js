import React, { useState, useEffect } from "react";
import { alertDropDown } from "./TopNavData";

function AlertCenter() {
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
          <span className="badge badge-danger badge-counter">3+</span>
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

export default AlertCenter;
