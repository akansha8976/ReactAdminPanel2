import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarDarkExample() {
  return (
    <NavDropdown
      title={
        <div>
          <span className="mr-2 d-none d-lg-inline text-gray-600 small ">
            Douglas McGee
          </span>
          <img
            className="img-profile rounded-circle me-2"
            src="img/undraw_profile.svg"
            alt=".."
          />
        </div>
      }
      id="collasible-nav-dropdown"
    >
      <NavDropdown.Item href="#action/3.1">
        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
        Profile
      </NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">
        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
        Settings
      </NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">
        {" "}
        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
        Activity Log
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">
        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
        Logout
      </NavDropdown.Item>
    </NavDropdown>
  );
}

export default NavbarDarkExample;

// import React, { useState, useEffect } from "react";

// function ProfileSection() {
//   const [openProfile, setOpenProfile] = useState(false);

//   const profileToggleOpen = () => setOpenProfile(!openProfile);

//   const profileMenuClass = `dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in${
//     openProfile ? " show" : ""
//   }`;
//   useEffect(() => {
//     let handler = () => {
//       setOpenProfile(false);
//     };

//     document.addEventListener("mousedown", handler);
//   });
//   return (
//     <>
//       <li className="nav-item dropdown no-arrow" onClick={profileToggleOpen}>
//         <a
//           className="nav-link dropdown-toggle"
//           id="userDropdown"
//           role="button"
//           data-toggle="dropdown"
//           aria-haspopup="true"
//           aria-expanded="false"
//         >
//           <span className="mr-2 d-none d-lg-inline text-gray-600 small">
//             Douglas McGee
//           </span>
//           <img
//             className="img-profile rounded-circle"
//             src="img/undraw_profile.svg"
//             alt=".."
//           />
//         </a>
//         {/* <!-- Dropdown - User Information --> */}
//         <div
//           className={profileMenuClass}
//           // className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
//           aria-labelledby="userDropdown"
//         >
//           <a className="dropdown-item">
//             <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
//             Profile
//           </a>
//           <a className="dropdown-item">
//             <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
//             Settings
//           </a>
//           <a className="dropdown-item">
//             <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
//             Activity Log
//           </a>
//           <div className="dropdown-divider"></div>
//           <a
//             className="dropdown-item"
//             data-toggle="modal"
//             data-target="#logoutModal"
//           >
//             <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
//             Logout
//           </a>
//         </div>
//       </li>
//     </>
//   );
// }

// export default ProfileSection;
