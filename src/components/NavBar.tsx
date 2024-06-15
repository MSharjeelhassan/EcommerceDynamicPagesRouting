import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div
        style={{ backgroundColor: "#f3efe9", fontSize: "14px" }}
        className="d-flex justify-content-center align-items-center py-2"
      >
        Same Day Delivery
      </div>
      <Box className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/home">
              Viktoria & Woods
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item mx-3">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/home"
                  >
                    HOME
                  </NavLink>
                </li>
                <li className="nav-item mx-3">
                  <NavLink className="nav-link" to="/product">
                    DISCOVER
                  </NavLink>
                </li>
                <li className="nav-item mx-3">
                  <NavLink className="nav-link" to="/about">
                    ABOUT US
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to={""} className="nav-link" aria-disabled="true">
                    Disabled
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Box>
    </>
  );
}

export default NavBar;
