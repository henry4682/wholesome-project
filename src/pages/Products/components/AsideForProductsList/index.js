import { useState, useEffect } from 'react';
import Collapse from 'bootstrap/js/dist/collapse';
import { Link } from 'react-router-dom';
import './AsideForProductsList.scss';

function AsideForProductsList({ setCategory }) {

  useEffect(() => {
    const collapseElementList = document.querySelectorAll('.collapse');
    const collapseList = [...collapseElementList].map(
      (collapseEl) => new Collapse(collapseEl)
    );
  }, []);

  return (
    <div
      className="accordion products_layout-aside-accordion accordion-flush col-md-3"
      id="accordionFlushExample"
    >
      <div className="accordion-item products_layout-aside-accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button products_layout-aside-accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
            onClick={() => {
              setCategory('植物奶');
            }}
          >
            <div className="link-decoration">植物奶</div>
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <ul className="list-group">
              <li className="list-group-item products_layout-aside-list-group-item">
                <button
                  onClick={() => {
                    setCategory('燕麥奶');
                  }}
                >
                  燕麥奶
                </button>
              </li>
              <li className="list-group-item products_layout-aside-list-group-item">
                <button
                  onClick={() => {
                    setCategory('杏仁奶');
                  }}
                >
                  杏仁奶
                </button>
              </li>
              <li className="list-group-item products_layout-aside-list-group-item">
                <button
                  onClick={() => {
                    setCategory('堅果奶');
                  }}
                >
                  堅果奶
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item products_layout-aside-accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button
            className="accordion-button products_layout-aside-accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
            onClick={() => {
              setCategory('有機蔬果汁');
            }}
          >
            有機蔬果汁
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <ul className="list-group">
              <li className="list-group-item products_layout-aside-list-group-item">
                <button
                  onClick={() => {
                    setCategory('果汁');
                  }}
                >
                  果汁
                </button>
              </li>
              <li className="list-group-item products_layout-aside-list-group-item">
                <button
                  onClick={() => {
                    setCategory('蔬菜汁、氣泡水');
                  }}
                >
                  蔬菜汁、氣泡水
                </button>
              </li>
              <li className="list-group-item products_layout-aside-list-group-item">
                <button
                  onClick={() => {
                    setCategory('果昔、果醋');
                  }}
                >
                  果昔、果醋
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item products_layout-aside-accordion-item">
        <h2 className="accordion-header" id="flush-headingThree">
          <button
            className="accordion-button products_layout-aside-accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
            onClick={() => {
              setCategory('營養點心');
            }}
          >
            營養點心
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <ul className="list-group">
              <li className="list-group-item products_layout-aside-list-group-item">
                <button
                  onClick={() => {
                    setCategory('麥片');
                  }}
                >
                  麥片
                </button>
              </li>
              <li className="list-group-item products_layout-aside-list-group-item">
                <button
                  onClick={() => {
                    setCategory('燕麥棒、蛋白棒');
                  }}
                >
                  燕麥棒、蛋白棒
                </button>
              </li>
              <li className="list-group-item products_layout-aside-list-group-item ">
                <button
                  onClick={() => {
                    setCategory('堅果');
                  }}
                >
                  堅果
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsideForProductsList;
