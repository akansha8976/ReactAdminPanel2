import React, { useState, useEffect } from "react";

function GraphDropDown() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  const menuClass = `dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in${
    open ? " show" : ""
  }`;

  useEffect(() => {
    let handler = () => {
      setOpen(false);
    };

    document.addEventListener("mousedown", handler);
  });

  return (
    <>
      <div className="dropdown no-arrow" onClick={toggleOpen}>
        <a
          className="dropdown-toggle"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
        </a>
        <div className={menuClass} aria-labelledby="dropdownMenuLink">
          <div className="dropdown-header">Dropdown Header:</div>
          <a className="dropdown-item">Action</a>
          <a className="dropdown-item">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item">Something else here</a>
        </div>
      </div>
    </>
  );
}

export default GraphDropDown;
