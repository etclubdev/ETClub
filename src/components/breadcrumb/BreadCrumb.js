import React from "react";
import "./breadcrumb.scss";
const BreadCrumb = (props) => {
  return (
    <div class="page-breadcrumb">
      <div class="container">
        <div class="breadcrumb__tags">
          <div class="breadcrumb__homepage">Trang Chủ</div>
          <i class="fa fa-angle-right"></i>
          <div class="breadcrumb__competition">{props.navPage}</div>
          <i class="fa fa-angle-right"></i>
          <div class="breadcrumb__all-competition">{props.navDetail}</div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
