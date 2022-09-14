import React from 'react';
import { useState, useEffect } from 'react';
import './index.scss';
import { useAuth } from '../../../context/auth';
import axios from 'axios';
import { API_URL } from '../../../utils/config';

function AccountEdit() {
  // const { user, setUser } = useAuth();

  // const [editUser, setEditUser] = useState({
  //   name: user.name,
  //   phone: user.phone,
  //   email: user.email,
  //   birthday: user.birthday,
  //   address: user.address,
  //   gender: user.gender,
  // });
  const genderOptions = ['男', '女', '不提供'];

  const [editUser, setEditUser] = useState({
    name: '',
    phone: '',
    email: '',
    birthday: '',
    address: '',
    gender: '',
  });

  // 在元件取得登入資料
  useEffect(() => {
    let getUser = async () => {
      console.log('in APP: check if login');
      let response = await axios.get(`${API_URL}/user`, {
        withCredentials: true,
      });
      console.log(response.data);
      setEditUser(response.data);
    };
    getUser();
  }, []);

  function handleFieldChange(e) {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  }

  // '確定修改'按鈕
  async function handleEdit(e) {
    e.preventDefault();
    try {
      let response = await axios.put(
        `${API_URL}/user/${editUser.id}`,
        editUser,
        {
          // 為了可以跨源存取 cookie
          // 只要是判斷是否登入的請求都要加下面這行
          withCredentials: true,
        }
      );
      console.log('PUT res', response);
      console.log(response.data);
      setEditUser(response.data);
    } catch (e) {
      console.error('Account edit Error', e);
    }
  }

  return (
    <>
      <div className="account_edit w-100">
        <form className="account_edit-form">
          <div>
            <label className="form-label">姓名</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={editUser.name}
              onChange={handleFieldChange}
            />
          </div>
          <div>
            <label className="form-label">手機</label>
            <input
              type="phone"
              className="form-control"
              name="phone"
              value={editUser.phone}
              onChange={handleFieldChange}
            />
          </div>
          <div>
            <label className="form-label">電子信箱</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={editUser.email}
              onChange={handleFieldChange}
              disabled
            />
          </div>
          <div>
            <label className="form-label">出生日期</label>
            <input
              type="date"
              className="form-control"
              name="birthday"
              value={editUser.birthday}
              onChange={handleFieldChange}
              disabled
            />
          </div>
          <div>
            <label className="form-label">收件地址</label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={editUser.address}
              onChange={handleFieldChange}
            />
          </div>
          <div>
            <label className="form-label">性別</label>
            {genderOptions.map((v, i) => {
              return (
                <div key={i} className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    checked={editUser.gender === v}
                    value={v}
                    onChange={handleFieldChange}
                  />
                  <label className="form-check-label">{v}</label>
                </div>
              );
            })}
          </div>
          <div>
            <button
              className="btn btn btn-primary text-white"
              type="submit"
              onClick={handleEdit}
            >
              確定修改
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AccountEdit;
