/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./subcribebox.scss";
const SubcribeBox = () => {
  return (
    <div className="subcribe-box">
      <div className="box__logo-name">
        <div className="box__img">
          <div className="img-inside">
            <img src="/img/ET 1.png" alt />
          </div>
        </div>
        <div className="box__name">
          <p>clb công nghệ kinh tế</p>
        </div>
      </div>
      <a href='https://www.youtube.com/@CaulacboCongNgheKinhTe' target='_blank' rel="noreferrer" className="box__button">
        <div className="icon">
          <img src="/img/YT-icon.png" alt />
        </div>
        <p>ĐĂNG KÝ</p>
      </a>
    </div>
  );
};

export default SubcribeBox;
