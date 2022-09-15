import { React, useState, useEffect } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/auth';
import { API_URL } from '../../../utils/config';
import axios from 'axios';
function AccountOrders() {
  const { user, setUser } = useAuth();
  const [data, setData] = useState([]);

  useEffect(() => {
    let userOrders = async () => {
      // let response = await axios.get(
      //   `http://localhost:3002/api/1.0/products/${categoryId}`
      // );
      let response = await axios.get(`${API_URL}/user/${user.id}/orders`);
      console.log(response.data);
      setData(response.data);
    };
    userOrders();
  }, [user.id]);

  return (
    <>
      <div className="account_orders w-100">
        <table className="account_orders-table table table-bordered">
          <thead className="table-secondary">
            <tr>
              <th scope="col"></th>
              <th scope="col">訂單編號</th>
              <th scope="col">訂購時間</th>
              <th scope="col">訂單金額</th>
              <th scope="col">訂單狀態</th>
              <th scope="col">備註</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((v, i) => {
              return (
                <tr key={v.id}>
                  <th scope="row">{i + 1}</th>
                  <td>{v.order_sn} </td>
                  <td>{v.create_time}</td>
                  <td>NT${v.total_price}</td>
                  <td>{v.order_status}</td>
                  <td>{v.note}</td>
                  <td>
                    <Link
                      to={`${v.id}`}
                      className="btn btn-primary btn-sm text-white"
                    >
                      查看明細
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* mobile */}
        <ul className="account_orders-mobile">
          <li className="d-flex p-1">
            <div>訂單編號:</div>
            <div className="ms-1">A20220728Q12</div>
          </li>
          <li className="d-flex p-1">
            <div>訂購時間:</div>
            <div className="ms-1">2022-07-28 11:30</div>
          </li>
          <li className="d-flex p-1">
            <div>訂單金額:</div>
            <div className="ms-1">NT$598</div>
          </li>
          <li className="d-flex p-1">
            <div>訂單狀態:</div>
            <div className="ms-1">已完成</div>
          </li>
          <li className="d-flex p-1">
            <div>備註:</div>
            <div className="ms-1">無</div>
          </li>
          <li className="d-flex p-1">
            <Link to=":orderId" className="btn btn-primary btn-sm text-white">
              查看明細
            </Link>
          </li>
        </ul>
        {/* ------ 分頁 ------ */}
        <div className="d-flex justify-content-center align-items-center">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default AccountOrders;
