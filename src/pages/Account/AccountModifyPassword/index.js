import { React, useState, useEffect } from 'react';
import './index.scss';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
import { Co2Sharp } from '@mui/icons-material';

function AccountModifyPassword() {
  // 設定取得會員資料的狀態
  const [userData, setUserData] = useState({ id: null });
  // 修改密碼的狀態
  const [modifyPassword, setModifyPassword] = useState({
    password: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  // 在元件取得登入資料
  useEffect(() => {
    let getUser = async () => {
      console.log('in APP: check if login');
      let response = await axios.get(`${API_URL}/user`, {
        withCredentials: true,
      });
      console.log(response.data);
      setUserData(response.data);
    };
    getUser();
  }, []);

  function handleFieldChange(e) {
    setModifyPassword({ ...modifyPassword, [e.target.name]: e.target.value });
  }

  async function handleModifyPassword(e) {
    e.preventDefault();
    try {
      let response = await axios.put(
        `${API_URL}/user/${userData.id}/modifyPassword`,
        modifyPassword,
        {
          // 為了可以跨源存取 cookie
          // 只要是判斷是否登入的請求都要加下面這行
          withCredentials: true,
        }
      );
    } catch (e) {
      console.error('Modify Password Error', e);
    }
  }
  return (
    <>
      <div className="account_password w-100">
        <form className="account_password-form">
          <div>
            <label className="form-label">目前密碼</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={modifyPassword.password}
              onChange={handleFieldChange}
            />
          </div>
          <div>
            <label className="form-label">新密碼</label>
            <input
              type="password"
              className="form-control"
              name="newPassword"
              value={modifyPassword.newPassword}
              onChange={handleFieldChange}
            />
          </div>
          <div>
            <label className="form-label">新密碼確認</label>
            <input
              type="password"
              className="form-control"
              name="confirmNewPassword"
              value={modifyPassword.confirmNewPassword}
              onChange={handleFieldChange}
            />
          </div>

          <div>
            <button
              className="btn btn btn-primary text-white"
              type="submit"
              onClick={handleModifyPassword}
            >
              確定修改
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AccountModifyPassword;
