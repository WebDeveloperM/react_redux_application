import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logo } from "../constants";
import { Input } from "../ui";
import { singUserStart, singUserFailure, singUserSuccess } from "../slice/auth";
import AuthService from "../service/auth";
import { ValidationError } from "./";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(singUserStart());
    const user = { email, password };
    try {
      const response = await AuthService.userLogin(user);
      dispatch(singUserSuccess(response.user));
    } catch (error) {
      dispatch(singUserFailure(error.response.data.errors));
    } 
  };
  return (
    <body className="text-center">
      <main className="form-signin">
        <form className="w-25 m-auto">
          <img className="my-2" src={logo} alt="" width="100" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <ValidationError />
          <Input label={"Email addres"} state={email} setState={setEmail} />
          <Input
            label={"Password"}
            type={"password"}
            state={password}
            setState={setPassword}
          />

          <button
            className="w-100 btn btn-lg btn-primary my-2"
            disabled={isLoading}
            type="submit"
            onClick={loginHandler}
          >
            {isLoading ? "Loading..." : "Sign In"}
          </button>
        </form>
      </main>
    </body>
  );
}

export default Login;
