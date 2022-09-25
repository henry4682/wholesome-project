import { React, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './index.scss';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { FaHome } from 'react-icons/fa';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { successAlert, warningAlert } from '../../components/Alert';
function Register() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  });
  // 控制表單錯誤訊息的狀態
  const [fieldErrors, setFieldErrors] = useState({
    name: '',
    email: '',
    phone: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  });

  // 呈現密碼用
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // 註冊成功與否 ---> 跳轉頁面
  const [isFinish, setIsFinish] = useState(false);
  console.log(isFinish);

  function handleFieldChange(e) {
    const newUser = { ...user, [e.target.name]: e.target.value };
    setUser(newUser);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      setFieldErrors({
        ...fieldErrors,
        password: '密碼與確認密碼需一致',
        confirmPassword: '密碼與確認密碼需一致',
      });
      return; // 終止之後的函式動作
    }

    try {
      let response = await axios.post(`${API_URL}/auth/register`, user);
      console.log('POST res', response);
      console.log(response.data);
      successAlert('註冊成功', '歡迎登入');
      // alert('註冊成功');
      // 註冊成功清空欄位
      setUser({
        name: '',
        email: '',
        phone: '',
        birthday: '',
        password: '',
        confirmPassword: '',
      });
      setIsFinish(true);
    } catch (e) {
      // alert(e.response.data.message || e.response.data.errors[0].msg);
      warningAlert(
        '註冊欄位填寫錯誤',
        e.response.data.message || e.response.data.errors[0].msg
      );
      console.error('register Error', e);
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
    if (e.target.name === 'showPassword') return;
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: '',
    });
  };

  // 註冊成功跳到登入頁面
  if (isFinish) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="container my-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">
                <FaHome />
              </Link>
            </li>
            <li className="breadcrumb-item">註冊新帳號</li>
          </ol>
        </nav>
        <div className="d-flex justify-content-center p-2">
          <div className="register">
            <p className="text-center register-title">註冊新帳號</p>
            <form
              className="register-form"
              onSubmit={handleSubmit}
              onInvalid={handleInvalid}
              onChange={handleFormChange}
            >
              <div className="mb-4">
                <label className="form-label">姓名*</label>
                <input
                  className="form-control form-control-lg"
                  placeholder="請輸入您的姓名"
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleFieldChange}
                  required
                />
                <div className="error">
                  <span>{fieldErrors.name}</span>
                </div>
              </div>
              <div className="mb-4">
                <label className="form-label">電子信箱*</label>
                <input
                  className="form-control form-control-lg"
                  placeholder="請輸入您的 E-MAIL"
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleFieldChange}
                  required
                />
                <div className="error">
                  <span>{fieldErrors.email}</span>
                </div>
              </div>
              <div className="mb-4">
                <label className="form-label">手機*</label>
                <input
                  className="form-control form-control-lg"
                  placeholder="請輸入您的手機"
                  type="tel"
                  name="phone"
                  value={user.phone}
                  onChange={handleFieldChange}
                  required
                />
                <div className="error">
                  <span>{fieldErrors.phone}</span>
                </div>
              </div>
              <div className="mb-4">
                <label className="form-label">生日*</label>{' '}
                <span className="text-primary">
                  請正確填寫，註冊成功後將無法修改
                </span>
                <input
                  className="form-control form-control-lg"
                  type="date"
                  name="birthday"
                  value={user.birthday}
                  onChange={handleFieldChange}
                  required
                />
                <div className="error">
                  <span>{fieldErrors.birthday}</span>
                </div>
              </div>
              <div className="mb-4">
                <label className="form-label">密碼*</label>
                <div className="register_password_box">
                  <input
                    className="form-control form-control-lg"
                    placeholder="請輸入您的密碼"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={user.password}
                    onChange={handleFieldChange}
                    required
                  />
                  <div className="register_password_icon text-secondary">
                    {showPassword ? (
                      <BsEye
                        onClick={(e) => {
                          setShowPassword(false);
                        }}
                      />
                    ) : (
                      <BsEyeSlash
                        onClick={(e) => {
                          setShowPassword(true);
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="error">
                  <span>{fieldErrors.password}</span>
                </div>
              </div>
              <div className="mb-4">
                <label className="form-label">密碼確認*</label>
                <div className="register_password_box">
                  <input
                    className="form-control form-control-lg"
                    placeholder="再輸入一次密碼"
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={handleFieldChange}
                    required
                  />
                  <div className="register_password_icon text-secondary">
                    {showConfirmPassword ? (
                      <BsEye
                        onClick={(e) => {
                          setShowConfirmPassword(false);
                        }}
                      />
                    ) : (
                      <BsEyeSlash
                        onClick={(e) => {
                          setShowConfirmPassword(true);
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="error">
                  <span>{fieldErrors.confirmPassword}</span>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg text-white"
                // onClick={handleSubmit}
              >
                加入會員
              </button>
            </form>
            <p className="register-notice text-center">
              我已經有會員帳號了?<Link to="/login">回登入頁面</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
