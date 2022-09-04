import React from 'react';
import { BsFacebook, BsInstagram, BsLine } from 'react-icons/bs';
function Footer() {
  return (
    <>
      <footer className="footer bg-primary text-white">
        <div className="container-fluid p-0">
          <div className="footer_about">
            <p className="footer_about-title m-0">關於我們 About us</p>
            <ul className="d-flex list-unstyled">
              <li>我的帳戶</li>
              <li>會員制度</li>
              <li>配送時間及運費規則</li>
              <li>退款政策</li>
              <li>隱私政策</li>
              <li>服務條款</li>
            </ul>
          </div>
          <div className="footer_info">
            <p className="footer_info-title m-0">
              聯絡資訊 Information contact
            </p>
            <p className="m-0">
              客服專線：03-1234567<span></span>客服時間：09:00-17:00
              <span></span>
            </p>
            <p className="m-0">
              信箱：wholesome@healthy.com<span></span>
              地址：320桃園市中壢區新生路二段421號
            </p>
          </div>
          <div className="footer-icons">
            <BsFacebook />
            <BsInstagram />
            <BsLine />
          </div>
        </div>
        <div className="footer-copyright">
          <p>copyright</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
