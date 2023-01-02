/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./timelineUnder.scss";
const TimelineUnder = () => {
  return (
    <div>
      <div className="timeline-time-under">
        <h5>01/10 - 15/10/2021</h5>
      </div>
      <div className="timeline-center-under">
        <div className="timeline-center-under__border"></div>
        <div className="timeline-center-under__img--desktop">
          <img src="/img/InfoContestPage/resize-img.png" alt />
        </div>
        <div className="timeline-center-under__img--mobile">
          <img src="/img/InfoContestPage/msi.png" alt />
        </div>
      </div>
      <div className="timeline-title__under-ecommerce">
        <h5>Nghiên cứu đề tài</h5>
      </div>
      <div className="timeline-title__under-global1">
        <h5>Vòng đấu loại + Training workshop</h5>
      </div>
      <div className="timeline-title__under-global2">
        <h5>Gala chung kết</h5>
      </div>
    </div>
  );
};

export default TimelineUnder;
