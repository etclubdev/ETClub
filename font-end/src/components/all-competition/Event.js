/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./event.scss";
import dayjs from 'dayjs';
const Event = ({ data }) => {
  return (
    <div className="competition">
      <div className="left">
        <div className="event_desc">
          <div className="event_name">
            <p>{data?.name}</p>
          </div>
          <div className="event_time">
            <div>{dayjs(data?.date).format("DD/MM/YYYY")}</div>
            <div>- {dayjs(data?.end_date).format("DD/MM/YYYY")}</div>
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
          <img src={`${data?.portrait_poster}`} alt />
        </div>
      </div>
    </div>
  );
};

export default Event;
