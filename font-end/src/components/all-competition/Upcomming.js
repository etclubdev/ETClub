/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./upcomming.scss";
const Upcomming = () => {
  return (
    <div className="competition max-sm:hidden">
      <div className="left">
        <div className="competition_desc">
          <div className="competition_status">Sắp diễn ra</div>
          <div className="competition_name">techconomy</div>
          <div className="competition_time">25/07/2022</div>
        </div>
      </div>
      <div className="midle">
        <div className="truckY"></div>
        <div className="truckX"></div>
        <div className="round">
          <img src="/img/AllCompetitionPage/Group 1926.png" alt />
        </div>
      </div>
      <div className="right">
        <div className="competition_image">
          <img src="/img/AllCompetitionPage/global 2.png" alt />
        </div>
      </div>
    </div>
  );
};

export default Upcomming;
