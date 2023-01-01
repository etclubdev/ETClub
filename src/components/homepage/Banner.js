/* eslint-disable jsx-a11y/alt-text */
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./banner.scss";
export default function Banner() {
  const array = [1, 2, 3, 4, 5, 6, 8, 9, 10];
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            spaceBetween: 0,
          },
          800: {
            spaceBetween: 50,
          },
        }}
      >
        {array.map((item) => (
          <SwiperSlide key={item}>
            <img src="./img/banner.png" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
