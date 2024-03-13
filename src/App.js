import React from "react";
import { Route, Routes } from "react-router-dom";

import "./css/sb-admin-2.css";
import "./css/sb-admin-2.min.css";
import SbAdmin from "./components/sideBarComponents/SbAdmin";
import TopNavBar from "./components/topNavBar/TopNavBar";
import AddPage from "./components/pages/AddPage";
import Footer from "./components/Footer";
import DashPage from "./components/pages/DashPage";
import FetchApi from "./components/pages/FetchApi";
import EditPage from "./components/pages/EditPage";

const App = () => {
  return (
    <>
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <SbAdmin />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            {/* <!-- Topbar --> */}
            <TopNavBar />

            <Routes>
              <Route path="*" element={<DashPage />}></Route>

              <Route path="/addpage" element={<AddPage />}></Route>

              <Route path="/Editpage/:_id" element={<EditPage />}></Route>

              <Route path="/fetchapi" element={<FetchApi />}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
