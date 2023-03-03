/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./FilterAndActivitiesCard.scss";
const FilterAndActivitiesCard = () => {
  React.useEffect(() => {
    document
      .querySelector(".time-cover__time")
      .addEventListener("click", () => {
        document
          .querySelector(".time-cover__option")
          .classList.toggle("display");
      });

    document.querySelector(".drop-down-1").addEventListener("click", () => {
      document.querySelector(".time-cover__option").classList.toggle("display");
    });

    document
      .querySelector(".year-cover .year")
      .addEventListener("click", () => {
        document
          .querySelector(".year-cover__option")
          .classList.toggle("display");
      });

    document.querySelector(".drop-down-2").addEventListener("click", () => {
      document.querySelector(".year-cover__option").classList.toggle("display");
    });

    document
      .querySelector(".month-cover .month")
      .addEventListener("click", () => {
        document
          .querySelector(".month-cover__option")
          .classList.toggle("display");
      });

    document.querySelector(".drop-down-3").addEventListener("click", () => {
      document
        .querySelector(".month-cover__option")
        .classList.toggle("display");
    });

    document
      .querySelector(".more-cover .more")
      .addEventListener("click", () => {
        document.querySelector(".show-more").classList.add("display");
        document.querySelector(".more-cover").classList.add("display");
      });
  }, []);
  return (
    <>
      <div
        className="box-container_3"
        style={{ "max-width": "1300px", " margin": "0 auto" }}
      >
        <div className="cover-filter">
          <div className="filter ">
            <div className="popular-cover">
              <span className="popular">Phổ biến</span>
            </div>
            <span className="newest">Mới nhất</span>
            <div className="time-cover">
              <span className="time-cover__time">Thời gian</span>
              <i className="drop-down-1 fa-solid fa-angle-down" />
              {/*-------- Table chọn tháng năm ------*/}
              <div className="time-cover__option">
                <div className="time-cover__option-time d-flex">
                  <div className="year-cover">
                    <span className="year">Năm</span>
                    <i className="drop-down-2 fa-solid fa-angle-down" />
                    {/*--- year table ---*/}
                    <div className="year-cover__option">
                      <div>2022</div>
                      <div>2021</div>
                    </div>
                    {/*--- end ---*/}
                  </div>
                  <div className="month-cover">
                    <span className="month">Tháng</span>
                    <i className="drop-down-3 fa-solid fa-angle-down" />
                    {/*--- month table ---*/}
                    <div className="month-cover__option">
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                      <div>5</div>
                      <div>6</div>
                      <div>7</div>
                      <div>8</div>
                      <div>9</div>
                      <div>10</div>
                      <div>11</div>
                      <div>12</div>
                    </div>
                    {/*--- end ---*/}
                  </div>
                </div>
                <div className="time-cover__option-apply">Áp dụng</div>
              </div>
              {/*--------------- end --------------*/}
            </div>
            <span className="clear">Xóa lọc</span>
          </div>
          <div className="col-lg-1" />
        </div>
        <div className="body-3">
          <div className="cover-card row row-1">
            <a href="#" className="card card-1">
              <img
                className="card-image"
                src="/img/card-Image.png"
                alt="Image"
              />
              <span className="card-time">
                <i id="card-calendar" className="far fa-calendar-alt" /> 02/2022
              </span>
              <p className="card-heading">
                Tình hình công nghệ Việt Nam và thế giới
              </p>
            </a>
            <a href="#" className="card card-2">
              <img
                className="card-image"
                src="/img/card-Image.png"
                alt="Image"
              />
              <span className="card-time">
                <i id="card-calendar" className="far fa-calendar-alt" /> 02/2022
              </span>
              <p className="card-heading">
                Tình hình công nghệ Việt Nam và thế giới
              </p>
            </a>
            <a href="#" className="card card-3">
              <img
                className="card-image"
                src="/img/card-Image.png"
                alt="Image"
              />
              <span className="card-time">
                <i id="card-calendar" className="far fa-calendar-alt" /> 02/2022
              </span>
              <p className="card-heading">
                Tình hình công nghệ Việt Nam và thế giới
              </p>
            </a>
          </div>
          <div className="cover-card row row-2">
            <a href="#" className="card card-1">
              <img
                className="card-image"
                src="/img/card-Image.png"
                alt="Image"
              />
              <span className="card-time">
                <i id="card-calendar" className="far fa-calendar-alt" /> 02/2022
              </span>
              <p className="card-heading">
                Tình hình công nghệ Việt Nam và thế giới
              </p>
            </a>
            <a href="#" className="card card-2">
              <img
                className="card-image"
                src="/img/card-Image.png"
                alt="Image"
              />
              <span className="card-time">
                <i id="card-calendar" className="far fa-calendar-alt" /> 02/2022
              </span>
              <p className="card-heading">
                Tình hình công nghệ Việt Nam và thế giới
              </p>
            </a>
            <a href="#" className="card card-3">
              <img
                className="card-image"
                src="/img/card-Image.png"
                alt="Image"
              />
              <span className="card-time">
                <i id="card-calendar" className="far fa-calendar-alt" /> 02/2022
              </span>
              <p className="card-heading">
                Tình hình công nghệ Việt Nam và thế giới
              </p>
            </a>
          </div>
          <div className="cover-card row row-3">
            <a href="#" className="card card-1">
              <img
                className="card-image"
                src="/img/card-Image.png"
                alt="Image"
              />
              <span className="card-time">
                <i id="card-calendar" className="far fa-calendar-alt" /> 02/2022
              </span>
              <p className="card-heading">
                Tình hình công nghệ Việt Nam và thế giới
              </p>
            </a>
            <a href="#" className="card card-2">
              <img
                className="card-image"
                src="/img/card-Image.png"
                alt="Image"
              />
              <span className="card-time">
                <i id="card-calendar" className="far fa-calendar-alt" /> 02/2022
              </span>
              <p className="card-heading">
                Tình hình công nghệ Việt Nam và thế giới
              </p>
            </a>
            <a href="#" className="card card-3">
              <img
                className="card-image"
                src="/img/card-Image.png"
                alt="Image"
              />
              <span className="card-time">
                <i id="card-calendar" className="far fa-calendar-alt" /> 02/2022
              </span>
              <p className="card-heading">
                Tình hình công nghệ Việt Nam và thế giới
              </p>
            </a>
          </div>
          <div className="cover-card row row-4">
            <a href="#" className="card card-1">
              <img
                className="card-image"
                src="/img/card-Image.png"
                alt="Image"
              />
              <span className="card-time">
                <i id="card-calendar" className="far fa-calendar-alt" /> 02/2022
              </span>
              <p className="card-heading">
                Tình hình công nghệ Việt Nam và thế giới
              </p>
            </a>
            <a href="#" className="card card-2">
              <img
                className="card-image"
                src="/img/card-Image.png"
                alt="Image"
              />
              <span className="card-time">
                <i id="card-calendar" className="far fa-calendar-alt" /> 02/2022
              </span>
              <p className="card-heading">
                Tình hình công nghệ Việt Nam và thế giới
              </p>
            </a>
            <a href="#" className="card  card-3">
              <img
                className="card-image"
                src="/img/card-Image.png"
                alt="Image"
              />
              <span className="card-time">
                <i id="card-calendar" className="far fa-calendar-alt" /> 02/2022
              </span>
              <p className="card-heading">
                Tình hình công nghệ Việt Nam và thế giới
              </p>
            </a>
          </div>
          <div className="more-cover">
            <span className="more">Xem thêm</span>
          </div>
          {/*-------------- Hiện thêm 12 card ---------------------*/}
          <div className="show-more">
            <div className="cover-card row row-5">
              <a href="#" className="card card-1">
                <img
                  className="card-image"
                  src="/img/card-Image.png"
                  alt="Image"
                />
                <span className="card-time">
                  <i id="card-calendar" className="far fa-calendar-alt" />{" "}
                  02/2022
                </span>
                <p className="card-heading">
                  Tình hình công nghệ Việt Nam và thế giới
                </p>
              </a>
              <a href="#" className="card card-2">
                <img
                  className="card-image"
                  src="/img/card-Image.png"
                  alt="Image"
                />
                <span className="card-time">
                  <i id="card-calendar" className="far fa-calendar-alt" />{" "}
                  02/2022
                </span>
                <p className="card-heading">
                  Tình hình công nghệ Việt Nam và thế giới
                </p>
              </a>
              <a href="#" className="card card-3">
                <img
                  className="card-image"
                  src="/img/card-Image.png"
                  alt="Image"
                />
                <span className="card-time">
                  <i id="card-calendar" className="far fa-calendar-alt" />{" "}
                  02/2022
                </span>
                <p className="card-heading">
                  Tình hình công nghệ Việt Nam và thế giới
                </p>
              </a>
            </div>
            <div className="cover-card row row-6">
              <a href="#" className="card card-1">
                <img
                  className="card-image"
                  src="/img/card-Image.png"
                  alt="Image"
                />
                <span className="card-time">
                  <i id="card-calendar" className="far fa-calendar-alt" />{" "}
                  02/2022
                </span>
                <p className="card-heading">
                  Tình hình công nghệ Việt Nam và thế giới
                </p>
              </a>
              <a href="#" className="card card-2">
                <img
                  className="card-image"
                  src="/img/card-Image.png"
                  alt="Image"
                />
                <span className="card-time">
                  <i id="card-calendar" className="far fa-calendar-alt" />{" "}
                  02/2022
                </span>
                <p className="card-heading">
                  Tình hình công nghệ Việt Nam và thế giới
                </p>
              </a>
              <a href="#" className="card card-3">
                <img
                  className="card-image"
                  src="/img/card-Image.png"
                  alt="Image"
                />
                <span className="card-time">
                  <i id="card-calendar" className="far fa-calendar-alt" />{" "}
                  02/2022
                </span>
                <p className="card-heading">
                  Tình hình công nghệ Việt Nam và thế giới
                </p>
              </a>
            </div>
            <div className="cover-card row row-7">
              <a href="#" className="card card-1">
                <img
                  className="card-image"
                  src="/img/card-Image.png"
                  alt="Image"
                />
                <span className="card-time">
                  <i id="card-calendar" className="far fa-calendar-alt" />{" "}
                  02/2022
                </span>
                <p className="card-heading">
                  Tình hình công nghệ Việt Nam và thế giới
                </p>
              </a>
              <a href="#" className="card card-2">
                <img
                  className="card-image"
                  src="/img/card-Image.png"
                  alt="Image"
                />
                <span className="card-time">
                  <i id="card-calendar" className="far fa-calendar-alt" />{" "}
                  02/2022
                </span>
                <p className="card-heading">
                  Tình hình công nghệ Việt Nam và thế giới
                </p>
              </a>
              <a href="#" className="card card-3">
                <img
                  className="card-image"
                  src="/img/card-Image.png"
                  alt="Image"
                />
                <span className="card-time">
                  <i id="card-calendar" className="far fa-calendar-alt" />{" "}
                  02/2022
                </span>
                <p className="card-heading">
                  Tình hình công nghệ Việt Nam và thế giới
                </p>
              </a>
            </div>
            <div className="cover-card row row-8">
              <a href="#" className="card card-1">
                <img
                  className="card-image"
                  src="/img/card-Image.png"
                  alt="Image"
                />
                <span className="card-time">
                  <i id="card-calendar" className="far fa-calendar-alt" />{" "}
                  02/2022
                </span>
                <p className="card-heading">
                  Tình hình công nghệ Việt Nam và thế giới
                </p>
              </a>
              <a href="#" className="card card-2">
                <img
                  className="card-image"
                  src="/img/card-Image.png"
                  alt="Image"
                />
                <span className="card-time">
                  <i id="card-calendar" className="far fa-calendar-alt" />{" "}
                  02/2022
                </span>
                <p className="card-heading">
                  Tình hình công nghệ Việt Nam và thế giới
                </p>
              </a>
              <a href="#" className="card  card-3">
                <img
                  className="card-image"
                  src="/img/card-Image.png"
                  alt="Image"
                />
                <span className="card-time">
                  <i id="card-calendar" className="far fa-calendar-alt" />{" "}
                  02/2022
                </span>
                <p className="card-heading">
                  Tình hình công nghệ Việt Nam và thế giới
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterAndActivitiesCard;
