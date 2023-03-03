import React from "react";
import "./containerTimelineGlobal.scss";
import TimelineUnder from "./TimelineUnder";
import TimelineUp from "./TimelineUp";
const ContainerTimelineGlobal = () => {
  return (
    <div>
      <div className="row container__contest-timeline-global">
        <div className="col-3 px-0 col-timeline-upper-global text-center">
          <TimelineUp />
        </div>
        <div className="col-3 px-0 col-timeline-under-global text-center">
          <TimelineUnder />{" "}
        </div>
        <div className="col-3 px-0 col-timeline-upper-global text-center">
          <TimelineUp />
        </div>
        <div className="col-3 px-0 col-timeline-under-global text-center">
          <TimelineUnder />{" "}
        </div>
      </div>
      <div className="container__lookback-global--mobile">
        <div className="lookback__title-global--mobile">
          <h2>NHÌN LẠI HÀNH TRÌNH CUỘC THI</h2>
        </div>
        <div className="lookback__content-global--mobile">
          <p>
            Global Talents 2020 là một cuộc thi học thuật về lĩnh vực công nghệ,
            mang lại nhiều giá trị đích thực cho sinh viên. Sau suốt 4 chặng
            thi, Global Talents được diễn ra trong thời gian 4 tháng với 3012 số
            lượt thi online trong 40 ngày. Thông qua cuộc thi, ET đã tìm ra được
            những thí sinh xuất sắc nhất cùng các đề tài, dự án công nghệ tài
            năng. Hãy cùng nhìn lại những con số ấn tượng cùng ET nhé! <br />
            Với những con số ấn tượng <br />
            - 3012 - số vé thi online trong 40 ngày <br />
            - 1 - số thí sinh ngoài UEH lọt vào chung kết <br />
            - 3905 - vé online đăng ký workshop <br />- 16 triệu đồng - tổng giá
            trị giải thưởng cho vị trí quán quân <br />
            - 11k - view workshop, 1,1k - câu hỏi trong buổi workshop <br />
          </p>
        </div>
        <div className="lookback__img-global--mobile">
          <img src="/img/InfoContestPage/456.png" alt />
        </div>
      </div>
      <div className="container__lookback-global">
        <div className="lookback__title-global">
          <h2>NHÌN LẠI HÀNH TRÌNH CUỘC THI</h2>
        </div>
        <div className="row container__content-lookback-global">
          <div className="col-lg-5 lookback__content-global">
            <p>
              Global Talents 2020 là một cuộc thi học thuật về lĩnh vực công
              nghệ, mang lại nhiều giá trị đích thực cho sinh viên. Sau suốt 4
              chặng thi, Global Talents được diễn ra trong thời gian 4 tháng với
              3012 số lượt thi online trong 40 ngày. Thông qua cuộc thi, ET đã
              tìm ra được những thí sinh xuất sắc nhất cùng các đề tài, dự án
              công nghệ tài năng. Hãy cùng nhìn lại những con số ấn tượng cùng
              ET nhé! <br />
              Với những con số ấn tượng <br />
              - 3012 - số vé thi online trong 40 ngày <br />
              - 1 - số thí sinh ngoài UEH lọt vào chung kết <br />
              - 3905 - vé online đăng ký workshop <br />- 16 triệu đồng - tổng
              giá trị giải thưởng cho vị trí quán quân <br />
              - 11k - view workshop, 1,1k - câu hỏi trong buổi workshop <br />
            </p>
          </div>
          <div className="col-lg-1" />
          <div className="col-lg-6 px-1 lookback__img-global">
            <img src="/img/InfoContestPage/456.png" alt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerTimelineGlobal;
