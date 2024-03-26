import React from "react";
import { Route, Routes } from "react-router-dom";

import "./css/sb-admin-2.css";
import "./css/sb-admin-2.min.css";

import TopNavBar from "./components/topNavBar/topNavBar/TopNavBar";
import SbAdmin from "./components/sideBar/sbAdmin/SbAdmin";
import Footer from "./components/footer/Footer";
import DashPage from "./pages/dashboard/DashBoard";
import Get from "./pages/get/Get";
import EditPage from "./pages/edit/Edit";

const App = () => {
  return (
    <>
      <div id="wrapper">
        <SbAdmin />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopNavBar />

            <Routes>
              <Route path="*" element={<DashPage />}></Route>

              <Route path="/Editpage/:_id" element={<EditPage />}></Route>

              <Route path="/Get" element={<Get />}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
