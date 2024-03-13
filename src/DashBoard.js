import React, { useEffect } from "react";
import ColorsDashboard from "./components/ColorsDashboard";
import ProgreeBarDashBoard from "./components/ProgreeBarDashBoard";
import WOW from "wowjs";
import DashBoardCard from "./components/DashBoardCard";
import DashBoardIllustration from "./components/DashBoardIllustration";
import SbAdmin from "./components/SbAdmin";
function DashBoard() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  const color = [
    {
      id: "1",
      color: "Primary",
      code: "#4e73df",
      classname: "card bg-primary text-white shadow",
      classname2: "text-white-50 small",
    },
    {
      id: "2",
      color: "Success",
      code: "#1cc88a",
      classname: "card bg-success text-white shadow",
      classname2: "text-white-50 small",
    },
    {
      id: "3",
      color: "Info",
      code: "#36b9cc",
      classname: "card bg-info text-white shadow",
      classname2: "text-white-50 small",
    },
    {
      id: "4",
      color: "Warning",
      code: "#f6c23e",
      classname: "card bg-warning text-white shadow",
      classname2: "text-white-50 small",
    },
    {
      id: "5",
      color: "Danger",
      code: "#e74a3b",
      classname: "card bg-danger text-white shadow",
      classname2: "text-white-50 small",
    },
    {
      id: "6",
      color: "Secondary",
      code: "#858796",
      classname: "card bg-secondary text-white shadow",
    },
    {
      id: "7",
      color: "Light",
      code: "#f8f9fc",
      classname: "card bg-light text-black shadow",
      classname2: "text-black-50 small",
    },
    {
      id: "8",
      color: "Dark",
      code: "#5a5c69",
      classname: "card bg-dark text-white shadow",
      classname2: "text-white-50 small",
    },
  ];

  const progressbar = [
    {
      id: "1",
      class: "progress-bar bg-danger",
      title: "Server Migration",
      percent: "20%",
      width: "20%",
    },
    {
      id: "2",
      class: "progress-bar bg-warning",
      title: "Sales Tracking",
      percent: "40%",
      width: "40%",
    },
    {
      id: "3",
      class: "progress-bar bg-primary",
      title: "Customer Database",
      percent: "60%",
      width: "60%",
    },
    {
      id: "4",
      class: "progress-bar bg-info",
      title: "Payout Details",
      percent: "80%",
      width: "80%",
    },
    {
      id: "5",
      class: "progress-bar bg-success",
      title: "Account Setup",
      percent: "Complete!",
      width: "100%",
    },
  ];
  const piebar = [
    {
      id: "1",
      icon: "fas fa-circle text-primary",
      text: "Direct",
    },
    {
      id: "2",
      icon: "fas fa-circle text-success",
      text: "Social",
    },
    {
      id: "3",
      icon: "fas fa-circle text-info",
      text: "Referral",
    },
  ];
  const alertDropDown = [
    {
      id: "1",
      date: "December 12, 2019",
      para: " A new monthly report is ready to download!",
      icon: "fas fa-file-alt text-white",
      class: "icon-circle bg-primary",
    },
    {
      id: "2",
      date: " December 7, 2019",
      para: " $290.29 has been deposited into your account!",
      icon: "fas fa-donate text-white",
      class: "icon-circle bg-success",
    },
    {
      id: "3",
      date: " December 2, 2019",
      para: "Spending Alert: We've noticed unusually high spending for your account.",
      icon: "fas fa-exclamation-triangle text-white",
      class: "icon-circle bg-warning",
    },
  ];
    
  return (
    <>
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <SbAdmin />
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Topbar --> */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              {/* <!-- Sidebar Toggle (Topbar) --> */}
              <button
                id="sidebarToggleTop"
                className="btn btn-link d-md-none rounded-circle mr-3"
              >
                <i className="fa fa-bars"></i>
              </button>

              {/* <!-- Topbar Search --> */}
              <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>

              {/* <!-- Topbar Navbar --> */}
              <ul className="navbar-nav ml-auto">
                {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                <li className="nav-item dropdown no-arrow d-sm-none">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="searchDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-search fa-fw"></i>
                  </a>
                  {/* <!-- Dropdown - Messages --> */}
                  <div
                    className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                    aria-labelledby="searchDropdown"
                  >
                    <form className="form-inline mr-auto w-100 navbar-search">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control bg-light border-0 small"
                          placeholder="Search for..."
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>

                {/* <!-- Nav Item - Alerts --> */}
                <li className="nav-item dropdown no-arrow mx-1">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="alertsDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-bell fa-fw"></i>
                    {/* <!-- Counter - Alerts --> */}
                    <span className="badge badge-danger badge-counter">3+</span>
                  </a>
                  {/* <!-- Dropdown - Alerts --> */}
                  <div 
                    className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="alertsDropdown"
                  >
                    <h6 className="dropdown-header">Alerts Center</h6>

                    {alertDropDown.map((item) => {
                      return (
                        <>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="/"
                          >
                            <div className="mr-3">
                              <div className={item.class}>
                                <i className={item.icon}></i>
                              </div>
                            </div>
                            <div>
                              <div className="small text-gray-500">
                                {item.date}
                              </div>
                              <span className="font-weight-bold">
                                {item.para}
                              </span>
                            </div>
                          </a>
                        </>
                      );
                    })}

                    
                    <a
                      className="dropdown-item text-center small text-gray-500"
                      href="/"
                    >
                      Show All Alerts
                    </a>
                  </div>
                </li>

                {/* <!-- Nav Item - Messages --> */}
                <li className="nav-item dropdown no-arrow mx-1">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="messagesDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-envelope fa-fw"></i>
                    {/* <!-- Counter - Messages --> */}
                    <span className="badge badge-danger badge-counter">7</span>
                  </a>
                  {/* <!-- Dropdown - Messages --> */}
                  <div
                    className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="messagesDropdown"
                  >
                    <h6 className="dropdown-header">Message Center</h6>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="/"
                    >
                      <div className="dropdown-list-image mr-3">
                        <img
                          className="rounded-circle"
                          src="img/undraw_profile_1.svg"
                          alt="..."
                        />
                        <div className="status-indicator bg-success"></div>
                      </div>
                      <div className="font-weight-bold">
                        <div className="text-truncate">
                          Hi there! I am wondering if you can help me with a
                          problem I've been having.
                        </div>
                        <div className="small text-gray-500">
                          Emily Fowler · 58m
                        </div>
                      </div>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="/"
                    >
                      <div className="dropdown-list-image mr-3">
                        <img
                          className="rounded-circle"
                          src="img/undraw_profile_2.svg"
                          alt="..."
                        />
                        <div className="status-indicator"></div>
                      </div>
                      <div>
                        <div className="text-truncate">
                          I have the photos that you ordered last month, how
                          would you like them sent to you?
                        </div>
                        <div className="small text-gray-500">Jae Chun · 1d</div>
                      </div>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="/"
                    >
                      <div className="dropdown-list-image mr-3">
                        <img
                          className="rounded-circle"
                          src="img/undraw_profile_3.svg"
                          alt="..."
                        />
                        <div className="status-indicator bg-warning"></div>
                      </div>
                      <div>
                        <div className="text-truncate">
                          Last month's report looks great, I am very happy with
                          the progress so far, keep up the good work!
                        </div>
                        <div className="small text-gray-500">
                          Morgan Alvarez · 2d
                        </div>
                      </div>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="/"
                    >
                      <div className="dropdown-list-image mr-3">
                        <img
                          className="rounded-circle"
                          src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                          alt="..."
                        />
                        <div className="status-indicator bg-success"></div>
                      </div>
                      <div>
                        <div className="text-truncate">
                          Am I a good boy? The reason I ask is because someone
                          told me that people say this to all dogs, even if they
                          aren't good...
                        </div>
                        <div className="small text-gray-500">
                          Chicken the Dog · 2w
                        </div>
                      </div>
                    </a>
                    <a
                      className="dropdown-item text-center small text-gray-500"
                      href="/"
                    >
                      Read More Messages
                    </a>
                  </div>
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>

                {/* <!-- Nav Item - User Information --> */}
                <li className="nav-item dropdown no-arrow">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                      Douglas McGee
                    </span>
                    <img
                      className="img-profile rounded-circle"
                      src="img/undraw_profile.svg"
                      alt=".."
                    />
                  </a>
                  {/* <!-- Dropdown - User Information --> */}
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                  >
                    <a className="dropdown-item" href="/">
                      <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                      Profile
                    </a>
                    <a className="dropdown-item" href="/">
                      <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                      Settings
                    </a>
                    <a className="dropdown-item" href="/">
                      <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                      Activity Log
                    </a>
                    <div className="dropdown-divider"></div>
                    <a
                      className="dropdown-item"
                      href="/"
                      data-toggle="modal"
                      data-target="#logoutModal"
                    >
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
              {/* <!-- Page Heading --> */}
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

              {/* <!-- Content Row --> */}
              <DashBoardCard />

              {/* <!-- Content Row --> */}

              <div className="row">
                {/* <!-- Area Chart --> */}
                <div className="col-xl-8 col-lg-7">
                  <div className="card shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Earnings Overview
                      </h6>
                      <div className="dropdown no-arrow">
                        <a
                          className="dropdown-toggle"
                          href="/"
                          role="button"
                          id="dropdownMenuLink"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div
                          //   className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                          className="dropdown-menu dropdown-menu-right shadow wow fadeIn"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <div className="dropdown-header">
                            Dropdown Header:
                          </div>
                          <a className="dropdown-item" href="/">
                            Action
                          </a>
                          <a className="dropdown-item" href="/">
                            Another action
                          </a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="/">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Card Body --> */}
                    <div className="card-body">
                      <div className="chart-area">
                        <canvas id="myAreaChart"></canvas>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Pie Chart --> */}
                <div className="col-xl-4 col-lg-5">
                  <div className="card shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Revenue Sources
                      </h6>
                      <div className="dropdown no-arrow">
                        <a
                          className="dropdown-toggle"
                          href="/"
                          role="button"
                          id="dropdownMenuLink"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <div className="dropdown-header">
                            Dropdown Header:
                          </div>
                          <a className="dropdown-item" href="/">
                            Action
                          </a>
                          <a className="dropdown-item" href="/">
                            Another action
                          </a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="/">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Card Body --> */}
                    <div className="card-body">
                      <div className="chart-pie pt-4 pb-2">
                        <canvas id="myPieChart"></canvas>
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
              </div>

              {/* <!-- Content Row --> */}
              <div className="row">
                <div className="col-lg-6 mb-4">
                  {/* <!-- Project Card Example --> */}
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Projects
                      </h6>
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
            </div>
          </div>

          {/* <!-- Footer --> */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Your Website 2021</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
