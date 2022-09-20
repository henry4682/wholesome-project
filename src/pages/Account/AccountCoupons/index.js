import { React, useState, useEffect } from 'react';
import './index.scss';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
import { useAuth } from '../../../context/auth';

function AccountCoupons() {
  const { user, setUser } = useAuth();
  const [coupons, setCoupons] = useState({ discount_code: '' });
  //設定取得會員資料狀態
  // const [userData, setUserData] = useState({ id: null });
  //取得會員所有優惠券資料的狀態
  const [userCouponsData, setUserCouponsData] = useState([]);

  function handleFieldChange(e) {
    setCoupons({ ...coupons, [e.target.name]: e.target.value });
  }

  // useEffect(() => {
  //   let getUserData = async () => {
  //     console.log('in APP: check if login');
  //     let response = await axios.get(`${API_URL}/user`, {
  //       withCredentials: true,
  //     });
  //     console.log(response.data);
  //     setUserData(response.data);
  //     // let couponsResponse=await axios.get(`$API`)
  //   };
  //   getUserData();
  // }, []);

  useEffect(() => {
    let userCoupons = async () => {
      // let response = await axios.get(
      //   `http://localhost:3002/api/1.0/products/${categoryId}`
      // );
      let response = await axios.get(`${API_URL}/user/${user.id}/coupons`);
      console.log(response.data);
      setUserCouponsData(response.data);
    };
    userCoupons();
  }, [user.id]);

  async function handleCouponSubmit(e) {
    e.preventDefault();
    try {
      let response = await axios.post(
        `${API_URL}/user/${user.id}/coupon`,
        coupons
      );
      console.log('POST res', response);
      console.log(response.data);
      alert('優惠券新增成功');
    } catch (e) {
      console.error('Coupon add Error:', e);
      alert(e.response.data.message);
    }
  }

  return (
    <div className="account_coupons w-100">
      <form className="account_coupons-title d-flex align-items-center">
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label className="col-form-label">優惠券代碼:</label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              className="form-control form-control-sm"
              name="discount_code"
              value={coupons.discount_code}
              onChange={handleFieldChange}
            />
          </div>
          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-sm btn-secondary"
              onClick={handleCouponSubmit}
            >
              確認
            </button>
          </div>
        </div>
      </form>
      <div className="d-flex justify-content-end mb-2">
        <p>
          可用優惠券總計
          <span className="account_coupons-count text-primary mx-1">
            {userCouponsData.length}
          </span>
          張
        </p>
      </div>
      <table className="account_coupons-table table table-bordered">
        <thead className="table-secondary">
          <tr>
            <th scope="col"></th>
            <th scope="col">優惠活動名稱</th>
            <th scope="col">優惠券金額</th>
            <th scope="col">優惠券代碼</th>
            <th scope="col">起始時間</th>
            <th scope="col">結束期限</th>
          </tr>
        </thead>
        <tbody>
          {userCouponsData.map((v, i) => {
            return (
              <tr key={v.id}>
                <th scope="row">{i + 1}</th>
                <td>{v.coupon_name}</td>
                <td>NT${v.coupon_price}</td>
                <td>{v.coupon_code}</td>
                <td>{v.coupon_start ? v.coupon_start : '-'}</td>
                <td>{v.coupon_end ? v.coupon_end : '-'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* mobile */}
      <ul className="account_coupons-mobile">
        <li className="d-flex p-1">
          <div>優惠活動名稱:</div>
          <div className="ms-1">註冊禮金</div>
        </li>
        <li className="d-flex p-1">
          <div>優惠券金額:</div>
          <div className="ms-1">NT$100</div>
        </li>
        <li className="d-flex p-1">
          <div>優惠券代碼:</div>
          <div className="ms-1">NEW100</div>
        </li>
        <li className="d-flex p-1">
          <div>起始時間:</div>
          <div className="ms-1">無</div>
        </li>
        <li className="d-flex p-1">
          <div>結束期限:</div>
          <div className="ms-1">無</div>
        </li>
      </ul>
    </div>
  );
}

export default AccountCoupons;
