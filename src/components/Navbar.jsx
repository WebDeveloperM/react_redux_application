import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../constants";
import { useSelector } from "react-redux";
import { removeItem } from "../helpers/persistence-storage";
import { useDispatch } from "react-redux";
import { logoutUser } from "../slice/auth";
function Navbar(props) {
  const { loggidIn, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    try {
      dispatch(logoutUser());
      removeItem("Token");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-2">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="logo_image" />
      </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 mt-3 ms-md-auto">
        {loggidIn ? (
          <>
            <button className="btn btn-link">
              {user.username}
            </button>
            <Link
              className="btn btn-link"
              to={"/create-article"}
            >
              Create Post
            </Link>
            <button className="btn btn-link" onClick={logoutHandler}>
              Sign Out
            </button>
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
