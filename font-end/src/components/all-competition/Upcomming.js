/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./upcomming.scss";
import dayjs from 'dayjs';
const Upcomming = ({ data }) => {

  return (
    <div className="competition max-sm:hidden">
      <div className="left">
        <div className="competition_desc max-w-[400px]">
          <div className="competition_status">Sắp diễn ra</div>
          <div className="competition_name text-center">{data?.name}</div>
          <div className="competition_time">{dayjs(data?.date).format("DD/MM/YYYY")}</div>
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
          {/* <img src="/img/AllCompetitionPage/global 2.png" alt /> */}
          <img className='' src={`${data?.portrait_poster}`} alt />
        </div>
      </div>
    </div>
  );
};

export default Upcomming;
