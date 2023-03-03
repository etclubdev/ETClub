/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Pagination.scss";
const Pagination = () => {
  return (
    <div style={{ "max-width": "1300px", margin: "0 auto" }}>
      <ul class="pagination">
        <li class="pagination-item-icon">
          <a href="" class="pagination-item__link">
            <i class="fas fa-angle-left"></i>
          </a>
        </li>
        <li class="pagination-item pagination-item--active">
          <a href="#" class="pagination-item__link">
            1
          </a>
        </li>
        <li class="pagination-item">
          <a href="#" class="pagination-item__link">
            2
          </a>
        </li>
        <li class="pagination-item">
          <a href="#" class="pagination-item__link">
            3
          </a>
        </li>
        <li class="pagination-item">
          <a href="#" class="pagination-item__link">
            ...
          </a>
        </li>
        <li class="pagination-item">
          <a href="#" class="pagination-item__link">
            10
          </a>
        </li>

        <li class="pagination-item-icon">
          <a href="" class="pagination-item__link">
            <i class="fas fa-angle-right"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
