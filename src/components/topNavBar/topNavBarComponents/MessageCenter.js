import React, { useState, useEffect } from "react";
import { data } from "./TopNavData";

function MessageCenter() {
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
          <span className="badge badge-danger badge-counter">7</span>
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

export default MessageCenter;
