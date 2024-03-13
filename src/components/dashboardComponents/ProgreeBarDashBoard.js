import React from "react";

function ProgreeBarDashBoard({ item }) {
  return (
    <>
      <h4 className="small font-weight-bold">
        {item.title} <span className="float-right">{item.percent}</span>
      </h4>
      <div className="progress mb-4">
        <div
          className={item.class}
          role="progressbar"
          style={{ width: `${item.width}` }}
          aria-valuenow="20"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </>
  );
}

export default ProgreeBarDashBoard;
