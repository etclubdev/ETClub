/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./techconer.scss";
const TechConer = () => {
  return (
    <div id="tech-corner" className="techCorner">
      <div className="container">
        <div className="techCorner-content">
          <div className="techCorner__title">GÓC CÔNG NGHỆ</div>
          <div className="techCorner__cards">
            <div className="techCorner__card">
              <div className="card__image">
                <img src="/img/Tech-Corner1.png" alt />
              </div>
              <div className="card__name">Bản tin ET</div>
              <div className="card__desc">
                Mỗi tháng ET Group cập nhật 1 bản tin về kiến thức về tin tức
                công nghệ mới
              </div>
              <div className="card_btn">Đọc ngay</div>
            </div>
            <div className="techCorner__card">
              <div className="card__image">
                <img src="/img/Tech-Corner2.png" alt />
              </div>
              <div className="card__name">
                Chuỗi hoạt động nâng cao năng lực công nghệ cho SV
              </div>
              <div className="card__desc">Học cùng ET qua từng video</div>
              <div className="card_btn">Xem chi tiết</div>
            </div>
            <div className="techCorner__card">
              <div className="card__image">
                <img src="/img/Tech-Corner3.png" alt />
              </div>
              <div className="card__name">Tổng hợp các cuộc thi công nghệ</div>
              <div className="card__desc">
                Nơi tỏa sáng tri thức những tài năng công nghệ
              </div>
              <div className="card_btn">Xem chi tiết</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechConer;
