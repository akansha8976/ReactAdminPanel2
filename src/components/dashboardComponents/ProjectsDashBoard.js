import React from "react";
import { color, progressbar } from "./ProjectDashBoardData";
import ColorsDashboard from "./ColorsDashboard";
import ProgreeBarDashBoard from "./ProgreeBarDashBoard";
import DashBoardIllustration from "./DashBoardIllustration";

function ProjectsDashBoard() {
  return (
    <>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
            </div>
            <div className="card-body">
              {progressbar.map((item) => {
                return (
                  <>
                    <ProgreeBarDashBoard item={item} />
                  </>
                );
              })}
            </div>
          </div>
          {/* <!-- Color System --> */}
          <div className="row">
            {color.map((item) => {
              return <ColorsDashboard item={item} />;
            })}
          </div>
        </div>

        <DashBoardIllustration />
      </div>
    </>
  );
}

export default ProjectsDashBoard;
