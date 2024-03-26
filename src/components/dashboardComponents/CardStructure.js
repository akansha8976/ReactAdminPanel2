import React from "react";

function CardStructure({ item }) {
  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className={item.class1}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className={item.class2}>{item.title}</div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {item.price}
              </div>
            </div>
            <div className="col-auto">
              <i className={item.icon}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardStructure;
