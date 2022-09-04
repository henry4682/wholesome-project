import { useState, useEffect } from 'react';
import Collapse from 'bootstrap/js/dist/collapse';
import { Link } from 'react-router-dom';

function Aside() {
  useEffect(() => {
    const collapseElementList = document.querySelectorAll('.collapse');
    const collapseList = [...collapseElementList].map(
      (collapseEl) => new Collapse(collapseEl)
    );
  }, []);
  return (
    <>
      <div class="accordion " id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              植物奶
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div>
              <ul class="list-group">
                <li class="list-group-item">
                  <Link to="/products/milk/oak_milk">燕麥奶</Link>
                </li>
                <li class="list-group-item">
                  <Link to="/products/milk/almond_milk">杏仁奶</Link>
                </li>
                <li class="list-group-item">
                  <Link to="/products/milk/nut_milk">堅果奶</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              營養蔬果汁
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div>
              <ul class="list-group">
                <li class="list-group-item">
                  <Link to="/products/juice/juice&fruit_vinegar">
                    果汁、果醋
                  </Link>
                </li>
                <li class="list-group-item">
                  <Link to="/products/juice/vegetable_juice">蔬菜汁</Link>
                </li>
                <li class="list-group-item">
                  <Link to="/products/juice/smoothies">果昔</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              營養點心
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div>
              <ul class="list-group">
                <li class="list-group-item">
                  <Link to="/products/snack/granola&muesli&oat">麥片</Link>
                </li>
                <li class="list-group-item">
                  <Link to="/products/snack/energy_bar">燕麥棒、蛋白棒</Link>
                </li>
                <li class="list-group-item">
                  <Link to="/products/snack/nut">堅果</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h2>accordion3</h2>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              植物奶
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body">
              <ul class="list-group">
                <li class="list-group-item">
                  <Link to="/products/juice">果汁</Link>
                </li>
                <li class="list-group-item">
                  <Link to="/products/snack">營養食品</Link>
                </li>
                <li class="list-group-item">
                  <Link to="/products/sale">本月優惠</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              果汁
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <ul class="list-group">
              <li class="list-group-item">
                <Link to="/products/juice">果汁</Link>
              </li>
              <li class="list-group-item">
                <Link to="/products/snack">營養食品</Link>
              </li>
              <li class="list-group-item">
                <Link to="/products/sale">本月優惠</Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              營養點心
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <ul class="list-group">
              <li class="list-group-item">
                <Link to="/products/juice">果汁</Link>
              </li>
              <li class="list-group-item">
                <Link to="/products/snack">營養食品</Link>
              </li>
              <li class="list-group-item">
                <Link to="/products/sale">本月優惠</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aside;
