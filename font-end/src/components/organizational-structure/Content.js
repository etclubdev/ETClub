/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import "./Content.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
const Content = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div>
        <div className="container__organizational-structure--mobile">
          <div className="container__organizational-structure--item-mobile">
            <div className="container__organizational-structure--item-image-mobile ">
              <img src="/img/chunhiem.png" alt />
            </div>
            <div className="container__organizational-structure--item-content-mobile">
              <h2>BAN CHỦ NHIỆM</h2>
              <p>
                Ban chủ nhiệm là bộ phận tham gia quản lý và điều hành các hoạt
                động của câu lạc bộ. Đồng thời, ban còn giữ vai trò quan trọng
                trong việc đưa ra những định hướng, kế hoạch phù hợp để xây dựng
                và phát triển hình ảnh câu lạc bộ.
              </p>
              <a href="#">
                Xem chi tiết <i className="fas fa-long-arrow-alt-right" />
              </a>
            </div>
          </div>
          <div className="container__organizational-structure--item-mobile">
            <div className="container__organizational-structure--item-image-mobile ">
              <img src="/img/doingoai.png" alt />
            </div>
            <div className="container__organizational-structure--item-content-mobile">
              <h2>BAN ĐỐI NGOẠI</h2>
              <p>
                Ban Đối ngoại giữ vai trò quan trọng trong việc vận động, tìm
                kiếm các nguồn tài trợ cho câu lạc bộ. Song song đó, ban cũng
                đảm nhận việc tạo dựng các mối quan hệ lâu dài với các tổ chức
                bên ngoài nhằm giao lưu, học hỏi, tìm kiếm cơ hội hợp tác.
              </p>
              <Link to='/introduce/cocaunhansu/ban-er'>
                Xem chi tiết <i className="fas fa-long-arrow-alt-right" />
              </Link>
            </div>
          </div>
          <div className="container__organizational-structure--item-mobile">
            <div className="container__organizational-structure--item-image-mobile ">
              <img src="/img/nhansu.png" alt />
            </div>
            <div className="container__organizational-structure--item-content-mobile">
              <h2>
                BAN <br />
                NHÂN SỰ - TỔ CHỨC
              </h2>
              <p>
                Ban Nhân sự - Tổ chức đảm nhận các công việc liên quan đến việc
                quản lý nhân sự nội bộ, nhằm tạo nên sự kết nối giữa các tất cả
                cộng tác viên và thành viên của câu lạc bộ. Bên cạnh đó, công
                việc trong mảng tổ chức hỗ trợ cho các công tác hành chính nội
                bộ cũng do ban Nhân sự - Tổ chức nắm chính.
              </p>
              <Link to='/introduce/cocaunhansu/ban-nhan-su'>
                Xem chi tiết <i className="fas fa-long-arrow-alt-right" />
              </Link>
            </div>
          </div>
          <div className="container__organizational-structure--item-mobile">
            <div className="container__organizational-structure--item-image-mobile ">
              <img src="/img/sukien.png" alt />
            </div>
            <div className="container__organizational-structure--item-content-mobile">
              <h2>BAN SỰ KIỆN</h2>
              <p>
                Sự thành công của mỗi chương trình diễn ra đều không thể thiếu
                đi ban sự kiện. Ban là bộ phận xây dựng kế hoạch điều phối một
                cách chi tiết, từ những bước hậu cần đơn giản cho đến việc điều
                phối chương trình, dự trù rủi ro và phân công nhân sự sao cho
                phù hợp nhất.
              </p>
              <Link to='/introduce/cocaunhansu/ban-event'>
                Xem chi tiết <i className="fas fa-long-arrow-alt-right" />
              </Link>
            </div>
          </div>
          <div className="container__organizational-structure--item-mobile">
            <div className="container__organizational-structure--item-image-mobile ">
              <img src="/img/truyenthong.png" alt />
            </div>
            <div className="container__organizational-structure--item-content-mobile">
              <h2>BAN TRUYỀN THÔNG VÀ THƯƠNG MẠI ĐIỆN TỬ</h2>
              <p>
                Ban Truyền thông và Thương mại điện tử phụ trách xây dựng các
                kênh truyền thông của câu lạc bộ, nhằm truyền tải thông tin về
                các sự kiện của câu lạc bộ và nội dung chia sẻ về các kiến thức
                học thuật, thương mại điện tử hữu ích đến sinh viên. Ngoài ra,
                ban còn là bộ phận nắm chính trong việc tổ chức các dự án, cuộc
                thi nhằm hỗ trợ sinh viên tiếp cận nhanh và hiệu quả nhất đến
                với lĩnh vực này.
              </p>
              <Link to='/introduce/cocaunhansu/ban-pr'>
                Xem chi tiết <i className="fas fa-long-arrow-alt-right" />
              </Link>
            </div>
          </div>
          <div className="container__organizational-structure--item-mobile">
            <div className="container__organizational-structure--item-image-mobile ">
              <img src="/img/media.png" alt />
            </div>
            <div className="container__organizational-structure--item-content-mobile">
              <h2>BAN MEDIA</h2>
              <p>
                Sự thành công của mỗi chương trình diễn ra đều không thể thiếu
                đi ban sự kiện. Ban là bộ phận xây dựng kế hoạch điều phối một
                cách chi tiết, từ những bước hậu cần đơn giản cho đến việc điều
                phối chương trình, dự trù rủi ro và phân công nhân sự sao cho
                phù hợp nhất.
              </p>
              <a href="#">
                Xem chi tiết <i className="fas fa-long-arrow-alt-right" />
              </a>
            </div>
          </div>
          <div className="container__organizational-structure--item-mobile">
            <div className="container__organizational-structure--item-image-mobile ">
              <img src="/img/congnghe.png" alt />
            </div>
            <div className="container__organizational-structure--item-content-mobile">
              <h2>
                BAN <br />
                KỸ THUẬT CÔNG NGHỆ
              </h2>
              <p>
                Ban Kỹ thuật công nghệ có nhiệm vụ xây dựng và phát triển các
                phần mềm, website hoặc dữ liệu cho các dự án công nghệ của câu
                lạc bộ. Không những thế, ban còn đảm nhận việc xây dựng nội dung
                học thuật cho các cuộc thi, chia sẻ những kiến thức và kỹ năng
                sử dụng IT, tạo nên xu hướng công nghệ cho sinh viên UEH.
              </p>
              <Link to='/introduce/cocaunhansu/ban-tech'>
                Xem chi tiết <i className="fas fa-long-arrow-alt-right" />
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="container__organizational-structure">
          <div className="row container__organizational-structure--item">
            <div className="col-6 container__organizational-structure--item-image ">
              <img src="/img/chunhiem.png" alt />
            </div>
            <div
              className="col-6 container__organizational-structure--item-content"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-easing="linear"
              data-aos-duration={1500}
            >
              <h2>BAN CHỦ NHIỆM</h2>
              <p>
                Ban chủ nhiệm là bộ phận tham gia quản lý và điều hành các hoạt
                động của câu lạc bộ. Đồng thời, ban còn giữ vai trò quan trọng
                trong việc đưa ra những định hướng, kế hoạch phù hợp để xây dựng
                và phát triển hình ảnh câu lạc bộ.
              </p>
              <a href="#">
                Xem chi tiết <i className="fas fa-long-arrow-alt-right" />
              </a>
            </div>
            <div className="day">
              <img src="/img/day.png" alt />
            </div>
          </div>
          <div className="row container__organizational-structure--item left">
            <div
              className="col-6 container__organizational-structure--item-content"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-easing="linear"
              data-aos-duration={1500}
            >
              <h2>BAN ĐỐI NGOẠI</h2>
              <p>
                Ban Đối ngoại giữ vai trò quan trọng trong việc vận động, tìm
                kiếm các nguồn tài trợ cho câu lạc bộ. Song song đó, ban cũng
                đảm nhận việc tạo dựng các mối quan hệ lâu dài với các tổ chức
                bên ngoài nhằm giao lưu, học hỏi, tìm kiếm cơ hội hợp tác.
              </p>
              <Link to='/introduce/cocaunhansu/ban-er'>
                Xem chi tiết <i className="fas fa-long-arrow-alt-right" />
              </Link>
            </div>
            <div className="col-6 container__organizational-structure--item-image ">
              <img src="/img/chunhiem.png" alt />
            </div>
            <div className="dayleft">
              <img src="/img/dayleft.png" alt />
            </div>
          </div>
          <div className="row container__organizational-structure--item hr">
            <div className="col-6 container__organizational-structure--item-image ">
              <img src="/img/chunhiem.png" alt />
            </div>
            <div
              className="col-6 container__organizational-structure--item-content"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-easing="linear"
              data-aos-duration={1500}
            >
              <h2>
                BAN <br />
                NHÂN SỰ - TỔ CHỨC
              </h2>
              <p>
                Ban Nhân sự - Tổ chức đảm nhận các công việc liên quan đến việc
                quản lý nhân sự nội bộ, nhằm tạo nên sự kết nối giữa các tất cả
                cộng tác viên và thành viên của câu lạc bộ. Bên cạnh đó, công
                việc trong mảng tổ chức hỗ trợ cho các công tác hành chính nội
                bộ cũng do ban Nhân sự - Tổ chức nắm chính.
              </p>
              <Link to='/introduce/cocaunhansu/ban-nhan-su'>
                Xem chi tiết <i className="fas fa-long-arrow-alt-right" />
              </Link>
            </div>
            <div className="day">
              <img src="/img/day.png" alt />
            </div>
          </div>
          <div className="row container__organizational-structure--item left event">
            <div
              className="col-6 container__organizational-structure--item-content"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-easing="linear"
              data-aos-duration={1500}
            >
              <h2>BAN SỰ KIỆN</h2>
              <p>
                Sự thành công của mỗi chương trình diễn ra đều không thể thiếu
                đi ban sự kiện. Ban là bộ phận xây dựng kế hoạch điều phối một
                cách chi tiết, từ những bước hậu cần đơn giản cho đến việc điều
                phối chương trình, dự trù rủi ro và phân công nhân sự sao cho
                phù hợp nhất.
              </p>
              <Link to='/introduce/cocaunhansu/ban-event'>
                Xem chi tiết <i className="fas fa-long-arrow-alt-right" />
              </Link>
            </div>
            <div className="col-6 container__organizational-structure--item-image">
              <img src="/img/chunhiem.png" alt />
            </div>
            <div className="dayleft">
              <img src="/img/dayleft.png" alt />
            </div>
          </div>
          <div className="row container__organizational-structure--item ec">
            <div className="col-6 container__organizational-structure--item-image">
              <img src="/img/chunhiem.png" alt />
            </div>
            <div
              className="col-6 container__organizational-structure--item-content"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-easing="linear"
              data-aos-duration={1500}
            >
              <h2>BAN TRUYỀN THÔNG VÀ THƯƠNG MẠI ĐIỆN TỬ</h2>
              <p>
                Ban Truyền thông và Thương mại điện tử phụ trách xây dựng các
                kênh truyền thông của câu lạc bộ, nhằm truyền tải thông tin về
                các sự kiện của câu lạc bộ và nội dung chia sẻ về các kiến thức
                học thuật, thương mại điện tử hữu ích đến sinh viên. Ngoài ra,
                ban còn là bộ phận nắm chính trong việc tổ chức các dự án, cuộc
                thi nhằm hỗ trợ sinh viên tiếp cận nhanh và hiệu quả nhất đến
                với lĩnh vực này.
              </p>
              <Link to='/introduce/cocaunhansu/ban-pr'>
                Xem chi tiết <i className="fas fa-long-arrow-alt-right" />
              </Link>
            </div>
            <div className="day">
              <img src="/img/day.png" alt />
            </div>
          </div>
          <div className="row container__organizational-structure--item left media">
            <div
              className="col-6 container__organizational-structure--item-content"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-easing="linear"
              data-aos-duration={1500}
            >
              <h2>BAN MEDIA</h2>
              <p>
                Sự thành công của mỗi chương trình diễn ra đều không thể thiếu
                đi ban sự kiện. Ban là bộ phận xây dựng kế hoạch điều phối một
                cách chi tiết, từ những bước hậu cần đơn giản cho đến việc điều
                phối chương trình, dự trù rủi ro và phân công nhân sự sao cho
                phù hợp nhất.
              </p>
              <a href="#">
                Xem chi tiết <i className="fas fa-long-arrow-alt-right" />
              </a>
            </div>
            <div className="col-6 container__organizational-structure--item-image">
              <img src="/img/chunhiem.png" alt />
            </div>
            <div className="dayleft">
              <img src="/img/dayleft.png" alt />
            </div>
          </div>
          <div className="row container__organizational-structure--item">
            <div className="col-6 container__organizational-structure--item-image">
              <img src="/img/chunhiem.png" alt />
            </div>
            <div
              className="col-6 container__organizational-structure--item-content"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-easing="linear"
              data-aos-duration={1500}
            >
              <h2>
                BAN <br />
                KỸ THUẬT CÔNG NGHỆ
              </h2>
              <p>
                Ban Kỹ thuật công nghệ có nhiệm vụ xây dựng và phát triển các
                phần mềm, website hoặc dữ liệu cho các dự án công nghệ của câu
                lạc bộ. Không những thế, ban còn đảm nhận việc xây dựng nội dung
                học thuật cho các cuộc thi, chia sẻ những kiến thức và kỹ năng
                sử dụng IT, tạo nên xu hướng công nghệ cho sinh viên UEH.
              </p>
              <Link to='/introduce/cocaunhansu/ban-tech'>
                Xem chi tiết <i className="fas fa-long-arrow-alt-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
