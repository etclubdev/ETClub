import React from "react";
import "./timelineup.scss";
const TimelineUp = () => {
  return (
    <>
      <div className="timeline-time-up">
        <h5>15/09 - 25/09/2021</h5>
      </div>
      <div className="timeline-center-up">
        <div className="timeline-center-up__border"></div>
        <div
          className="timeline-center-up__img--desktop"
          id="timeline-center-up__img--desktop"
        >
          <img src="/img/InfoContestPage/resize-img.png" alt />
        </div>
        <div className="timeline-center-up__img--mobile">
          <img src="/img/InfoContestPage/msi.png" alt />
        </div>
      </div>
      <div className="timeline-title__up-ecommerce">
        <h5>Trắc nghiệm online</h5>
      </div>
      <div className="timeline-title__up-global1">
        <h5>Trắc nghiệm online</h5>
      </div>
      <div className="timeline-title__up-global2">
        <h5>Dự án thực tế</h5>
      </div>
    </>
  );
};

export default TimelineUp;
