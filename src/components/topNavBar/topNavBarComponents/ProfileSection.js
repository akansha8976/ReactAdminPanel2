import { useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Loading from "../../Loading";
function NavbarDarkExample() {
  const [loading, setLoading] = useState(false);
  const handleImageLoad = () => {
    setLoading(false);
  };
  return (
    <NavDropdown
      title={
        <div>
          <span className="mr-2 d-none d-lg-inline text-gray-600 small ">
            Douglas McGee
          </span>
          {loading && <Loading />}
          <img
            className={`img-profile rounded-circle me-2 ${
              loading ? "d-none" : ""
            }`}
            src="img/undraw_profile.svg"
            alt=".."
            onLoad={handleImageLoad}
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
