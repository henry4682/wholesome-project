import React from 'react';
import { useState, useEffect } from 'react';
import './index.scss';
import { useAuth } from '../../../context/auth';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
import { warningAlert, successAlert } from '../../../components/Alert';

function AccountEdit() {
  const genderOptions = ['男', '女', '不提供'];
  const [editUser, setEditUser] = useState({
    name: '',
    phone: '',
    email: '',
    birthday: '',
    address: '',
    gender: '',
  });
  // 控制表單錯誤訊息的狀態
  const [fieldErrors, setFieldErrors] = useState({
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
      successAlert('會員資料更新成功');
      // alert('修改成功');
    } catch (e) {
      console.error('Account edit Error', e);
      warningAlert('會員資料更新失敗', e.response.data.message);
    }
  }

  const handleInvalid = (e) => {
    // 阻擋檢查的泡泡訊息(預設行為)
    e.preventDefault();
    console.log(e.target.validationMessage);

    // 技巧：用 js 來 focus 第一個錯誤欄位
    document.querySelector('input:invalid').focus();

    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    });
  };

  const handleFormChange = (e) => {
    if (e.target.name === 'showPassword') return;
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: '',
    });
  };

  console.log(fieldErrors);

  return (
    <>
      <div className="account_edit w-100">
        <form
          className="account_edit-form"
          onSubmit={handleEdit}
          onInvalid={handleInvalid}
          onChange={handleFormChange}
        >
          <div>
            <label className="form-label">姓名</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={editUser.name}
              onChange={handleFieldChange}
              required
            />
            <div className="error">
              <span>{fieldErrors.name}</span>
            </div>
          </div>
          <div>
            <label className="form-label">手機</label>
            <input
              className="form-control"
              type="phone"
              name="phone"
              value={editUser.phone}
              onChange={handleFieldChange}
              required
            />
            <div className="error">
              <span>{fieldErrors.phone}</span>
            </div>
          </div>
          <div>
            <label className="form-label">電子信箱</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={editUser.email}
              onChange={handleFieldChange}
              disabled
            />
          </div>
          <div>
            <label className="form-label">出生日期</label>
            <input
              className="form-control"
              type="date"
              name="birthday"
              value={editUser.birthday}
              onChange={handleFieldChange}
              disabled
            />
          </div>
          <div>
            <label className="form-label">收件地址</label>
            <input
              className="form-control"
              type="text"
              name="address"
              value={editUser.address}
              onChange={handleFieldChange}
              required
            />
            <div className="error">
              <span>{fieldErrors.address}</span>
            </div>
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
              // onClick={handleEdit}
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
