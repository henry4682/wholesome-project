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
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              植物奶
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
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
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              營養蔬果汁
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
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
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              營養點心
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
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
    </>
  );
}

export default Aside;
