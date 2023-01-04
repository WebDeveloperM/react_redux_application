import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleService from "../service/article";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../ui";
import {
  getArticleDetailStart,
  getArticleDetailSuccess,
  getArticleDetailFailure,
} from "../slice/article";
import moment from "moment";

function ArticleDetail(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { articleDetail, isLoading } = useSelector((state) => state.article);
  useEffect(() => {
    const getArticleDetail = async () => {
      dispatch(getArticleDetailStart());
      try {
        const response = await ArticleService.getArticleDetail(id);
        dispatch(getArticleDetailSuccess(response.article));
        return response;
      } catch (error) {
        dispatch(getArticleDetailFailure());
      }
    };

    getArticleDetail();
  }, [id]);

  return isLoading ? ( <Loader/>) : (
    articleDetail !== null && (
      <div>
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">{articleDetail.title}</h1>
          <p className="col-md-8 fs-4">{articleDetail.body}</p>
          <div className="d-flex gap-3">
            <p>
            
              <span className="fw-bold">Created at: </span>
              {moment(articleDetail.createdAt).format("DD, MMM, YYYY")}
            </p>
            <p>
            
              <span className="fw-bold">Updated at: </span>
              {moment(articleDetail.updatedAt).format("DD, MMM, YYYY")}
            </p>
          </div>
          <p>
        
            <span className="fw-bold">Author: </span>
            {articleDetail.author.username}
          </p>
          <p></p>
        </div>
      </div>
    )
  );
}

export default ArticleDetail;
