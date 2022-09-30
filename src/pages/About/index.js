import React from 'react';
import './index.scss';

function About() {
  return (
    <div className="container">
      <main className="about">
        <section className="about_section">
          <h2 className="about_title text-primary">關於WHOLESOME</h2>
          <div className="about_content">
            <p>
              WHOLESOME主要販售植物奶、有機蔬果汁以及營養點心三大類商品，主要以健康、素食為主軸，並且透過推薦食譜結合本站商品，希望提供有意選擇蔬食與低GI食品的消費者更完整的一站式購物體驗。
            </p>
          </div>
          <div className="about_img mt-3">
            <img
              className="about_img--1"
              src={require('./Assets/about-img2.jpg')}
              alt="img"
            />
          </div>
        </section>

        <section className="about_section">
          <h2 className="about_title text-primary">友善地球</h2>
          <div className="about_content">
            <p>
              WHOLESOME希望向消費者傳達健康、環保的飲食理念與消費意識，透過打造健康、環保的食品購物平台，整合食材的購買與推薦美味的食譜，從購物到食譜，讓消費者能輕鬆將買到的商品變成美味佳餚，並建立健康的飲食習慣。
            </p>
          </div>
          <div className="about_img mt-3">
            <img
              className="about_img--1"
              src={require('./Assets/about-img1.jpg')}
              alt="img"
            />
          </div>
        </section>

        <section>
          <h2 className="about_title text-primary">配送時間及運費規則</h2>
          <div className="about_content">
            <p>黑貓宅急便及黑貓貨到付款：</p>
            <p>單筆消費滿5000，即可免運。 未滿5000元，需自付運費80元。</p>
            <p className="mt-3">
              現貨商品，當天(工作日)中午12點前完成付款，原則上可於當日完成出貨；中午12點過後將於下一個工作天完成出貨。
              (最遲將於三個工作天內出貨完畢)
            </p>
            <p className="mt-3">
              實際的送貨進度還須視宅配人員及超商物流的配送狀況為主。
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
