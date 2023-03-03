/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./resultContest.scss";
const ResultContest = () => {
  return (
    <div className="container-fluid__result">
      <div className="row container-result--main">
        <div className="col-lg-4 col-4 second-prize text-center">
          <div className="prize-title">GIẢI NHÌ</div>
          <div className="avt-prize">
            <img src="/img/Circle - L.png" alt />
            <div className="avt-prize__border">
              <img src="/img/border-avt.png" alt />
            </div>
          </div>
          <div className="container-info">
            <h3>Nguyễn Văn A</h3>
            <h4>Hệ thống thông tin</h4>
            <h4>K45-UEH</h4>
          </div>
        </div>
        <div className="col-lg-4 col-4 first-prize text-center">
          <div className="prize-title">GIẢI NHẤT</div>
          <div className="avt-prize">
            <img src="/img/Circle - L.png" alt />
            <div className="avt-prize__border">
              <img src="/img/border-avt.png" alt />
            </div>
          </div>
          <div className="container-info">
            <h3>Nguyễn Văn A</h3>
            <h4>Hệ thống thông tin</h4>
            <h4>K45-UEH</h4>
          </div>
        </div>
        <div className="col-lg-4 col-4 third-prize text-center">
          <div className="prize-title">GIẢI BA</div>
          <div className="avt-prize">
            <img src="/img/Circle - L.png" alt />
            <div className="avt-prize__border">
              <img src="/img/border-avt.png" alt />
            </div>
          </div>
          <div className="container-info">
            <h3>Nguyễn Văn A</h3>
            <h4>Hệ thống thông tin</h4>
            <h4>K45-UEH</h4>
          </div>
        </div>
      </div>
      <div className="row container-result--encourage">
        <div className="col-lg-5 col-5 encourage-prize text-center">
          <div className="prize-title">KHUYẾN KHÍCH</div>
          <div className="avt-prize">
            <img src="/img/Circle - L.png" alt />
            <div className="avt-prize__border">
              <img src="/img/border-avt.png" alt />
            </div>
          </div>
          <div className="container-info">
            <h3>Nguyễn Văn A</h3>
            <h4>Hệ thống thông tin</h4>
            <h4>K45-UEH</h4>
          </div>
        </div>
        <div className="col-lg-5 col-5 encourage-prize text-center">
          <div className="prize-title">KHUYẾN KHÍCH</div>
          <div className="avt-prize">
            <img src="/img/Circle - L.png" alt />
            <div className="avt-prize__border">
              <img src="/img/border-avt.png" alt />
            </div>
          </div>
          <div className="container-info">
            <h3>Nguyễn Văn A</h3>
            <h4>Hệ thống thông tin</h4>
            <h4>K45-UEH</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultContest;
