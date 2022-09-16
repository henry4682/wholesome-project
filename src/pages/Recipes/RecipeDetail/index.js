import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  BsSearch,
  BsFillPersonFill,
} from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import '../styles/RecipesDetail.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProgressBar from '@ramonak/react-progress-bar';
import Rating from '@mui/material/Rating';

function RecipeDetail() {
  const [introData, setIntroData] = useState([]);
  const [ingData, setIngData] = useState([]);
  const [stepsData, setStepsData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const [starInfo, setStarInfo] = useState([]);
  const [gradeInfo, setGradeInfo] = useState([]);

  const { recipeId } = useParams();

  useEffect(() => {
    let getRecipe = async () => {
      let response = await axios.get(
        `http://localhost:3002/api/1.0/recipeDetail/${recipeId}`
      );
      setIntroData(response.data.introData);
      setIngData(response.data.ingData);
      setStepsData(response.data.stepsData);
      setCommentData(response.data.commentData);
      setStarInfo(response.data.starInfo);
      setGradeInfo(response.data.gradeInfo);
    };
    getRecipe();
  }, []);

  return (
    <>
      <div className="container recipe-detail-container row">
        <div className="main col-12 col-md-8 col-lg-8 ">
          {introData.map((intro) => {
            return (
              <div>
                <div className="recipe-title ">
                  <h1>{intro.title}</h1>
                  <h4>{intro.intro}</h4>
                  <div className="recipe-info d-flex">
                    <BiTimeFive />
                    <p>2020-10-25</p>
                  </div>
                </div>
                <div className="recipe-image mt-5">
                  <img
                    src={require(`../Asset/recipe-image/${intro.main_img}`)}
                  ></img>
                  <button type="button" class="btn btn-outline-secondary">
                    收藏
                  </button>
                </div>
              </div>
            );
          })}

          <div className="recipe-ingredient mt-5">
            <h3>食材</h3>
            <hr />
            <div className="ingredient-group">
              {ingData.map((ing) => {
                return (
                  <div
                    key={ing.id}
                    className="ingredient d-flex justify-content-between"
                  >
                    <div className="ingredient-name">{ing.ingredient}</div>
                    <div className="ingredient-unit">{ing.unit}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="recipe-steps mt-5">
            <h3>步驟</h3>
            <hr />
            {stepsData.map((steps) => {
              return (
                <div key={steps.id} className="recipe-step d-flex row">
                  <div className="recipe-step-image col-12 col-md-4">
                    <img
                      src={require(`../Asset/recipe-image/${steps.step_img}`)}
                    ></img>
                  </div>
                  <div className="recipe-step-text col-12 col-md-8">
                    {steps.step_content}
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
          <div className="recipe-review mt-5">
            <div className="starInfo">
              <div className="review-title d-flex justify-content-between">
                <h3>食譜評論</h3>
                <div className="number">共 {starInfo.total} 則</div>
              </div>
              <hr />
              <div className="product_detail-average-score-box">
                <div className="product_detail-average-score">
                  {starInfo.gradeAverage}
                </div>
                {/* TODO: fix  */}
                <div className="product_detail-stars">
                  <Rating
                    name="half-rating-read"
                    value={starInfo.gradeAverage}
                    precision={0.5}
                    readOnly
                  />
                </div>
              </div>

              <div className="product_detail-score-bar">
                <div className="product_detail-score-text">評價分佈顯示</div>
                {gradeInfo.map((v, i) => {
                  return (
                    <div className="product_detail-star-bar">
                      <p>
                        {i + 1}顆星({v.gradeCount})
                      </p>

                      <span className="product_detail-bar-section">
                        <ProgressBar
                          completed={v.gradePercent}
                          customLabel={v.gradePercent + '%'}
                          className="wrapper"
                          bgColor={'#9AAB82'}
                          baseBgColor={'#D9D9D9'}
                          borderRadius="0px"
                          labelAlignment="left"
                          labelSize="11px"
                        />
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            {commentData.map((comment) => {
              return (
                <div className="review d-flex row">
                  <div className="review-left col-md-2">
                    <BsFillPersonFill size={100} color="#9aab82" />
                  </div>
                  <div className="review-right col-md-10">
                    <div className="review-name">{comment.name}</div>
                    <div className="review-content">{comment.comment}</div>
                    <div className="review-info d-flex justify-content-between">
                      <div className="review-date">{comment.create_date}</div>
                      <div className="review-stars">
                        <Rating
                          name="half-rating-read"
                          value={comment.grade}
                          precision={0.1}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>

        <div className="recipe-sidebar col-0 col-md-4 col-lg-4 ">
          <div className="recipe-category">
            <h3>所有食譜主題</h3>
            <hr />
            <ul>
              <li>
                <Link to="/recipes/飲品">飲品</Link>
              </li>
              <li>
                <Link to="/recipes/烘焙">烘焙</Link>
              </li>
              <li>
                <Link to="/recipes/輕食">輕食</Link>
              </li>
            </ul>
          </div>
          <div className="recipe-search">
            <h3>搜尋食譜</h3>
            <hr />
            <form class="d-flex searchbar" role="search">
              <input
                class="me-2 form-control recipe-form-control"
                type="search"
                placeholder="搜尋食譜"
                aria-label="Search"
              />
              <button class="btn" type="submit">
                <BsSearch />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeDetail;
