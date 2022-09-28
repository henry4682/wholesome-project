import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BsSearch, BsFillPersonFill } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import '../styles/RecipesDetail.scss';
import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ProgressBar from '@ramonak/react-progress-bar';
import Rating from '@mui/material/Rating';
import { useAuth } from '../../../context/auth';
import { useCart } from '../../../context/cart';
import { FaHeart } from 'react-icons/fa';
import {
  successToastAlert,
  warningAlert,
  warningToastAlert,
  errorToastAlert,
} from '../../../components/Alert';

function RecipeDetail() {
  const { cart, setCart } = useCart();

  const [introData, setIntroData] = useState([]);
  const [ingData, setIngData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [stepsData, setStepsData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const [starInfo, setStarInfo] = useState({ gradeAverage: 0 });
  const [gradeInfo, setGradeInfo] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isSearch, setIsSearch] = useState(false);

  const { recipeId } = useParams();

  const [reviewStar, setReviewStar] = useState(0);
  const [review, setReview] = useState('');

  const { user } = useAuth();

  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    if (!user || user.id === '0') {
      setIsLike(false);
      return;
    }
    let likeRecipe = async () => {
      let response = await axios.get(
        `http://localhost:3002/api/1.0/recipeTracking/${recipeId}/${user.id}`,
        {
          withCredentials: true,
        }
      );
      setIsLike(response.data);
    };
    likeRecipe();
  }, [user]);

  useEffect(() => {
    if (!user || user.id === '0') {
      setIsLike(false);
      return;
    }
    let setLikeRecipe = async () => {
      try {
        let result = await axios.post(
          `http://localhost:3002/api/1.0/recipeTracking/${recipeId}`,
          { isLike, user },
          {
            withCredential: true,
          }
        );
        console.log(result.data);
      } catch (e) {
        console.error('review', e.response.data.message);
        alert(e.response.data.message);
      }
    };
    setLikeRecipe();
  }, [isLike]);

  useEffect(() => {
    let getRecipe = async () => {
      let response = await axios.get(
        `http://localhost:3002/api/1.0/recipeDetail/${recipeId}`
      );
      setIntroData(response.data.introData);
      setIngData(response.data.ingData);
      setProductData(response.data.productData);
      setStepsData(response.data.stepsData);
      setCommentData(response.data.commentData);
      setStarInfo(response.data.starInfo);
      setGradeInfo(response.data.gradeInfo);
    };
    getRecipe();
  }, [recipeId]);
  console.log('productData', productData);

  if (isSearch) {
    return <Navigate to={`/recipes/飲品?search=${searchTerm}`} />;
  }

  async function handleSubmit(e) {
    // 關掉submit按鈕的預設行為(跳頁)
    e.preventDefault();
    //表單傳送用post
    try {
      let result = await axios.post(
        `http://localhost:3002/api/1.0/recipeReview/${recipeId}`,
        { reviewStar, review, user },
        {
          withCredential: true,
        }
      );
      console.log(result.data);
      let response = await axios.get(
        `http://localhost:3002/api/1.0/recipeDetail/${recipeId}`
      );
      console.log(response.data);
      setCommentData(response.data.commentData);
      setStarInfo(response.data.starInfo);
      setGradeInfo(response.data.gradeInfo);
      successToastAlert('新增評論成功!', 1200, false);
      setReviewStar(0);
      setReview('');
    } catch (e) {
      console.error('review', e.response.data);
      errorToastAlert(e.response.data.message, 1200, false);
    }
  }

  return (
    <>
      <div className="container recipe-detail-container row">
        <div className="main col-12 col-md-8 col-lg-8 ">
          {introData.map((intro) => {
            return (
              <div key={intro.id}>
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
                </div>
                <button
                  type="button"
                  className="btn btn-secondary  mt-5"
                  onClick={() => {
                    if (!user || user.id === '0') {
                      errorToastAlert('請登入後再收藏', 1200, false);
                      return;
                    }
                    

                    setIsLike(!isLike);
                    if (!isLike === true) {
                      successToastAlert('食譜收藏成功', 1200, false);
                    } else {
                      successToastAlert('取消收藏成功', 1200, false);
                    }
                  }}
                >
                  <FaHeart
                    className={
                      isLike ? 'product_detail-heart' : 'product_detail-empty'
                    }
                  />
                  {isLike ? '移除收藏' : '加入收藏'}
                </button>
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
          <div className="recipe-product ">
            {productData.length === 0 ? (
              <></>
            ) : (
              <>
                <h3>推薦商品</h3>
                <hr />
              </>
            )}

            <div className="recipe-recommend-display">
              {productData.map((product) => {
                return (
                  <div key={product.id}>
                    <div className="card recipe-recommend-card ">
                      <img
                        src={require(`../../../Assets/products/${product.image}`)}
                        className="card-img-top products_list-card-img-top"
                        alt="..."
                      />

                      <div className=" card-body products_list-card-body text-center">
                        <Link
                          className=" card-title products_list-card-title word-wrap "
                          to={`/productDetail/${product.product_id}`}
                        >
                          <div className="text-truncate">{product.name}</div>
                        </Link>
                        <p className="card-text products_list-card-text">
                          NT${product.price}
                        </p>

                        <button
                          className="account_tracking_btn mb-1 btn btn-sm btn-primary text-white mt-2"
                          onClick={() => {
                            // --- (1) 判斷是否登入
                            if (!user || user.id === '0') {
                              warningAlert('您尚未登入', '請先登入再進行購買');
                              return;
                            }
                            // --- 判斷購物車裡面是不是有這個商品
                            if (cart.some((v) => v.id === product.id)) {
                              warningToastAlert(
                                '商品已存在於購物車',
                                1200,
                                false
                              );
                              return;
                            }
                            // item是指現在加入購物車的這個商品
                            let item = {
                              id: product.id,
                              amount: 1,
                              name: product.name,
                              price: product.price,
                              image: product.image,
                            };
                            setCart([...cart, item]);
                            successToastAlert(
                              '商品加入購物車成功',
                              1200,
                              false
                            );
                          }}
                        >
                          加入購物車
                        </button>
                      </div>
                    </div>
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
                    <div key={v.id} className="product_detail-star-bar">
                      <p>
                        {5 - i}顆星({v.gradeCount})
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
                <div key={comment.id} className="review d-flex row">
                  <div className="review-left col-md-2">
                    <BsFillPersonFill size={100} color="#9aab82" />
                  </div>
                  <div className="review-right col-md-10">
                    <div className="review-name">{comment.user_name}</div>
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
            {user && user.id !== '0' && (
              <div className="review-write mt-5">
                <h3>撰寫評論</h3>
                <hr />
                <form>
                  <Rating
                    name="simple-controlled"
                    value={reviewStar}
                    onChange={(event, newValue) => {
                      setReviewStar(newValue);
                    }}
                  />
                  <div className="form-group">
                    <label
                      for="exampleFormControlTextarea1"
                      className="mt-3 mb-3"
                    >
                      評論內容
                    </label>
                    <textarea
                      className="form-control mb-3"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      value={review}
                      onChange={(e) => {
                        setReview(e.target.value);
                      }}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    送出
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        <div className="recipe-sidebar col-0 col-md-4 col-lg-4 ">
          <div className="recipe-category">
            <h3>所有食譜主題</h3>
            <hr />
            <ul>
              <li>
                <Link to="/recipes/飲品?search">飲品</Link>
              </li>
              <li>
                <Link to="/recipes/烘焙?search">烘焙</Link>
              </li>
              <li>
                <Link to="/recipes/輕食?search">輕食</Link>
              </li>
            </ul>
          </div>
          <div className="recipe-search">
            <h3>搜尋食譜</h3>
            <hr />
            <form className="d-flex searchbar" role="search">
              <input
                className="me-2 form-control recipe-form-control"
                type="search"
                placeholder="搜尋食譜"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
              <button
                className="btn"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  setIsSearch(true);
                }}
              >
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
