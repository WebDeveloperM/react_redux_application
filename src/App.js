import { Routes, Route } from "react-router-dom";
import {
  Main,
  Register,
  Login,
  Navbar,
  ArticleDetail,
  CreateArticle,
} from "./components";
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
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/create-article" element={<CreateArticle />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
