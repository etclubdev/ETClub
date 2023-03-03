import React from "react";
import "./Achivement.scss";
const Achivement = () => {
  return (
    <div className="container-achievement">
      <div className="achievement-name">THÀNH TỰU ĐẠT ĐƯỢC</div>
      <div className="category-achievement row">
        <div className="achievement-year col-6 col-xl-4 text-center">
          <img src="/img/year.png" alt />
          <p>3</p>
          <h1>Năm hoạt động</h1>
        </div>
        <div className="achievement-member col-6 col-xl-4 text-center">
          <img src="/img/member.png" alt />
          <p>25</p>
          <h1>Thành viên</h1>
        </div>
        <div className="achievement-oldmember col-6 col-xl-4 text-center">
          <img src="/img/oldmember.png" alt />
          <p>120+</p>
          <h1>Cựu thành viên</h1>
        </div>
        <div className="achievement-communication col-6 col-xl-4 text-center">
          {" "}
          <img src="/img/communication.png" alt />
          <p>6</p>
          <h1>Kênh truyền thông</h1>
        </div>
        <div className="achievement-competition col-6 col-xl-4 text-center">
          {" "}
          <img src="/img/competition.png" alt />
          <p>2</p>
          <h1>Cuộc thi</h1>
        </div>
        <div className="achievement-workshop col-6 col-xl-4 text-center">
          {" "}
          <img src="/img/workshop.png" alt />
          <p>2</p>
          <h1>Workshop-Talkshow</h1>
        </div>
      </div>
    </div>
  );
};

export default Achivement;
