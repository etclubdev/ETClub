/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Banner.scss";
const Banner = () => {
  return (
    <>
      <div className="container-banner">
        <h1 className="header-name">CLB CÔNG NGHỆ KINH TẾ</h1>
        <div className="img-banner">
          <img src="/img/banner.png" alt />
        </div>
      </div>
    </>
  );
};

export default Banner;
