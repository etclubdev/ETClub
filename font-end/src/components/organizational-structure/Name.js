import React from "react";
import "./name.scss";
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
const Name = () => {
  return (
    <>
      <div className='mx-auto max-sm:p-2 w-full xxl:w-[1300px] xxl:px-[30px] mt-[30px]'>
        <Breadcrumb
          separator=">"

          itemRender={(route, _, routes) => {
            const last = routes.indexOf(route) === routes.length - 1;
            return last ? (
              <span className='breadcrumb-active  max-sm:text-[14px] text-[18px] font-bold'>{route.breadcrumbName}</span>
            ) : (
              <Link className='max-sm:text-[14px] text-[18px] cursor-pointer font-bold text-white ' to={route.path}>{route.breadcrumbName}</Link>
            );
          }}
          routes={[
            {
              path: '/',
              breadcrumbName: 'Trang chủ',
            },
            {
              path: '/',
              breadcrumbName: 'Giới thiệu',
            },
            {
              path: '/introduce/about-clb',
              breadcrumbName: 'Cơ cấu tổ chức',
            },

          ]}
        />
      </div>
      <div class="organizational-structure__name">
        <h1>CƠ CẤU TỔ CHỨC</h1>
      </div>
    </>

  );
};

export default Name;
