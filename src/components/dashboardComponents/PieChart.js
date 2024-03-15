import React from "react";
import Chart from "react-apexcharts";
import { piebar } from "./ProjectDashBoardData";

import GraphDropDown from "./GraphDropDown";
function PieChart() {
  return (
    <>
      <div className="col-xl-4 col-lg-5">
        <div className="card shadow mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">
              Revenue Sources
            </h6>

            <GraphDropDown id="dropdown2" />
          </div>

          <div className="card-body">
            <div className="chart-pie pt-4 pb-2">
              <Chart
                series={[50, 30, 15]}
                type="donut"
                width="300"
                options={{
                  legend: { show: false },
                }}
              />
              <canvas></canvas>
            </div>
            <div className="mt-4 text-center small">
              {piebar.map((item) => {
                return (
                  <>
                    <span className="mr-2">
                      <i className={item.icon}></i> {item.text}
                    </span>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PieChart;
