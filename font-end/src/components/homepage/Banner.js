/* eslint-disable jsx-a11y/alt-text */
// import Swiper core and required modules
import React from "react";
// Import Swiper styles
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./banner.scss";

import bannerApi from "../../api/bannerApi";
import { Link } from 'react-router-dom';

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
  const [data, setData] = React.useState([]);
  const fetchBanners = async () => {
    try {
      const dataApi = await bannerApi.getAll();

      setData(dataApi?.result);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchBanners();
  }, []);

  return (
    <>
      {data?.length > 0 ? (
        <OwlCarousel className='owl-theme owl-carousel-banner' {...options}>
          {data?.map((item, index) => (
            <a href={item.link} target='_blank' rel="noreferrer" className='item' key={index}>
              <img
                src={`${item?.img}`}
                className='h-[240px] md:h-[600px] object-fill'
                alt={`Banner ${index + 1}`}
              />
            </a>
          ))}
        </OwlCarousel>
      ) : (
        <span>Loading...</span>
      )}
    </>
  );
}
