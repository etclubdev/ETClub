/* eslint-disable jsx-a11y/alt-text */
// import Swiper core and required modules
import React from "react";
// Import Swiper styles
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./banner.scss";
import bannerApi from "../../api/bannerApi";
import { ConsoleSqlOutlined } from "@ant-design/icons";
export default function Banner() {
  const options = {
    nav: true,
    items: 1,
    loop: true,
    margin: 0,
    autoplay: false,
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
        nav: false,
      },
      1000: {
        nav: true,
      },
    },
  };
  const array = [1, 2, 3, 4, 5, 6, 8, 9, 10];
  const [data, setData] = React.useState();
  React.useEffect(() => {
    const fetchNews = async () => {
      const dataApi = await bannerApi.getAll();
      setData(dataApi);
    };
    fetchNews();
  }, []);

  return (
    <>
      <OwlCarousel className='owl-theme owl-carousel-banner' {...options}>
        {array.map((item, index) => (
          <div className='item' key={index}>
            <img src='./img/banner.png' />
          </div>
        ))}
      </OwlCarousel>
    </>
  );
}
