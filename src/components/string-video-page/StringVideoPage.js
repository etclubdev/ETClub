import React, { Fragment, lazy, Suspense } from "react";

import "./stringvideopage.scss";
const StringCard = lazy(() => import("./StringCard"));
const SubcribeBox = lazy(() => import("./SubcribeBox"));
const VideoCard = lazy(() => import("./VideoCard"));
const StringVideoPage = () => {
  return (
    <Fragment>
      <Suspense>
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
              <button class="new-video__all">
                <a href="https://www.youtube.com/channel/UCI3jwuX0dBKc8Iy3VIXZb_Q">
                  Xem tất cả
                </a>
              </button>
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
