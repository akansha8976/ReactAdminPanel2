import React, { useState, useEffect } from "react";

function GraphDropDown({ id }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prevOpen) => !prevOpen);

  const menuClass = `dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in${
    open ? " show" : ""
  }`;

  useEffect(() => {
    let handler = (event) => {
      if (!event.target.closest(`#${id}`)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [id]);

  const handleIconClick = (event) => {
    event.stopPropagation();
    toggleOpen();
  };

  return (
    <div className="dropdown no-arrow">
      <a
        className="dropdown-toggle"
        role="button"
        id={id}
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        onClick={handleIconClick}
      >
        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
      </a>
      <div className={menuClass} aria-labelledby={id}>
        <div className="dropdown-header">Dropdown Header:</div>
        <a className="dropdown-item">Action</a>
        <a className="dropdown-item">Another action</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item">Something else here</a>
      </div>
    </div>
  );
}

export default GraphDropDown;
