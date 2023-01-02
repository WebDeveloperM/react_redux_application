import { Routes, Route } from "react-router-dom";
import { Main, Register, Login, Navbar } from "./components";
import AuthService from "./service/auth";
import { useEffect } from "react";
import { singUserSuccess } from "./slice/auth";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "./helpers/persistence-storage";
import ArticleService from "./service/article";
import {getArticleSuccess, getArticleStart, getArticleFailure} from './slice/article'
function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.article);
  const getUser = async () => {
    try {
      const response = await AuthService.getUser();
      dispatch(singUserSuccess(response.user));
    } catch (error) {
      console.log(error);
    }
  };

  const getArticles = async () => {
    dispatch(getArticleStart())
    try {
      const response = await ArticleService.getArticles()
      console.log(response);
      dispatch(getArticleSuccess(response.articles))
    } catch (error) {
      dispatch(getArticleFailure(error))
    }
  };

  useEffect(() => {
    const token = getItem("Token");
    if (token) {
      getUser();
    }
    getArticles();
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
