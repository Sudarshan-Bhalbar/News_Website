import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navlinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#020202" : "#8C8989",
      fontSize : isActive ? "30px" : "23px",
    };
  };
  const homelinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#FFFFFF" : "#8C8989",
      fontSize : isActive ? "30px" : "23px",

    };
  };

  return (
    <>
      <section>
        <nav className="container-fluid">
          <div className="container py-4 mt-3 px-0 fs-4">
            <NavLink
              className="navbar-brand   me-3"
              style={homelinkStyles}
              to="/"
            >
              Home
            </NavLink>
            
            <NavLink
              className="navbar-brand   mx-3"
              style={navlinkStyles}
              to="/search"
            >
              Search
            </NavLink>
            
            <NavLink
              className="navbar-brand   mx-3"
              style={navlinkStyles}
              to="/electrical"
            >
              Electrical
            </NavLink>
            
            <NavLink
              className="navbar-brand  mx-3"
              style={navlinkStyles}
              to="/it"
            >
              Information Technology
            </NavLink>
            <NavLink
              className="navbar-brand  mx-3"
              style={navlinkStyles}
              to="/mechanical"
            >
              Mechanical
            </NavLink>
            <NavLink
              className="navbar-brand  mx-3"
              style={navlinkStyles}
              to="/hm"
            >
              Hotel Management
            </NavLink>
            <NavLink
              className="navbar-brand  mx-3"
              style={navlinkStyles}
              to="/medical"
            >
              Medical
            </NavLink>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
