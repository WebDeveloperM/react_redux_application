import React, { useState } from "react";
import { logo } from "../constants/index";
import { ArticelForm } from "./";
import ArticleService from "../service/article";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  postArticleFailure,
  postArticleStart,
  postArticleSuccess,
} from "../slice/article";

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formSubmit = async (e) => {
    e.preventDefault();
    const article = { title, description, body };
    dispatch(postArticleStart());
    try {
      await ArticleService.postArticle(article);
      dispatch(postArticleSuccess());
      navigate("/");
    } catch (error) {
      dispatch(postArticleFailure());
    }
  };
  const formProps = {
    title,
    setTitle,
    description,
    setDescription,
    body,
    setBody,
    formSubmit,
  };
  return (
    <div>
      <div className="py-3 text-center">
        <img
          className="d-block mx-auto mb-4"
          src={logo}
          alt=""
          width="72"
          height="57"
        />
        <h2>Create Article</h2>
      </div>
      <div className="w-75 mx-auto">
        <ArticelForm {...formProps} />
      </div>
    </div>
  );
}

export default CreateArticle;
