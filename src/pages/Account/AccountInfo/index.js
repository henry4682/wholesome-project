import React, { useState, useEffect } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/auth';
import { useCart } from '../../../context/cart';
import { API_URL } from '../../../utils/config';
import axios from 'axios';
import { successToastAlert } from '../../../components/Alert';
import { useOutletContext } from 'react-router-dom';

function AccountInfo() {
  const [setBreadcrumbData] = useOutletContext();
  const { user, setUser, setIsLogin } = useAuth();
  const { cart, setCart } = useCart();
  const [couponsCanUse, setCouponsCanUse] = useState([]);

  useEffect(() => {
    setBreadcrumbData('帳戶總覽');
  }, []);

  useEffect(() => {
    let userCoupons = async () => {
      let response = await axios.get(`${API_URL}/user/${user.id}/coupons`);
      console.log(response.data);
      setCouponsCanUse(response.data.couponsCanUse);
    };
    userCoupons();
  }, [user.id]);

  // 登出按鈕
  async function handleLogout() {
    let response = await axios.get(`${API_URL}/auth/logout`, {
      withCredentials: true,
    });
    console.log('handleLogout', response.data);
    setUser(null);
    setIsLogin(false);
    setCart([]);
    localStorage.setItem('shoppingCart', JSON.stringify([]));
    successToastAlert(response.data.message, 1200, false);
  }
  return (
    <>
      <div className="account_info w-100">
        <div className="account_info-card w-100 d-flex">
          <div className="account_info-card-left ">
            <p className="account_info-card-name mb-2">{user && user.name}</p>
            <p className="mb-2">{user && user.email}</p>
            <div className="mb-3">
              <Link to="edit">查看個人資訊</Link>
            </div>
            <button
              className="btn btn-sm btn-outline-primary"
              onClick={handleLogout}
            >
              登出
            </button>
          </div>
          <div className="account_info-card-right">
            <div className="d-flex account_info-card-text">
              {/* <p className="pe-lg-4 pe-md-2">
                總累計消費金額 NT$<span>1000</span>
              </p> */}
              <p>
                可用優惠券
                <Link to="coupons">
                  <span className="px-2">{couponsCanUse.length}</span>
                </Link>
                張
              </p>
            </div>
            <Link to="orders" className="btn btn-primary text-white">
              訂單查詢
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountInfo;
