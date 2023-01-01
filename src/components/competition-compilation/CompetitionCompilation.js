/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./competitionCompilation.scss";
const CompetitionCompilation = () => {
  return (
    <>
      <div>
        <div className="cc-name">
          <h1>
            TỔNG HỢP
            <br /> CÁC CUỘC THI CÔNG NGHỆ
          </h1>
        </div>
        <div className="container-allcompetion row">
          <div className="container-navbar ">
            {/* <div class="empty"></div> */}
            <div className="cc-navbar">
              <button className="cc-navbar__item ">
                <h6>Sắp diễn ra</h6>
              </button>
              <button className="cc-navbar__item active">
                <h6>Đang diễn ra</h6>
              </button>
              <button className="cc-navbar__item">
                <h6>Đã diễn ra</h6>
              </button>
            </div>
          </div>
          <div className="competition-poster gx-1 col-12  col-sm-6  col-xl-4 ">
            <img src="/img/Poster1.png" alt />
            <div className="competition-status">
              <button>Đang diễn ra</button>
            </div>
          </div>
          <div className="competition-poster col-12  col-sm-6  col-xl-4 ">
            <img src="/img/Poster1.png" alt />
            <div className="competition-status">
              <button>Đang diễn ra</button>
            </div>
          </div>
          <div className="competition-poster col-12  col-sm-6  col-xl-4 ">
            <img src="/img/Poster1.png" alt />
            <div className="competition-status">
              <button>Đang diễn ra</button>
            </div>
          </div>
          <div className="competition-poster col-12  col-sm-6  col-xl-4 ">
            <img src="/img/Poster1.png" alt />
            <div className="competition-status">
              <button>Đang diễn ra</button>
            </div>
          </div>
          <div className="competition-poster col-12  col-sm-6  col-xl-4 text-center">
            <img src="/img/Poster1.png" alt />
            <div className="competition-status">
              <button>Đang diễn ra</button>
            </div>
          </div>
          <div className="competition-poster col-12  col-sm-6  col-xl-4 text-center">
            <img src="/img/Poster1.png" alt />
            <div className="competition-status">
              <button>Đang diễn ra</button>
            </div>
          </div>
          <div className="competition-poster col-12  col-sm-6  col-xl-4 text-center">
            <img src="/img/Poster1.png" alt />
            <div className="competition-status">
              <button>Đang diễn ra</button>
            </div>
          </div>
          <div className="competition-poster col-12  col-sm-6  col-xl-4 text-center">
            <img src="/img/Poster1.png" alt />
            <div className="competition-status">
              <button>Đang diễn ra</button>
            </div>
          </div>
          <div className="competition-poster col-12  col-sm-6  col-xl-4 text-center">
            <img src="/img/Poster1.png" alt />
            <div className="competition-status">
              <button>Đang diễn ra</button>
            </div>
          </div>
          <div className="competition-poster col-12  col-sm-6  col-xl-4 text-center">
            <img src="/img/Poster1.png" alt />
            <div className="competition-status">
              <button>Đang diễn ra</button>
            </div>
          </div>
          <div className="competition-poster col-12  col-sm-6  col-xl-4 text-center">
            <img src="/img/Poster1.png" alt />
            <div className="competition-status">
              <button>Đang diễn ra</button>
            </div>
          </div>
          <div className="competition-poster col-12  col-sm-6  col-xl-4 text-center">
            <img src="/img/Poster1.png" alt />
            <div className="competition-status">
              <button>Đang diễn ra</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompetitionCompilation;
