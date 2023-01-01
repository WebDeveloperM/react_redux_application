import React, { useEffect, useState } from "react";
import { logo } from "../constants";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { singUserStart, singUserSuccess, singUserFailure } from "../slice/auth";
import AuthService from "../service/auth";
import { ValidationError } from "./";
import { useNavigate } from "react-router-dom";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading, loggidIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const authorHandler = async (e) => {
    e.preventDefault();
    dispatch(singUserStart());
    const user = { username: name, email, password };
    try {
      const response = await AuthService.userRegister(user);
      dispatch(singUserSuccess(response.user));
      navigate("/");
    } catch (error) {
      dispatch(singUserFailure(error.response.data.errors));
      console.log(error);
    }
  };

  useEffect(() => {
    if (loggidIn) {
      navigate("/");
    }
  }, [loggidIn]);

  return (
    <body className="text-center">
      <main className="form-signin">
        <form className="m-auto w-25">
          <img className="my-2" src={logo} alt="" width="100" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
          <ValidationError />
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
