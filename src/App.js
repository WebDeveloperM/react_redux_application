import { Routes, Route } from "react-router-dom";
import { Main, Register, Login, Navbar } from "./components";
import AuthService from "./service/auth";
import { useEffect } from "react";
import { singUserSuccess } from "./slice/auth";
import { useDispatch } from "react-redux";
import { getItem } from "./helpers/persistence-storage";

function App() {
  const dispatch = useDispatch();
  const getUser = async () => {
    try {
      const response = await AuthService.getUser();
      dispatch(singUserSuccess(response.user));
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    const token = getItem("Token");
    if (token) {
      getUser();
    }
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
