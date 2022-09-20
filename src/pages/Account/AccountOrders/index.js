import { React, useState, useEffect } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/auth';
import { API_URL } from '../../../utils/config';
import axios from 'axios';
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs';

function AccountOrders() {
  const { user, setUser } = useAuth();
  const [data, setData] = useState([]);

  // 分頁: 增加 lastPage (總頁數) 與 page (目前在第幾頁) 的 state
  const [lastPage, setLastPage] = useState(1);
  const [page, setPage] = useState(1);
  const [ordersCount, setOrdersCount] = useState(1);

  useEffect(() => {
    let userOrders = async () => {
      let response = await axios.get(
        `${API_URL}/user/${user.id}/orders?page=${page}`
      );
      console.log(response.data);
      setData(response.data.data);
      setLastPage(response.data.pagination.lastPage);
      setOrdersCount(response.data.pagination.total);
    };
    userOrders();
  }, [user.id, page]);

  //製作分頁按鈕
  let pages = [];
  for (let i = 1; i <= lastPage; i++) {
    pages.push(i);
  }
  console.log(pages);

  return (
    <>
      <div className="account_orders w-100">
        <div className="d-flex justify-content-end">
          <p className="mb-2 me-2">
            第{page}頁，共{ordersCount}筆訂單
          </p>
        </div>
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
              <li
                className="page-item page-link"
                onClick={(e) => {
                  if (page > 1) setPage(page - 1);
                }}
              >
                <BsCaretLeft />
              </li>
              {pages.map((v, i) => {
                return (
                  <li
                    key={i}
                    className={
                      page === v
                        ? 'page-item page-link bg-secondary'
                        : 'page-item page-link'
                    }
                    onClick={(e) => {
                      setPage(v);
                    }}
                  >
                    {v}
                  </li>
                );
              })}

              <li
                className="page-item page-link"
                onClick={(e) => {
                  if (page < lastPage) setPage(page + 1);
                }}
              >
                <BsCaretRight />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default AccountOrders;
