/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./techconer.scss";
import { Link } from 'react-router-dom';
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
              <Link to="/tech-corner/ban-tin-ET" className="card_btn block">Đọc ngay</Link>
            </div>
            <div className="techCorner__card">
              <div className="card__image">
                <img src="/img/Tech-Corner2.png" alt />
              </div>
              <div className="card__name">
                Chuỗi hoạt động nâng cao năng lực công nghệ cho SV
              </div>
              <div className="card__desc">Học cùng ET qua từng video</div>
              <Link to="/tech-corner/chuoi-hoat-dong" className="card_btn block">Xem chi tiết</Link>
            </div>
            <div className="techCorner__card">
              <div className="card__image">
                <img src="/img/Tech-Corner3.png" alt />
              </div>
              <div className="card__name">Tổng hợp các cuộc thi công nghệ</div>
              <div className="card__desc">
                Nơi tỏa sáng tri thức những tài năng công nghệ
              </div>
              <Link to="/tech-corner/cuoc-thi-cong-nghe" className="card_btn block">Xem chi tiết</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechConer;
