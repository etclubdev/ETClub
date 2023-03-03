/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./videocard.scss";
const VideoCard = () => {
  return (
    <div className="videocard">
      <div className="videocard__image">
        <img src="/img/image101.jpg" alt />
      </div>
      <div className="videocard__desc">
        <div className="videocard__desc-title">
          Topic 28: Dùng Chorme đã lâu liệu bạn đã biết đến các extension hay ho
          này hay chưa
        </div>
      </div>
      <div className="videocard__seeding">
        <div className="seen">
          <img src="/img/seen.png" alt />
          <p>45</p>
        </div>
        <div className="like">
          <img src="/img/like.png" alt />
          <p>45</p>
        </div>
      </div>
      <div className="videocard__length">3:23</div>
    </div>
  );
};

export default VideoCard;
