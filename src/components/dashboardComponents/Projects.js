import React from "react";
import { color, progressbar } from "./ProjectData";

import { Illustration, ProgreeBar, Colors } from "./DashBoardFunctions";

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
                    <ProgreeBar item={item} />
                  </>
                );
              })}
            </div>
          </div>
          {/* <!-- Color System --> */}
          <div className="row">
            {color.map((item) => {
              return <Colors item={item} />;
            })}
          </div>
        </div>

        <Illustration />
      </div>
    </>
  );
}

export default ProjectsDashBoard;
