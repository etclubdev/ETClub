/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Competition.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import competitionApi from "../../api/competitionApi";
import { Link } from 'react-router-dom';
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
  const [data, setData] = React.useState([]);
  const fetchCompetitions = async () => {
    try {
      const dataApi = await competitionApi.getAllCompetition();

      setData(dataApi?.result?.competitions);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchCompetitions();
  }, []);

  return (
    <div id='cuoc-thi' className='competition-container'>
      <div className='competition-title'>
        <h1>CUỘC THI</h1>
      </div>
      {data?.length > 0 ? (
        <OwlCarousel
          className='owl-theme owl-carousel__competition'
          {...options}
        >
          {data?.map((item) => (
            <Link to={`/tech-corner/cuoc-thi/${item?._id}`} key={item?._id} className='item'>
              <img
                src={`${item?.landscape_poster}`}
              />
            </Link>
          ))}
        </OwlCarousel>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default Competition;
