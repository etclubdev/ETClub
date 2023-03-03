/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./contestDonor.scss";
const ContestDonor = () => {
  return (
    <div className="container-donors">
      <div className="donors-title">
        <h1>NHÀ TÀI TRỢ</h1>
      </div>
      <div className="diamond-donor">
        <h3>NHÀ TÀI TRỢ KIM CƯƠNG</h3>
        <img src="/img/nashtech.png" alt />
      </div>
      <div className="gold-donor">
        <h3>NHÀ TÀI VÀNG</h3>
        <div className="row container-category__gold-donors">
          <div className="col-lg-3">
            <img src="/img/diginet.png" alt />
          </div>
          <div className="col-lg-3 text-center">
            <img src="/img/momo.png" alt />
          </div>
          <div className="col-lg-3 text-center">
            <img src="/img/ueh.png" alt />
          </div>
          <div className="col-lg-3  text-end">
            <img src="/img/infinity.png" alt />
          </div>
        </div>
        <div className="row container-category__gold-donors--mobile">
          <div className="row container-fluid">
            <div className="col-3 text-center">
              <img src="/img/momo.png" alt />
            </div>
            <div className="col-3 text-center">
              <img src="/img/infinity.png" alt />
            </div>
          </div>
          <div className="row container-fluid">
            <div className="col-3 text-center">
              <img src="/img/diginet.png" alt />
            </div>
            <div className="col-3 text-center">
              <img src="/img/ueh.png" alt />
            </div>
          </div>
        </div>
      </div>
      <div className="co-donor">
        <h3>ĐỒNG TÀI TRỢ</h3>
        <div className="row container-category__co-donors">
          <div className="col-lg-2 col-2 text-center">
            <img src="/img/shangri.png" alt />
          </div>
          <div className="col-lg-3 col-3 text-center">
            <img src="/img/edu2review.png" alt />
          </div>
          <div className="col-lg-2 col-2 text-center">
            <img src="/img/camhouse.png" alt />
          </div>
        </div>
      </div>
      <div className="media-patronage">
        <h3>BẢO TRỢ TRUYỀN THÔNG</h3>
        <div className="row container-category__media-patronage">
          <div className="col-lg-3 col-3">
            <img src="/img/s-communications.png" alt />
          </div>
          <div className="col-lg-3 col-3 text-center">
            <img src="/img/topcv.png" alt />
          </div>
          <div className="col-lg-3 col-3 text-center">
            <img src="/img/internship.png" alt />
          </div>
          <div className="col-lg-3 col-3 text-end">
            <img src="/img/blockchain.png" alt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestDonor;
