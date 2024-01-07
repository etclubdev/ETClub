/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState } from "react";

import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import "./header.scss";
import { ArrowDown2, CloseCircle, HambergerMenu } from 'iconsax-react'
const Header = () => {
  const { pathname } = useLocation();
  const id = pathname.substring(pathname.lastIndexOf('/') + 1);

  const handleClick = (div) => {
    if (pathname === "/") {
      const element = document.querySelector("#" + div);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [show, setShow] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [showTech, setShowTech] = useState(false);
  const [showCompetition, setShowCompetition] = useState(false);
  const [back, setBack] = useState(false);
  const handleClickIcon = () => {
    setShow((show) => !show);
  };
  const handleClickIntro = () => {
    setShowIntro((prev) => !prev);
  };
  const handleClickTech = () => {
    setShowTech((prev) => !prev);
  };
  const handleClickCompetition = () => {
    setShowCompetition((prev) => !prev);
  };
  const handleBackMenu = () => {
    setBack((prev) => !prev);
    setShowIntro(false);
    setShowTech(false);
    setShowCompetition(false);
  };
  const handleClickBtn = () => {
    setShow(false);
  };
  return (
    <Fragment>
      <div className="menu-area">
        <div className="cover-nav-destop">
          <div className="nav-destop nav-container row p-0 m-auto">
            <div className="logo col-4">
              <Link to="/">
                <img
                  className="logo_img"
                  src="/img/Logo-ET.png"
                  alt="Logo ET"
                />
              </Link>
              <Link to="/" className="logo_text">
                Economic Technology
              </Link>
            </div>

            <nav className="nav col-8">
              <Link
                to="/"
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
              >
                <span>Trang chủ</span>{" "}
              </Link>

              <div
                className="nav-link nav-link__introduce"
                onClick={() => handleClick("introduce")}
              >
                <Link
                  className={` ${pathname === "/introduce/about-clb" ||
                    pathname === "/introduce/cocaunhansu" || pathname === `/introduce/cocaunhansu/${id}`
                    ? " active"
                    : ""
                    }`}
                >
                  <span>
                    Giới thiệu <i className="fas fa-angle-down"></i>
                  </span>{" "}
                </Link>

                <div className="more-link">
                  <div className="more__border"></div>
                  <Link to="/introduce/about-clb">
                    <li>Về CLB</li>
                  </Link>
                  <hr />
                  <Link to="/introduce/cocaunhansu">
                    <li>Cơ cấu nhân sự</li>
                  </Link>
                </div>
              </div>
              <div className="nav-link nav-link__grTechnology">
                <Link
                  onClick={() => handleClick("tech-corner")}
                  className={` ${pathname === "/tech-corner/ban-tin-ET" ||
                    pathname === `/tech-corner/ban-tin-ET/${id}` ||
                    pathname === "/tech-corner/chuoi-hoat-dong" ||
                    pathname === "/tech-corner/cuoc-thi-cong-nghe" ||
                    pathname === `/tech-corner/cuoc-thi/${id}`
                    ? " active"
                    : ""
                    }`}
                >
                  <span>
                    Góc công nghệ <i className="fas fa-angle-down"></i>
                  </span>
                </Link>

                <div className="more-link">
                  <div className="more__border"></div>
                  <Link to="/tech-corner/ban-tin-ET">
                    <li>Bản tin ET</li>
                  </Link>
                  <hr />
                  <Link to="/tech-corner/chuoi-hoat-dong">
                    <li>
                      Chuỗi hoạt động hướng dẫn nâng cao năng lực công nghệ cho
                      SV
                    </li>
                  </Link>
                  <hr />
                  <Link to="/tech-corner/cuoc-thi-cong-nghe">
                    <li>Các cuộc thi về công nghệ</li>
                  </Link>
                </div>
              </div>
              <div className="nav-link nav-link__contest">
                <Link
                  onClick={() => handleClick("cuoc-thi")}
                  className={` ${pathname === "/cuoc-thi/techconomy" ||
                    pathname === "/cuoc-thi/tat-ca-cuoc-thi"
                    ? " active"
                    : ""
                    }`}
                >
                  <span>
                    Cuộc thi <i className="fas fa-angle-down"></i>
                  </span>
                </Link>

                <div className="more-link">
                  <div className="more__border"></div>
                  {/* <Link to="/cuoc-thi/techconomy">
                    <li>Techconomy</li>
                  </Link> */}
                  <hr />
                  <Link to="/cuoc-thi/tat-ca-cuoc-thi">
                    <li>Tất cả các cuộc thi</li>
                  </Link>
                </div>
              </div>
              {/* <Link
                to="/tuyen-ctv"
                className={` ${pathname === "/tuyen-ctv" ? "nav-link active" : "nav-link"
                  }`}
              >
                <span>Tuyển CTV</span>
              </Link> */}
            </nav>
          </div>
        </div>
        <div className="cover-nav-mobile w-full">
          <div className="nav-mobile w-full">
            <div className="logo">
              <img src="/img/Logo-ET.png" alt="Logo ET" />
              <Link to='/'>Economic Technology</Link>
            </div>
            <HambergerMenu onClick={handleClickIcon} size="32" color="#FFFFFF" />
            {/* <i
              id="menu-mobile"
              onClick={handleClickIcon}
              className="fas fa-bars"
            /> */}
          </div>
          <nav className={`side-bar ${show ? "show" : ""}`}>
            <CloseCircle className={`icon-close ${showIntro || showCompetition || showTech ? "invisible" : ""
              }`} onClick={handleClickIcon} size="32" color="#FFFFFF" />
            {/* <i
              className={`far fa-times icon-close ${showIntro || showCompetition || showTech ? "invisible" : ""
                }`}
              onClick={handleClickIcon}
            /> */}
            <ul
              className={`side-bar__menu ${showIntro || showCompetition || showTech ? "invisible" : ""
                }`}
            >
              <div>
                <Link to="/" onClick={handleClickBtn}>
                  <li className="active">
                    <div className='py-2'>
                      <a className="homepage-btn">
                        Trang chủ
                      </a></div>
                    <hr className="divider-1" />
                  </li>
                </Link>
              </div>

              <li>
                <a href="#" className="intro-btn" onClick={handleClickIntro}>
                  Giới thiệu
                  <ArrowDown2 size="32" color="#FFFFFF" />
                </a>
                <hr className="divider-2" />
                <ul
                  className={`intro-show ${showIntro ? "show1 visible" : ""}`}
                >
                  {/* <i
                    id="previous-1"
                    onClick={handleBackMenu}
                    className="fas fa-angle-down"
                  /> */}
                  <CloseCircle onClick={handleBackMenu} />
                  <Link to="/introduce/about-clb" onClick={handleClickBtn}>
                    <li>
                      Về CLB
                      <hr />
                    </li>
                  </Link>
                  <Link to="/introduce/cocaunhansu" onClick={handleClickBtn}>
                    <li>
                      Cơ cấu tổ chức
                      <hr />
                    </li>
                  </Link>
                </ul>
              </li>
              <li>
                <a href="#" className="tech-btn" onClick={handleClickTech}>
                  Góc công nghệ
                  <ArrowDown2 size="32" color="#FFFFFF" />
                </a>
                <hr className="divider-3" />
                <ul className={`tech-show ${showTech ? "show2 visible" : ""}`}>
                  {/* <i
                    id="previous-2"
                    onClick={handleBackMenu}
                    className="fas fa-angle-down"
                  /> */}
                  <CloseCircle onClick={handleBackMenu} />
                  <Link to="/tech-corner/ban-tin-ET" onClick={handleClickBtn}>
                    <li>
                      Bản tin ET
                      <hr />
                    </li>
                  </Link>
                  <Link
                    to="/tech-corner/chuoi-hoat-dong"
                    onClick={handleClickBtn}
                  >
                    <li>
                      Chuỗi hoạt động hướng dẫn nâng cao năng lực công nghệ cho
                      sinh viên
                      <hr />
                    </li>
                  </Link>
                  <Link
                    to="/tech-corner/cuoc-thi-cong-nghe"
                    onClick={handleClickBtn}
                  >
                    <li>
                      Các cuộc thi về công nghệ
                      <hr />
                    </li>
                  </Link>
                </ul>
              </li>
              <li>
                <a
                  href="#"
                  className="competition-btn"
                  onClick={handleClickCompetition}
                >
                  Cuộc thi
                  <ArrowDown2 size="32" color="#FFFFFF" />
                </a>
                <hr
                  className={`divider-4 ${showCompetition ? "toggle-color" : ""
                    }`}
                />
                <ul
                  className={`competition-show ${showCompetition ? "show3 visible" : ""
                    }`}
                >
                  {/* <i
                    id="previous-3"
                    onClick={handleBackMenu}
                    className="fas fa-angle-down"
                  /> */}
                  <CloseCircle onClick={handleBackMenu} />
                  {/* <Link
                    to="/cuoc-thi/techconomy"
                    onClick={handleClickBtn}
                  >
                    <li>
                      Techconomy
                      <hr />
                    </li>
                  </Link> */}
                  <Link
                    to="/cuoc-thi/tat-ca-cuoc-thi"
                    onClick={handleClickBtn}
                  >
                    <li>
                      Tất cả các cuộc thi
                      <hr />
                    </li>
                  </Link>
                </ul>
              </li>
              {/* <Link to="/tuyen-ctv" onClick={handleClickBtn}>
                <li>
                  <a className="CTV-btn">Tuyển CTV</a>
                  <hr className="divider-5" />
                </li>
              </Link> */}
            </ul>
          </nav>
          <div className="background-blur" onClick={handleClickIcon}></div>
        </div>
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Header;
