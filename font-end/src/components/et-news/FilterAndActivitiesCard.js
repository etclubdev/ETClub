/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./FilterAndActivitiesCard.scss";
import etNewsApi from '../../api/etNewsApi';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { Pagination } from 'antd';

const FilterAndActivitiesCard = () => {
  const [data, setData] = React.useState()
  const [currentPage, setCurrentPage] = React.useState(1)
  const [sortNew, setSortNew] = React.useState()
  const onChangePage = (page) => {
    setCurrentPage(page)
  }

  React.useEffect(() => {
    // document
    //   .querySelector(".time-cover__time")
    //   .addEventListener("click", () => {
    //     document
    //       .querySelector(".time-cover__option")
    //       .classList.toggle("display");
    //   });

    // document.querySelector(".drop-down-1").addEventListener("click", () => {
    //   document.querySelector(".time-cover__option").classList.toggle("display");
    // });

    // document
    //   .querySelector(".year-cover .year")
    //   .addEventListener("click", () => {
    //     document
    //       .querySelector(".year-cover__option")
    //       .classList.toggle("display");
    //   });

    // document.querySelector(".drop-down-2").addEventListener("click", () => {
    //   document.querySelector(".year-cover__option").classList.toggle("display");
    // });

    // document
    //   .querySelector(".month-cover .month")
    //   .addEventListener("click", () => {
    //     document
    //       .querySelector(".month-cover__option")
    //       .classList.toggle("display");
    //   });

    // document.querySelector(".drop-down-3").addEventListener("click", () => {
    //   document
    //     .querySelector(".month-cover__option")
    //     .classList.toggle("display");
    // });


  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await etNewsApi.getAll({ page: currentPage, sort: sortNew ? sortNew : undefined })

      setData(data.result)
    }
    fetchData()
  }, [currentPage, sortNew])
  console.log(data)
  return (
    <>
      <div
        className="box-container_3"
        style={{ "max-width": "1300px", " margin": "0 auto" }}
      >
        <div className="cover-filter">
          <div className="filter ">
            <div className={`${sortNew === 2 ? ' ' : 'newest__un-active--container'} `} onClick={() => setSortNew(2)}>
              <span className={`${sortNew === 2 ? 'newest max-sm:flex max-sm:h-full max-sm:items-center' : 'newest__un-active'} `} >Phổ biến</span>
            </div>
            <div className={`${sortNew === 1 ? ' ' : 'newest__un-active--container'}`}>
              <span className={`${sortNew === 1 ? 'newest max-sm:flex max-sm:h-full max-sm:items-center' : 'newest__un-active'}`} onClick={() => setSortNew(1)}>Mới nhất</span>
            </div>
            <div className={`${sortNew === 3 ? ' ' : 'newest__un-active--container'}`}>
              <span className={`${sortNew === 3 ? 'newest max-sm:flex max-sm:h-full max-sm:items-center' : 'newest__un-active'}`} >Thời gian</span>
            </div>

            {/* <div className="time-cover">
              <span className="time-cover__time">Thời gian</span>
              <i className="drop-down-1 fa-solid fa-angle-down" />
           
              <div className="time-cover__option">
                <div className="time-cover__option-time d-flex">
                  <div className="year-cover">
                    <span className="year">Năm</span>
                    <i className="drop-down-2 fa-solid fa-angle-down" />
             
                    <div className="year-cover__option">
                      <div>2022</div>
                      <div>2021</div>
                    </div>
          
                  </div>
                  <div className="month-cover">
                    <span className="month">Tháng</span>
                    <i className="drop-down-3 fa-solid fa-angle-down" />
                 
                    <div className="month-cover__option">
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                      <div>5</div>
                      <div>6</div>
                      <div>7</div>
                      <div>8</div>
                      <div>9</div>
                      <div>10</div>
                      <div>11</div>
                      <div>12</div>
                    </div>
                  
                  </div>
                </div>
                <div className="time-cover__option-apply">Áp dụng</div>
              </div>
             
            </div> */}
            <span className="clear max-sm:items-center max-sm:flex" onClick={() => setSortNew(undefined)}>Xóa lọc</span>
          </div>
          <div className="col-lg-1" />
        </div>
        <div className="body-3 max-sm:flex-col">
          <div className="cover-card flex items-stretch flex-wrap items-center justify-between md:justify-center md:gap-10">
            {data && data?.data?.map((item, index) => {
              return <Link key={index} to={`/tech-corner/ban-tin-ET/${item?._id}`} className="card card-1">
                <img
                  className="card-image"
                  src={`${item?.image}`}
                  alt="Image"
                />
                <span className="card-time">
                  <i id="card-calendar" className="far fa-calendar-alt" /> {dayjs(item?.created_at).format('MM/YY') || '-'}
                </span>
                <p className="card-heading">
                  {item?.name}
                </p>
              </Link>
            })}
            {/* <a href="#" className="card card-1">
              <img
                className="card-image"
                src="/img/card-Image.png"
                alt="Image"
              />
              <span className="card-time">
                <i id="card-calendar" className="far fa-calendar-alt" /> 02/2022
              </span>
              <p className="card-heading">
                Tình hình công nghệ Việt Nam và thế giới
              </p>
            </a> */}
            {/* <a href="#" className="card card-2">
              <img
                className="card-image"
                src="/img/card-Image.png"
                alt="Image"
              />
              <span className="card-time">
                <i id="card-calendar" className="far fa-calendar-alt" /> 02/2022
              </span>
              <p className="card-heading">
                Tình hình công nghệ Việt Nam và thế giới
              </p>
            </a>
            <a href="#" className="card card-3">
              <img
                className="card-image"
                src="/img/card-Image.png"
                alt="Image"
              />
              <span className="card-time">
                <i id="card-calendar" className="far fa-calendar-alt" /> 02/2022
              </span>
              <p className="card-heading">
                Tình hình công nghệ Việt Nam và thế giới
              </p>
            </a> */}
          </div>
          {/* <div className="more-cover">
            <Pagination defaultCurrent={1} total={data?.total} />
          </div> */}
          <div className='mt-4 flex justify-center'>
            <Pagination className='pagination-news flex' onChange={onChangePage} current={currentPage} defaultCurrent={currentPage} pageSize={9} total={data?.total} />
          </div>
          {/*-------------- Hiện thêm 12 card ---------------------*/}
          {/* <div className="show-more">
            <div className="cover-card row row-5">
              <a href="#" className="card card-1">
                <img
                  className="card-image"
                  src="/img/card-Image.png"
                  alt="Image"
                />
                <span className="card-time">
                  <i id="card-calendar" className="far fa-calendar-alt" />{" "}
                  02/2022
                </span>
                <p className="card-heading">
                  Tình hình công nghệ Việt Nam và thế giới
                </p>
              </a>
              <a href="#" className="card card-2">
                <img
                  className="card-image"
                  src="/img/card-Image.png"
                  alt="Image"
                />
                <span className="card-time">
                  <i id="card-calendar" className="far fa-calendar-alt" />{" "}
                  02/2022
                </span>
                <p className="card-heading">
                  Tình hình công nghệ Việt Nam và thế giới
                </p>
              </a>
              <a href="#" className="card card-3">
                <img
                  className="card-image"
                  src="/img/card-Image.png"
                  alt="Image"
                />
                <span className="card-time">
                  <i id="card-calendar" className="far fa-calendar-alt" />{" "}
                  02/2022
                </span>
                <p className="card-heading">
                  Tình hình công nghệ Việt Nam và thế giới
                </p>
              </a>
            </div>
            <div className="cover-card row row-6">
              <a href="#" className="card card-1">
                <img
                  className="card-image"
                  src="/img/card-Image.png"
                  alt="Image"
                />
                <span className="card-time">
                  <i id="card-calendar" className="far fa-calendar-alt" />{" "}
                  02/2022
                </span>
                <p className="card-heading">
                  Tình hình công nghệ Việt Nam và thế giới
                </p>
              </a>
              <a href="#" className="card card-2">
                <img
                  className="card-image"
                  src="/img/card-Image.png"
                  alt="Image"
                />
                <span className="card-time">
                  <i id="card-calendar" className="far fa-calendar-alt" />{" "}
                  02/2022
                </span>
                <p className="card-heading">
                  Tình hình công nghệ Việt Nam và thế giới
                </p>
              </a>
              <a href="#" className="card card-3">
                <img
                  className="card-image"
                  src="/img/card-Image.png"
                  alt="Image"
                />
                <span className="card-time">
                  <i id="card-calendar" className="far fa-calendar-alt" />{" "}
                  02/2022
                </span>
                <p className="card-heading">
                  Tình hình công nghệ Việt Nam và thế giới
                </p>
              </a>
            </div>
            <div className="cover-card row row-7">
              <a href="#" className="card card-1">
                <img
                  className="card-image"
                  src="/img/card-Image.png"
                  alt="Image"
                />
                <span className="card-time">
                  <i id="card-calendar" className="far fa-calendar-alt" />{" "}
                  02/2022
                </span>
                <p className="card-heading">
                  Tình hình công nghệ Việt Nam và thế giới
                </p>
              </a>
              <a href="#" className="card card-2">
                <img
                  className="card-image"
                  src="/img/card-Image.png"
                  alt="Image"
                />
                <span className="card-time">
                  <i id="card-calendar" className="far fa-calendar-alt" />{" "}
                  02/2022
                </span>
                <p className="card-heading">
                  Tình hình công nghệ Việt Nam và thế giới
                </p>
              </a>
              <a href="#" className="card card-3">
                <img
                  className="card-image"
                  src="/img/card-Image.png"
                  alt="Image"
                />
                <span className="card-time">
                  <i id="card-calendar" className="far fa-calendar-alt" />{" "}
                  02/2022
                </span>
                <p className="card-heading">
                  Tình hình công nghệ Việt Nam và thế giới
                </p>
              </a>
            </div>
            <div className="cover-card row row-8">
              <a href="#" className="card card-1">
                <img
                  className="card-image"
                  src="/img/card-Image.png"
                  alt="Image"
                />
                <span className="card-time">
                  <i id="card-calendar" className="far fa-calendar-alt" />{" "}
                  02/2022
                </span>
                <p className="card-heading">
                  Tình hình công nghệ Việt Nam và thế giới
                </p>
              </a>
              <a href="#" className="card card-2">
                <img
                  className="card-image"
                  src="/img/card-Image.png"
                  alt="Image"
                />
                <span className="card-time">
                  <i id="card-calendar" className="far fa-calendar-alt" />{" "}
                  02/2022
                </span>
                <p className="card-heading">
                  Tình hình công nghệ Việt Nam và thế giới
                </p>
              </a>
              <a href="#" className="card  card-3">
                <img
                  className="card-image"
                  src="/img/card-Image.png"
                  alt="Image"
                />
                <span className="card-time">
                  <i id="card-calendar" className="far fa-calendar-alt" />{" "}
                  02/2022
                </span>
                <p className="card-heading">
                  Tình hình công nghệ Việt Nam và thế giới
                </p>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default FilterAndActivitiesCard;
