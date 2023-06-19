/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./eventReverse.scss";
const EventReverse = () => {
  return (
    <div className="competition max-sm:hidden">
      <div className="left">
        <div className="competition_image">
          <img src="/img/AllCompetitionPage/poster 1.png" alt />
        </div>
      </div>
      <div className="midle">
        <div className="truckY"></div>
        <div className="truckX-reverse"></div>
        <div className="round">
          <img src="/img/AllCompetitionPage/Group 1926.png" alt />
        </div>
      </div>
      <div className="right">
        <div className="event-reverse_desc">
          <div className="event-reverse_name">
            <p>
              ecommerce
              <br />
              exploring in the time of covid-19{" "}
            </p>
            <p></p>
          </div>
          <div className="event-reverse_time">
            <div>15/09/2021</div>
            <div>- 15/10/2021</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventReverse;
