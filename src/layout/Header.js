/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, useRef, useState } from "react";

import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import "./header.scss";

const Header = (props) => {
  const { pathname } = useLocation();
  console.log(pathname);
  const handleClick = (div) => {
    if (pathname === "/") {
      const element = document.querySelector("#" + div);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const navbarRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY) {
  //       console.log(navbarRef);
  //       navbarRef.current.classList.add("sticky");
  //     } else {
  //       navbarRef.current.classList.remove("sticky");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  const [show, setShow] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [showTech, setShowTech] = useState(false);
  const [showCompetition, setShowCompetition] = useState(false);
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
  return (
    <Fragment>
      <div className="menu-area">
        <div className="cover-nav-destop">
          <div className="nav-destop nav-container row p-0 m-auto">
            <div className="logo col-4">
              <Link to="/">
                <img
                  className="logo_img"
                  src="./img/Logo ET.png"
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
                  className={` ${
                    pathname === "/introduce/about-clb" ||
                    pathname === "/introduce/cocaunhansu"
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
                  className={` ${
                    pathname === "/tech-corner/ban-tin-ET" ||
                    pathname === "/tech-corner/chuoi-hoat-dong" ||
                    pathname === "/tech-corner/cuoc-thi-cong-nghe"
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
                  className={` ${
                    pathname === "/cuoc-thi/techconomy" ||
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
                  <Link to="/cuoc-thi/techconomy">
                    <li>Techconomy</li>
                  </Link>
                  <hr />
                  <Link to="/cuoc-thi/tat-ca-cuoc-thi">
                    <li>Tất cả các cuộc thi</li>
                  </Link>
                </div>
              </div>
              <Link
                to="/tuyen-ctv"
                className={` ${
                  pathname === "/tuyen-ctv" ? "nav-link active" : "nav-link"
                }`}
              >
                <span>Tuyển CTV</span>
              </Link>
            </nav>
          </div>
        </div>
        <div className="cover-nav-mobile">
          <div className="nav-mobile">
            <div className="logo">
              <img src="img/Logo ET.png" alt="Logo ET" />
              <a href="#">Economic Technology</a>
            </div>
            <i
              id="menu-mobile"
              onClick={handleClickIcon}
              className="fas fa-bars"
            />
          </div>
          <nav className={`side-bar ${show ? "show" : ""}`}>
            <i
              className={`far fa-times icon-close ${
                showIntro || showCompetition || showTech ? "invisible" : ""
              }`}
              onClick={handleClickIcon}
            />
            <ul
              className={`side-bar__menu ${
                showIntro || showCompetition || showTech ? "invisible" : ""
              }`}
            >
              <li className="active">
                <a href="#" className="homepage-btn">
                  Trang chủ
                </a>
                <hr className="divider-1" />
              </li>
              <li>
                <a href="#" className="intro-btn" onClick={handleClickIntro}>
                  Giới thiệu
                  <i id="next" className="fas fa-angle-down" />
                </a>
                <hr className="divider-2" />
                <ul
                  className={`intro-show ${showIntro ? "show1 visible" : ""}`}
                >
                  <i id="previous-1" className="fas fa-angle-down" />
                  <li>
                    <a href="#">Về CLB</a>
                    <hr />
                  </li>
                  <li>
                    <a href="#">Cơ cấu tổ chức</a>
                    <hr />
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="tech-btn" onClick={handleClickTech}>
                  Góc công nghệ
                  <i id="next" className="fas fa-angle-down" />
                </a>
                <hr className="divider-3" />
                <ul className={`tech-show ${showTech ? "show2 visible" : ""}`}>
                  <i id="previous-2" className="fas fa-angle-down" />
                  <li>
                    <a href="#">Bản tin ET</a>
                    <hr />
                  </li>
                  <li>
                    <a href="#">
                      Chuỗi hoạt động hướng dẫn nâng cao năng lực công nghệ cho
                      sinh viên
                    </a>
                    <hr />
                  </li>
                  <li>
                    <a href="#">Các cuộc thi về công nghệ</a>
                    <hr />
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#"
                  className="competition-btn"
                  onClick={handleClickCompetition}
                >
                  Cuộc thi
                  <i id="next" className="fas fa-angle-down" />
                </a>
                <hr
                  className={`divider-4 ${
                    showCompetition ? "toggle-color" : ""
                  }`}
                />
                <ul
                  className={`competition-show ${
                    showCompetition ? "show3 visible" : ""
                  }`}
                >
                  <i id="previous-3" className="fas fa-angle-down" />
                  <li>
                    <a href="#">Techconomy</a>
                    <hr />
                  </li>
                  <li>
                    <a href="#">Tất cả các cuộc thi</a>
                    <hr />
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="CTV-btn">
                  Tuyển CTV
                </a>
                <hr className="divider-5" />
              </li>
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
