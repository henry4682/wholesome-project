import React from 'react';
import '../styles/recipes.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import RecipeNavbar from '../component/RecipeNavbar';
import { BsSearch } from 'react-icons/bs';
import _ from 'lodash'

function RecipesList() {
  const [data, setData] = useState([]);
  const [dataAll, setDataAll] = useState([]);
  const { category } = useParams();

  //總共有lastPage這麼多頁
  const [lastPage, setLastPage] = useState(1);
  //目前所在頁數
  const [page, setPage] = useState(1);

  useEffect(() => {
    let getRecipes = async () => {
      console.log('category  fe', category);
      let response = await axios.get(
        `http://localhost:3002/api/1.0/recipes/${category}?page=${page}`
      );
      setData(response.data.data);
      setDataAll(response.data.dataAll);
      setLastPage(response.data.pagination.lastPage);
      console.log(data);
    };
    getRecipes();
  }, [category, page]);
  // 後端分頁
  const getPages = () => {
    let pages = [];
    if (page != 1) {
      pages.push(
        <li class="page-item">
          <a
            class="page-link"
            onClick={() => {
              setPage(Number(page) - 1);
            }}
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>

          {/* <Link
            className="page-link"
            to={{
              search: '?p=' + prevPage,
            }}
          >
            <span aria-hidden="true">&laquo;</span>
          </Link> */}
        </li>
      );
    }

    for (let i = 1; i <= lastPage; i++) {
      pages.push(
        <li class="page-item" key={i}>
          <a
            class="page-link"
            onClick={() => {
              setPage(i);
            }}
          >
            {i}
          </a>
          {/* <Link
            className="page-link"
            to={{
              search: '?p=' + i,
            }}
          >
            {i}
          </Link> */}
        </li>
      );
    }
    if (page !== lastPage) {
      pages.push(
        <li
          class="page-item"
          onClick={() => {
            setPage(Number(page) + 1);
          }}
        >
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
          {/* <Link
            className="page-link"
            to={{
              search: '?p=' + nextPage,
            }}
          >
            <span aria-hidden="true">&laquo;</span>
          </Link> */}
        </li>
      );
    }

    return pages;
  };
 

  // 搜尋功能
  const [searchTerm, setSearchTerm] = useState('');
  if (searchTerm !== '') {
    return (
      <>
        <RecipeNavbar />
        <div className="recipe-list">
          <div className="container">
            <div className="row">
              <div className="recipe-title d-flex justify-content-between py-3">
                <h1>"{searchTerm}"的搜尋結果</h1>
                <div>
                  <h6 className="d-inline-flex">共10篇食譜</h6>
                  <h6 className="d-inline-flex"> | </h6>
                  <form
                    class="d-inline-flex ms-3 d-flex searchbar"
                    role="search"
                  >
                    <input
                      class="me-2 form-control recipe-form-control"
                      type="search"
                      placeholder="搜尋食譜"
                      aria-label="Search"
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                      }}
                    />
                    <button class="btn" type="submit">
                      <BsSearch />
                    </button>
                  </form>
                </div>
              </div>

              {dataAll
                .filter((v) => {
                  if (v.title.includes(searchTerm)) {
                    return v;
                  }
                })
                .map((recipe) => {
                  return (
                    <div
                      key={recipe.id}
                      className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
                    >
                      <div className="recipe-card ">
                        <div className="recipe_img">
                          <img
                            src={require(`../Asset/recipe-image/${recipe.main_img}`)}
                          ></img>
                        </div>
                        <div className="recipe-card-body">
                          <div className="recipe_date">
                            {recipe.create_time}
                          </div>
                          <div className="recipe_title">
                            <h4>
                              <Link
                                className="recipe-card-title"
                                to={`/recipeDetail/${recipe.recipe_id}`}
                              >
                                {recipe.title}
                              </Link>
                            </h4>
                          </div>
                          <div className="recipe_content text-truncate">
                            {recipe.intro}
                          </div>
                          <div className="recipe-readmore">
                            <Link to="/recipes/recipeDetail/123">
                              閱讀更多
                              <FaLongArrowAltRight />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <RecipeNavbar />
      <div className="recipe-list">
        <div className="container">
          <div className="row">
            <div className="recipe-title d-flex justify-content-between py-3">
              <h1>{category}</h1>
              <div>
                <h6 className="d-inline-flex">共10篇食譜</h6>
                <h6 className="d-inline-flex"> | </h6>
                <h6 className="d-inline-flex">依更新時間排序</h6>
                <form class="d-inline-flex ms-3 d-flex searchbar" role="search">
                  <input
                    class="me-2 form-control recipe-form-control"
                    type="search"
                    placeholder="搜尋食譜"
                    aria-label="Search"
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                    }}
                  />
                  <button class="btn" type="submit">
                    <BsSearch />
                  </button>
                </form>
              </div>
            </div>

            {data.map((recipe) => {
              return (
                <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                  <div className="recipe-card ">
                    <div className="recipe_img">
                      <img
                        src={require(`../Asset/recipe-image/${recipe.main_img}`)}
                      ></img>
                    </div>
                    <div className="recipe-card-body">
                      <div className="recipe_date">{recipe.create_time}</div>
                      <div className="recipe_title">
                        <h4>
                          <Link
                            className="recipe-card-title"
                            to={`/recipeDetail/${recipe.recipe_id}`}
                          >
                            {recipe.title}
                          </Link>
                        </h4>
                      </div>
                      <div className="recipe_content text-truncate">
                        {recipe.intro}
                      </div>
                      <div className="recipe-readmore">
                        <Link to="/recipes/recipeDetail/123">
                          閱讀更多
                          <FaLongArrowAltRight />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <nav aria-label="Page navigation ">
              <ul class="pagination recipe-pagination">{getPages()}</ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipesList;
