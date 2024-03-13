import React, { useState } from "react";
import GraphDropDown from "./GraphDropDown";
import Chart from "react-apexcharts";

function AreaChart() {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Jan", "Mar", "May", "Jul", "Sep", "Nov"],
      },
    },
    stroke: {
      curve: "smooth",
    },
    series: [
      {
        name: "series-1",
        data: [10000, 20000, 30000, 40000],
      },
    ],
  });

  return (
    <>
      <div className="col-xl-8 col-lg-7">
        <div className="card shadow mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">
              Earnings Overview
            </h6>

            <GraphDropDown />
          </div>

          <div className="card-body">
            <div className="chart-area ">
              <Chart
                options={state.options}
                series={state.series}
                type="area"
                width="530"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AreaChart;
