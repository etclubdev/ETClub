import React, { Fragment, lazy, Suspense } from "react";
import BreadCrumb from "../breadcrumb/BreadCrumb";

import "./stringvideopage.scss";
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
const StringCard = lazy(() => import("./StringCard"));
const SubcribeBox = lazy(() => import("./SubcribeBox"));
const VideoCard = lazy(() => import("./VideoCard"));
const StringVideoPage = () => {
  return (
    <Fragment>
      <Suspense>
        <div className='mx-auto w-full xxl:w-[1300px] xxl:px-[30px] mt-[30px]'>
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
                breadcrumbName: 'Góc công nghệ',
              },
              {
                path: '/tech-corner/chuoi-hoat-dong',
                breadcrumbName: 'Chuỗi hoạt động nâng cao năng lực công nghệ cho sinh viên',
              },

            ]}
          />
        </div>
        <div class="videos-page">
          <div class="container">
            <div class="videos-page__title">
              <p>Chuỗi hoạt động:</p>
              <p>nâng cao năng lực công nghệ cho sinh viên</p>
            </div>
            <SubcribeBox />
            <div class="videos-page__hot-video">
              <div class="hot-video__name">video nổi bật</div>
              <div class="hot-video__list">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
              </div>
            </div>
            <div class="videos-page__new-video">
              <div class="new-video__name">video mới nhất</div>
              <div class="new-video__list">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
              </div>
              <a href="https://www.youtube.com/channel/UCI3jwuX0dBKc8Iy3VIXZb_Q" target='_blank' rel='noreferrer' class="new-video__all w-fit">
                <a href="https://www.youtube.com/channel/UCI3jwuX0dBKc8Iy3VIXZb_Q" target='_blank' rel='noreferrer'>
                  Xem tất cả
                </a>
              </a>
            </div>
            <div class="videos-page__string">
              <div class="string__head">
                <div class="string__name">Chuỗi hoạt động</div>
                <div class="string__option">
                  <button class="new">Mới nhất</button>
                  <button class="popular">Phổ biến nhất</button>
                </div>
              </div>
              <div class="string__list">
                <StringCard />
                <StringCard />
                <StringCard />
                <StringCard />
                <StringCard />
                <StringCard />
                <StringCard />
                <StringCard />
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </Fragment>
  );
};

export default StringVideoPage;
