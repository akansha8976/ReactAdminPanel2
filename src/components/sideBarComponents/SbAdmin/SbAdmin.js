import React, { useEffect, useState } from "react";
import Loading from "../../Loading";
import { Link } from "react-router-dom";
import {
  pagesData1,
  utilityData,
  pagesData2,
  componentsData,
} from "../SbAdminComponents/SbAdminData";
import NavLinks from "../SbAdminComponents/NavLinks";
import SidebarDropDown from "./SidebarDropDown";
function SbAdmin() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  const menuClass = `collapse${open ? " show" : ""}`;

  const [open1, setOpen1] = useState(false);
  const toggleOpen1 = () => {
    setOpen1(!open1);
  };
  const menuClass1 = `collapse${open1 ? " show" : ""}`;

  const [open2, setOpen2] = useState(false);
  const toggleOpen2 = () => {
    setOpen2(!open2);
  };
  const menuClass2 = `collapse${open2 ? " show" : ""}`;

  useEffect(() => {
    let handler = () => {
      setOpen(false);
      setOpen1(false);
      setOpen2(false);
    };

    document.addEventListener("mousedown", handler);
  });

  const handleImageLoad = () => {
    setLoading(false);
  };
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/dashpage"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </Link>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        <NavLinks
          icon="fas fa-fw fa-tachometer-alt"
          name="Dashboard"
          route="/dashpage"
        />

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Interface</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item" onClick={toggleOpen2}>
          <SidebarDropDown icon="fas fa-fw fa-cog" name="Components" />
          <div
            className={menuClass2}
            id="collapseTwo"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              {componentsData.map((item) => {
                return (
                  <>
                    <Link className="collapse-item" to={item.route}>
                      {item.name}
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
        </li>

        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
        <li className="nav-item" onClick={toggleOpen1}>
          <SidebarDropDown icon="fas fa-fw fa-wrench" name="Utilities" />

          <div
            className={menuClass1}
            id="collapseUtilities"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              {utilityData.map((item) => {
                return (
                  <>
                    <Link className="collapse-item" to={item.route}>
                      {item.name}
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Addons</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item" onClick={toggleOpen}>
          <SidebarDropDown icon="fas fa-fw fa-folder" name="Pages" />
          <div
            className={menuClass}
            id="collapsePages"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              {pagesData1.map((item) => {
                return (
                  <>
                    <Link className="collapse-item" to={item.route}>
                      {item.name}
                    </Link>
                  </>
                );
              })}

              <div className="collapse-divider"></div>
              <h6 className="collapse-header">Other Pages:</h6>
              {pagesData2.map((item) => {
                return (
                  <>
                    <Link className="collapse-item" to={item.route}>
                      {item.name}
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
        </li>

        <NavLinks icon="fas fa-fw fa-chart-area" name="charts" route="/" />

        <NavLinks icon="fas fa-fw fa-table" name="Table" route="/get" />

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />

        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>

        <div className="sidebar-card d-none d-lg-flex">
          {loading && <Loading />}
          <img
            className={`sidebar-card-illustration mb-2 ${
              loading ? "d-none" : ""
            }`}
            src="img/undraw_rocket.svg"
            alt="..."
            onLoad={handleImageLoad}
          />
          <p className="text-center mb-2">
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <Link
            className="btn btn-success btn-sm"
            to="https://startbootstrap.com/theme/sb-admin-pro"
          >
            Upgrade to Pro!
          </Link>
        </div>
      </ul>
    </>
  );
}

export default SbAdmin;
