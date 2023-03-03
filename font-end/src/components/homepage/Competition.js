/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Competition.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Competition = () => {
  const options = {
    nav: true,
    items: 1,
    loop: true,
    responsiveClass: true,
    margin: 0,
    dotsEach: 3,
    dot: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    navSpeed: 2000,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],
    stagePadding: 0,
    responsive: {
      0: {
        margin: 30,
        nav: false,
      },
      600: {
        margin: 30,
        stagePadding: 0,
        nav: false,
      },
      1200: {
        stagePadding: 175,
        dotsEach: true,
        // margin: -1,
      },
    },
  };
  return (
    <div id="cuoc-thi" className="competition-container">
      <div className="competition-title">
        <h1>CUỘC THI</h1>
      </div>
      <OwlCarousel
        className="owl-theme owl-carousel__competition"
        {...options}
        // loop
        // margin={0}
        // items="1"
        // stagePadding={175}
      >
        <div className="item">
          <img src="https://i.pinimg.com/564x/94/9b/8d/949b8d8d9229693ba9d53b054b738e2a.jpg" />
        </div>
        <div className="item">
          <img src="https://i.pinimg.com/originals/51/81/2a/51812ae2714816f7b2b094edeeba0041.jpg" />
        </div>
        <div className="item">
          <img src="https://img4.thuthuatphanmem.vn/uploads/2019/11/17/anh-giot-nuoc-dep-nhat_113939355.jpg" />
        </div>
        <div className="item">
          <img src="https://i.pinimg.com/564x/1b/3a/b6/1b3ab6c2b28e891d94bc49aa9e10841b.jpg" />
        </div>
        <div className="item">
          <img src="https://i.pinimg.com/564x/94/9b/8d/949b8d8d9229693ba9d53b054b738e2a.jpg" />
        </div>
        <div className="item">
          <img src="https://i.pinimg.com/564x/94/9b/8d/949b8d8d9229693ba9d53b054b738e2a.jpg" />
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Competition;
