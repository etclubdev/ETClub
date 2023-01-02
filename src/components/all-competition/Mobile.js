/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./mobile.scss";
const Mobile = () => {
  return (
    <div className="competition-mobile">
      <div className="container">
        <div className="competition_timeline">
          <div className="competition_year">
            <div className="competition_year-name">2022</div>
            <div className="competition_year-event">
              <div className="competition_year-description">
                <div className="competition_status">Sắp diễn ra</div>
                <div className="competition_name">techconomy</div>
                <div className="competition_time">25/07/2022</div>
              </div>
              <div className="competition_picture">
                <img src="/img/AllCompetitionPage/global 2.png" alt />
              </div>
            </div>
            <div className="competition_line" />
            <div className="competition_point">
              <img src="/img/AllCompetitionPage/Frame 84.png" alt />
            </div>
            <div className="competition_point-small-1">
              <img src="/img/AllCompetitionPage/Frame 85.png" alt />
            </div>
            <div className="competition_line-vertical-1" />
          </div>
        </div>
        <div className="competition_timeline">
          <div className="competition_year">
            <div className="competition_year-name">2021</div>
            <div className="competition_year-event">
              <div className="competition_year-description">
                <div className="competition_name">
                  ECOMMERCE EXPLORING IN THE TIME OF COVID-19
                </div>
                <div className="competition_time">15/09/2021 - 15/10/2021</div>
              </div>
              <div className="competition_picture">
                <img src="/img/AllCompetitionPage/poster 1.png" alt />
              </div>
            </div>
            <div className="competition_line" />
            <div className="competition_point">
              <img src="/img/AllCompetitionPage/Frame 84.png" alt />
            </div>
            <div className="competition_point-small-1">
              <img src="img/AllCompetitionPage/Frame 85.png" alt />
            </div>
            <div className="competition_line-vertical-1" />
          </div>
        </div>
        <div className="competition_timeline">
          <div className="competition_year">
            <div className="competition_year-name">2020</div>
            <div className="competition_year-event">
              <div className="competition_year-description">
                <div className="competition_name">
                  global talents chuyển đổi số cho tương lai
                </div>
                <div className="competition_time">10/02/2020 - 24/05/2020</div>
              </div>
              <div className="competition_picture">
                <img src="/img/AllCompetitionPage/global 2.png" alt />
              </div>
            </div>
            <div className="competition_line" />
            <div className="competition_point">
              <img src="/img/AllCompetitionPage/Frame 84.png" alt />
            </div>
            <div className="competition_point-small-1">
              <img src="img/Frame 85.png" alt />
            </div>
            <div className="competition_line-vertical-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
