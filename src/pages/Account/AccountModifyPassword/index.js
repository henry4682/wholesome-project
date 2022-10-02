import { React, useState, useEffect } from 'react';
import './index.scss';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { warningAlert, successAlert } from '../../../components/Alert';
import { useOutletContext } from 'react-router-dom';

function AccountModifyPassword() {
  const [setBreadcrumbData] = useOutletContext();
  // 設定取得會員資料的狀態
  const [userData, setUserData] = useState({ id: null });

  // 修改密碼的狀態
  const [modifyPassword, setModifyPassword] = useState({
    password: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  // 控制表單錯誤訊息的狀態
  const [fieldErrors, setFieldErrors] = useState({
    password: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  // 呈現密碼用
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  // 載入 Breadcrumb Data
  useEffect(() => {
    setBreadcrumbData('更改密碼');
  }, []);

  // 在元件取得登入資料
  useEffect(() => {
    let getUser = async () => {
      console.log('in APP: check if login');
      let response = await axios.get(`${API_URL}/user`, {
        withCredentials: true,
      });
      // console.log(response.data);
      setUserData(response.data);
    };
    getUser();
  }, []);

  function handleFieldChange(e) {
    setModifyPassword({ ...modifyPassword, [e.target.name]: e.target.value });
  }

  async function handleModifyPassword(e) {
    e.preventDefault();
    if (modifyPassword.newPassword !== modifyPassword.confirmNewPassword) {
      setFieldErrors({
        ...fieldErrors,
        newPassword: '新密碼與新密碼確認需一致',
        confirmNewPassword: '新密碼與新密碼確認需一致',
      });
      return; // 終止之後的函式動作
    }
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
      successAlert('密碼更改成功');
      setModifyPassword({
        password: '',
        newPassword: '',
        confirmNewPassword: '',
      });
    } catch (e) {
      // alert 錯誤訊息
      warningAlert('更改密碼失敗', e.response.data.message);
      console.error('Modify Password Error', e);
    }
  }

  const handleInvalid = (e) => {
    // 阻擋檢查的泡泡訊息(預設行為)
    e.preventDefault();
    // 技巧：用 js 來 focus 第一個錯誤欄位
    document.querySelector('input:invalid').focus();
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    });
  };

  const handleFormChange = (e) => {
    if (
      e.target.name === 'showCurrentPassword' ||
      e.target.name === 'showNewPassword' ||
      e.target.name === 'showConfirmNewPassword'
    ) {
      return;
    }
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: '',
    });
  };

  return (
    <>
      <div className="account_password w-100">
        <form
          className="account_password-form"
          onSubmit={handleModifyPassword}
          onInvalid={handleInvalid}
          onChange={handleFormChange}
        >
          <div>
            <label className="form-label">目前密碼</label>
            <div className="account_password_box">
              <input
                className="form-control"
                type={showCurrentPassword ? 'text' : 'password'}
                name="password"
                value={modifyPassword.password}
                onChange={handleFieldChange}
                required
              />
              <div className="account_password_icon">
                {showCurrentPassword ? (
                  <BsEye
                    className="text-secondary"
                    onClick={(e) => {
                      setShowCurrentPassword(false);
                    }}
                  />
                ) : (
                  <BsEyeSlash
                    className="text-secondary"
                    onClick={(e) => {
                      setShowCurrentPassword(true);
                    }}
                  />
                )}
              </div>
            </div>
            <div className="error">
              <span>{fieldErrors.password}</span>
            </div>
          </div>
          <div>
            <label className="form-label">新密碼</label>
            <div className="account_password_box">
              <input
                className="form-control"
                type={showNewPassword ? 'text' : 'password'}
                name="newPassword"
                value={modifyPassword.newPassword}
                onChange={handleFieldChange}
                required
              />
              <div className="account_password_icon">
                {showNewPassword ? (
                  <BsEye
                    className="text-secondary"
                    onClick={(e) => {
                      setShowNewPassword(false);
                    }}
                  />
                ) : (
                  <BsEyeSlash
                    className="text-secondary"
                    onClick={(e) => {
                      setShowNewPassword(true);
                    }}
                  />
                )}
              </div>
            </div>
            <div className="error">
              <span>{fieldErrors.newPassword}</span>
            </div>
          </div>
          <div>
            <label className="form-label">新密碼確認</label>
            <div className="account_password_box">
              <input
                className="form-control"
                type={showConfirmNewPassword ? 'text' : 'password'}
                name="confirmNewPassword"
                value={modifyPassword.confirmNewPassword}
                onChange={handleFieldChange}
                required
              />
              <div className="account_password_icon">
                {showConfirmNewPassword ? (
                  <BsEye
                    className="text-secondary"
                    onClick={(e) => {
                      setShowConfirmNewPassword(false);
                    }}
                  />
                ) : (
                  <BsEyeSlash
                    className="text-secondary"
                    onClick={(e) => {
                      setShowConfirmNewPassword(true);
                    }}
                  />
                )}
              </div>
            </div>
            <div className="error">
              <span>{fieldErrors.confirmNewPassword}</span>
            </div>
          </div>

          <div>
            <button
              className="btn btn btn-primary text-white"
              type="submit"
              // onClick={handleModifyPassword}
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
