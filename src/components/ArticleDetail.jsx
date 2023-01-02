import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {} from "../service/article";
import AuthService from "../service/article";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticleDetailStart,
  getArticleDetailSuccess,
  getArticleDetailFailure,
} from "../slice/article";

function ArticleDetail(props) {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const getArticleDetail = async () => {
    dispatch(getArticleDetailStart());
    try {
      const response = await AuthService.getArticleDetail(slug);
      dispatch(getArticleDetailSuccess(response.article));
      return response;
    } catch (error) {
      dispatch(getArticleDetailFailure(error));
    }
  };

  useEffect(() => {
    getArticleDetail();
  }, [slug]);

  return (
    <div>
      {/* {response.article.title} */}
      {slug}
    </div>
  );
}

export default ArticleDetail;
