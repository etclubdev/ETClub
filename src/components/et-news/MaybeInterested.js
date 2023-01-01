/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./MaybeInterested.scss";
const MaybeInterested = () => {
  return (
    <>
      <div style={{ "max-width": "1300px", margin: "0 auto" }}>
        <div className="news-title">
          <span className="news-title__highlight" />
          <span className="news-title__name">Có thể bạn sẽ quan tâm</span>
        </div>
        <div className="body-2">
          <div className="left-side col-md-6 col-sm-12">
            <div href="#" className="body-2-image">
              <img src="/img/image1234123.png" alt="image" />
            </div>
            <div className="body-2-info">
              <div className="body-2-info__datetime-1">
                <i id="calendar" className="far fa-calendar-alt" />
                <p className="time">02/2022</p>
              </div>
              <a href="#" className="body-2-info__title">
                Web 3.0 và nền kinh tế sáng tạo độc lập
              </a>
              <a href="#" className="body-2-info__content">
                Egestas tellus bibendum commodo aliquam felis interdum ac
                malesuada urna id massa erat sed maecenas ultrices justo amet
                dignissim egestas
              </a>
              <div className="body-2-info__datetime-2">
                <i id="calendar" className="far fa-calendar-alt" />
                <p className="time">03/2022</p>
              </div>
              <a href="#" className="body-2-info__detail">
                Xem chi tiết
              </a>
            </div>
          </div>
          <div className="right-side col-md-6 col-sm-12">
            <div href="#" className="body-2-image">
              <img src="/img/31424213agh.png" alt="image" />
            </div>
            <div className="body-2-info">
              <div className="body-2-info__datetime-1">
                <i id="calendar" className="far fa-calendar-alt" />
                <p className="time">02/2022</p>
              </div>
              <a href="#" className="body-2-info__title">
                Khi AI không chỉ biết đánh cờ
              </a>
              <a href="#" className="body-2-info__content">
                Egestas tellus bibendum commodo aliquam felis interdum ac
                malesuada urna id massa erat sed maecenas ultrices justo amet
                dignissim egestas
              </a>
              <div className="body-2-info__datetime-2">
                <i id="calendar" className="far fa-calendar-alt" />
                <p className="time">02/2022</p>
              </div>
              <a href="#" className="body-2-info__detail">
                Xem chi tiết
              </a>
            </div>
            <a href="#" className="continue-button">
              Đọc tiếp...
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MaybeInterested;
