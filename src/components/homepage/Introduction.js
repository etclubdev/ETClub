/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./introduction.scss";
const Introduction = () => {
  return (
    <div>
      <div id="introduce" className="container-fluid">
        <div className="row">
          <h1 className="text-center mx-auto">GIỚI THIỆU</h1>
        </div>
        <div className="row d-flex justify-content-between align-items-center introduction-content">
          <div className="col-lg-5 col-12 introduction-content-left p-0">
            <p className="introduction-content__content p-0">
              Câu lạc bộ Công nghệ Kinh tế được chính thức thành lập vào ngày
              25/05/2018 trực thuộc Liên Chi hội Sinh viên khoa Công nghệ thông
              tin kinh doanh, trực thuộc Hội Sinh viên trường Đại học Kinh tế
              TP. Hồ Chí Minh - UEH. Hơn 3 năm hình thành và phát triển, Câu lạc
              bộ vẫn đang không ngừng hoàn thiện và dần chứng tỏ được vị thế của
              mình với những hoạt động, sự kiện, dự án trau dồi kiến thức học
              thuật cho sinh viên. Tập thể các thành viên của ET CLUB chính là
              một tập thể đoàn kết, gắn bó gần gũi, chính là những mảnh ghép góp
              phần giúp Câu lạc bộ ngày càng phát triển hơn.
            </p>
            <div className="introduction-content__learn-more p-0">
              <a href="#">
                Xem thêm &nbsp;
                <i className="fas fa-long-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-1" />
          <div className="col-lg-6 col-12 introduction-content__video p-0">
            <iframe
              src="https://www.youtube.com/embed/GvfAeV1-YnI?rel=0&autoplay=1&mute=1&loop=1&showinfo=0"
              title="ET CLUB || NHỮNG SỰ KIỆN NỔI BẬT 2019 - 2021"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
