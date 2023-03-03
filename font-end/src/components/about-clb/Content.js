import React from "react";
import "./Content.scss";
const Content = () => {
  return (
    <div className="container-content">
      <div className="content-name">
        CHÀO MỪNG ĐẾN VỚI <br />
        CLB CÔNG NGHỆ KINH TẾ
      </div>
      {/* Mobile content */}
      <div className="history-mobile">
        <div className="border-history-mobile">
          <h1> Lịch sử hình thành</h1>
          <div className="img-cover-mobile">
            <img src="/img/anh1.png" alt />
          </div>
          <p>
            Câu lạc bộ Công nghệ Kinh tế được chính thức thành lập vào ngày
            25/05/2018 bởi các bạn sinh viên và Ban chủ nhiệm khoa Công nghệ
            thông tin kinh doanh (BIT) trực thuộc trường Đại học Kinh tế TP. Hồ
            Chí Minh - UEH.
          </p>
        </div>
      </div>
      <div className="vision-mobile">
        <div className="border-vision-mobile">
          <h1> Tầm nhìn</h1>
          <div className="img-cover-mobile">
            <img src="/img/anh2.png" alt />
          </div>
          <p>
            Tạo ra sân chơi học thuật giúp sinh viên có cơ hội sáng tạo, phát
            triển ý tưởng của mình thành các sản phẩm ứng dụng công nghệ hiện
            đại có thể áp dụng vào mô hình hoạt động của các doanh nghiệp.{" "}
            <br /> <br /> Là cầu nối uy tín giữa các doanh nghiệp với nguồn nhân
            lực tài năng, sáng tạo trong nhóm ngành công nghệ.
          </p>
        </div>
      </div>
      <div className="mission-mobile">
        <div className="border-mission-mobile">
          <h1> Sứ mệnh</h1>
          <div className="img-cover-mobile">
            <img src="/img/anh3.png" alt />
          </div>
          <p>
            Tổ chức các cuộc thi học thuật liên quan đến việc áp dụng công nghệ
            vào lĩnh vực kinh tế. <br /> <br /> Tổ chức các buổi talkshow,
            workshop với chủ đề xoay quanh về công nghệ, kinh tế nhằm tạo điều
            kiện để sinh viên có cơ hội được định hướng nghề nghiệp rõ ràng,
            hiểu rõ hơn về chuyên ngành mình đang theo học. <br />
            <br /> Kết nối doanh nghiệp và sinh viên bằng cách hỗ trợ tuyển
            dụng. <br /> <br /> Cập nhật kiến thức về Công Nghệ - Kinh Tế cho
            sinh viên.
          </p>
        </div>
      </div>
      {/* Desktop Content */}
      <div className="history">
        <div className="border-history">
          <h1> Lịch sử hình thành</h1>
          <p>
            Câu lạc bộ Công nghệ Kinh tế được chính thức thành lập vào ngày
            25/05/2018 bởi các bạn sinh viên và Ban chủ nhiệm khoa Công nghệ
            thông tin kinh doanh (BIT) trực thuộc trường Đại học Kinh tế TP. Hồ
            Chí Minh - UEH.
          </p>
        </div>
        <div className="img-cover">
          <img src="/img/anh1.png" alt />
        </div>
      </div>
      <div className="ImgInLeft">
        <div className="vision">
          <div className="div-empty"></div>
          <div className="border-vision">
            <h1> Tầm nhìn</h1>
            <p>
              Tạo ra sân chơi học thuật giúp sinh viên có cơ hội sáng tạo, phát
              triển ý tưởng của mình thành các sản phẩm ứng dụng công nghệ hiện
              đại có thể áp dụng vào mô hình hoạt động của các doanh nghiệp.{" "}
              <br /> <br /> Là cầu nối uy tín giữa các doanh nghiệp với nguồn
              nhân lực tài năng, sáng tạo trong nhóm ngành công nghệ.
            </p>
          </div>
          <div className="img-cover">
            <img src="/img/anh2.png" alt />
          </div>
        </div>
      </div>
      <div className="mission">
        <div className="border-mission">
          <h1> Sứ mệnh</h1>
          <p>
            Tổ chức các cuộc thi học thuật liên quan đến việc áp dụng công nghệ
            vào lĩnh vực kinh tế. <br /> <br /> Tổ chức các buổi talkshow,
            workshop với chủ đề xoay quanh về công nghệ, kinh tế nhằm tạo điều
            kiện để sinh viên có cơ hội được định hướng nghề nghiệp rõ ràng,
            hiểu rõ hơn về chuyên ngành mình đang theo học. <br /> <br /> Kết
            nối doanh nghiệp và sinh viên bằng cách hỗ trợ tuyển dụng. <br />{" "}
            <br /> Cập nhật kiến thức về Công Nghệ - Kinh Tế cho sinh viên.
          </p>
        </div>
        <div className="img-cover">
          <img src="/img/anh3.png" alt />
        </div>
      </div>
    </div>
  );
};

export default Content;
