import React from 'react';
import './index.scss';

function AccountTracking() {
  return (
    <div className="account_tracking w-100">
      <div className="account_tracking-product d-flex">
        <div className="col-3">
          <figure className="account_tracking-product-img ">
            <img
              src="https://cdn.cybassets.com/media/W1siZiIsIjEzODUwL3Byb2R1Y3RzLzMxOTUxMTA1LzE2MDM0MzQ5NTNfZjFlNjEwOTcxYzcwMWZkMmM3MjEucG5nIl0sWyJwIiwidGh1bWIiLCI2MDB4NjAwIl1d.png?sha=a134d4f53b04b833"
              alt="apple juice"
            />
          </figure>
        </div>
        <div className="account_tracking-product-content col-6">
          <p className="account_tracking-product-content-name">
            Voelkel 蘋果醋
          </p>
          <p className="account_tracking-product-content-price">NT$200</p>
        </div>
        <div className="col-3">
          <button className="btn btn-primary text-white">加入購物車</button>
        </div>
      </div>
    </div>
  );
}

export default AccountTracking;
