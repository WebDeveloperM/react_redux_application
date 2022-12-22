import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../constants";
function Navbar(props) {
  return (
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-2">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="logo_image" />
      </Link>

      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link class="me-3 py-2 text-dark text-decoration-none" to={"/login"}>
          Sign In
        </Link>
        <Link class="me-3 py-2 text-dark text-decoration-none" to={"/register"}>
          Sign Up
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
