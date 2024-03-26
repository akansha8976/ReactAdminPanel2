import React, { useState } from "react";
import GraphDropDown from "./GraphDropDown";
import Chart from "react-apexcharts";

import { piebar } from "./ProjectData";

export function PieChart() {
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
export function AreaChart() {
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

            <GraphDropDown id="dropdown1" />
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
export function Illustration() {
  return (
    <>
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style={{ width: "25rem" }}
                src="img/undraw_posting_photo.svg"
                alt="..."
              />
            </div>
            <p>
              Add some quality, svg illustrations to your project courtesy of
              <a target="_blank" rel="nofollow" href="https://undraw.co/">
                unDraw
              </a>
              , a constantly updated collection of beautiful svg images that you
              can use completely free and without attribution!
            </p>
            <a target="_blank" rel="nofollow" href="https://undraw.co/">
              Browse Illustrations on unDraw &rarr;
            </a>
          </div>
        </div>

        {/* <!-- Approach --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Development Approach
            </h6>
          </div>
          <div className="card-body">
            <p>
              SB Admin 2 makes extensive use of Bootstrap 4 utility classNamees
              in order to reduce CSS bloat and poor page performance. Custom CSS
              classNamees are used to create custom components and custom
              utility classNamees.
            </p>
            <p className="mb-0">
              Before working with this theme, you should become familiar with
              the Bootstrap framework, especially the utility classNamees.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export function ProgreeBar({ item }) {
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
export function Colors({ item }) {
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
