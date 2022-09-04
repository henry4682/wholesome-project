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
