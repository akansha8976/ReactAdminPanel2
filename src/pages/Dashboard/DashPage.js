import React from "react";
import DashBoardCard from "../../components/dashboardComponents/DashBoardCard";
import PieChart from "../../components/dashboardComponents/PieChart";
import AreaChart from "../../components/dashboardComponents/AreaChart";

import ProjectsDashBoard from "../../components/dashboardComponents/ProjectsDashBoard";
function DashBoard() {
  return (
    <>
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a
                  href="/"
                  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                >
                  <i className="fas fa-download fa-sm text-white-50"></i>{" "}
                  Generate Report
                </a>
              </div>

              <DashBoardCard />

              <div className="row">
                {/* <!-- Area Chart --> */}
                <AreaChart />

                {/* <!-- Pie Chart --> */}
                <PieChart />
              </div>

              <ProjectsDashBoard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
