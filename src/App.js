import React from "react";
import { Route, Routes } from "react-router-dom";

import "./css/sb-admin-2.css";
import "./css/sb-admin-2.min.css";
import SbAdmin from "./components/sideBarComponents/SbAdmin/SbAdmin";
import TopNavBar from "./components/topNavBar/topNavBar/TopNavBar";

import Footer from "./components/Footer/Footer";
import DashPage from "./pages/Dashboard/DashPage";
import Get from "./pages/Get/Get";
import EditPage from "./pages/Edit/EditPage";

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
