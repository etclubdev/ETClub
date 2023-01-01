/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./newestnew.scss";
const NewestNew = () => {
  return (
    <>
      <div style={{ "max-width": "1300px", margin: "0 auto" }}>
        <div className="news-title">
          <span className="news-title__highlight" />
          <span className="news-title__name">Bản tin mới nhất</span>
        </div>
        <div className="body">
          <div href="#" className="body-image">
            <img src="/img/unsplash_3fPXt37X6UQ.jpg" alt="image" />
          </div>
          <div className="col-1" />
          <div className="body-info col-lg-5">
            <div className="body-info__datetime-1">
              <i id="calendar" className="far fa-calendar-alt" />
              <p className="time">02/2022</p>
            </div>
            <a href="#" className="body-info__title">
              Sự phát triển của công nghệ Blockchain
            </a>
            <a href="#" className="body-info__content">
              Vitae sodales erat aliquam turpis mauris sit neque ornare fames
              elementum at maurias Vitae sodales erat aliquam turpis mauris sit
              neque ornare fames elementum at maurias Vitae sodales erat aliquam
              turpis mauris sit neque ornare fames elementum at maurias Vitae
              sodales erat aliquam turpis mauris sit neque ornare fames
              elementum at maurias Vitae sodales erat aliquam turpis mauris sit
              neque ornare fames elementum at maurias Vitae sodales erat aliquam
              turpis mauris sit neque ornare fames elementum at maurias Vitae
              sodales erat aliquam turpis mauris sit neque ornare fames
              elementum at maurias Vitae sodales erat aliquam turpis mauris sit
              neque ornare fames elementum at maurias
            </a>
            <div className="body-info__datetime-2">
              <i id="calendar" className="far fa-calendar-alt" />
              <p className="time">02/2022</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewestNew;
