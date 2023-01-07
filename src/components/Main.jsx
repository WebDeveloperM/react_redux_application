import React, { useEffect } from "react";
import { Loader } from "../ui";
import { useNavigate } from "react-router-dom";
import ArticleService from "../service/article";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticleSuccess,
  getArticleStart,
  getArticleFailure,
} from "../slice/article";

function Main(props) {
  const { articles, isLoading } = useSelector((state) => state.article);
  const { loggidIn, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getArticles = async () => {
    dispatch(getArticleStart());
    try {
      const response = await ArticleService.getArticles();
      dispatch(getArticleSuccess(response.articles));
    } catch (error) {
      dispatch(getArticleFailure(error));
    }
  };

  const deleteArticele = async (slug) => {
    try {
      await ArticleService.deleteArticle(slug);
      getArticles()
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {articles.map((item) => (
          <div className="col" key={item.id}>
            <div className="card h-100 shadow-sm">
              <svg
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title className="fw-bold m-0">{item.title}</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
              </svg>

              <div className="card-body">
                <p className="card-text fw-bold m-0">{item.title}</p>
                <p className="card-text">{item.description}</p>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-success"
                    onClick={() => {
                      navigate(`/articles/${item.slug}`);
                    }}
                  >
                    View
                  </button>
                  {loggidIn && user.username === item.author.username && (
                    <>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                        onClick={()=>deleteArticele(item.slug)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
                <small className="text-muted fw-bold text-capitalize">
                  {item.author.username}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Main;
