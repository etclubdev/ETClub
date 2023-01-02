/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./event.scss";
const Event = () => {
  return (
    <div className="competition">
      <div className="left">
        <div className="event_desc">
          <div className="event_name">
            <p>global talents</p>
            <p></p>
            <p>Chuyển đổi số cho tương lai </p>
          </div>
          <div className="event_time">
            <div>10/02/2020</div>
            <div>- 24/05/2020</div>
          </div>
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

export default Event;
