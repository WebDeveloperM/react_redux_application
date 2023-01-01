import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../constants";
import { useSelector } from "react-redux";
function Navbar(props) {
  const { loggidIn, user } = useSelector((state) => state.auth);
  return (
    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-2">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="logo_image" />
      </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        {loggidIn ? (
          <>
            <p className="me-3 py-2 text-dark text-decoration-none">
              {user.username}
            </p>
            <button className="btn btn-link">Sign Out</button>

          </>
        ) : (
          <>
            <Link
              className="me-3 py-2 text-dark text-decoration-none"
              to={"/login"}
            >
              Sign In
            </Link>
            <Link
              className="me-3 py-2 text-dark text-decoration-none"
              to={"/register"}
            >
              Sign Up
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
