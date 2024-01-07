/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./eventReverse.scss";
import dayjs from 'dayjs';
const EventReverse = ({ data }) => {

  return (
    <div className="competition max-sm:hidden">
      <div className="left">
        <div className="competition_image">
          <img src={`${data?.portrait_poster}`} alt />
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
          <div className="event-reverse_name max-w-[400px]">
            <p>
              {data?.name}
            </p>
            <p></p>
          </div>
          <div className="event-reverse_time">
            <div>{dayjs(data?.date).format("DD/MM/YYYY")}</div>
            <div>- {dayjs(data?.end_date).format("DD/MM/YYYY")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventReverse;
