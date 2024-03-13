import React from "react";

function ColorsDashboard({ item }) {
  return (
    <div className="col-lg-6 mb-4">
      <div className={item.classname}>
        <div className="card-body">
          {item.color}
          <div className={item.classname2}>{item.code}</div>
        </div>
      </div>
    </div>
  );
}

export default ColorsDashboard;
