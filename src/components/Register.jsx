import React, { useState } from "react";
import { logo } from "../constants";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUserStart,
  registerUserSuccess,
  registerUserFailure,
} from "../slice/auth";
import  AuthService  from "../service/auth";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const authorHandler = async (e) => {
    e.preventDefault();
    dispatch(registerUserStart());
    const user = { username: name, email, password };
    try {
      const response = await AuthService.userRegister(user);
      console.log(response);
      console.log(user);
      dispatch(registerUserSuccess());
    } catch (error) {}
    dispatch(registerUserFailure());
  };
  return (
    <body className="text-center">
      <main className="form-signin">
        <form className="w-25 m-auto">
          <img className="my-2" src={logo} alt="" width="100" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

          <Input label={"Username"} state={name} setState={setName} />
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
            onClick={authorHandler}
          >
            {isLoading ? "Loading..." : "Sign Up"}
          </button>
        </form>
      </main>
    </body>
  );
}

export default Register;
