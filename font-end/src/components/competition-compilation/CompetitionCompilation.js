/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./competitionCompilation.scss";
import competitionApi from '../../api/competitionApi';
import { Pagination } from 'antd';
import { Link } from 'react-router-dom';
const CompetitionCompilation = () => {
  const [data, setData] = React.useState()
  const [currentPage, setCurrentPage] = React.useState(1);
  const [status, setStatus] = React.useState()
  const onChangePage = page => setCurrentPage(page)
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await competitionApi.getAllCompetition({ status: status, page: currentPage })

      setData(data?.result?.competitions)
    }
    fetchData()
  }, [status, currentPage])
  React.useEffect(() => {

    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    scrollToTop();


  }, []);
  const convertNameStatus = (status) => {
    switch (status) {
      case 0:
        return 'Sắp diễn ra'
      case 1:
        return 'Đang diễn ra'
      case 2:
        return 'Đã diễn ra'
      default:
        break;
    }
  }
  return (
    <>
      <div>
        <div className="cc-name">
          <h1>
            TỔNG HỢP
            <br /> CÁC CUỘC THI CÔNG NGHỆ
          </h1>
        </div>
        <div className="container-allcompetion row md:flex max-sm:mt-[30px] max-sm:pl-[35px] md:gap-x-[110px]">
          <div className="container-navbar">
            {/* <div class="empty"></div> */}
            <div className="cc-navbar max-sm:mb-[30px]">
              <button onClick={() => {
                setStatus(0)
              }} className={`cc-navbar__item ${status === 0 ? 'active' : ''}`}>
                <h6>Sắp diễn ra</h6>
              </button>
              <button onClick={() => {
                setStatus(1)
              }} className={`cc-navbar__item ${status === 1 ? 'active' : ''}`}>
                <h6>Đang diễn ra</h6>
              </button>
              <button onClick={() => {
                setStatus(2)
              }} className={`cc-navbar__item ${status === 2 ? 'active' : ''}`}>
                <h6>Đã diễn ra</h6>
              </button>
            </div>
          </div>
          {data?.map((item, index) => {
            return <Link to={`/tech-corner/cuoc-thi/${item?._id}`} key={index} className="competition-poster gx-1 col-12  col-sm-6  col-xl-4 ">

              <img className='object-fill md:object-cover' src={`${item?.portrait_poster}`} alt />
              <div className="competition-status">
                <button>{convertNameStatus(item?.status)}</button>
              </div>
            </Link>
          })}
          <div className='mt-4 flex justify-center'>
            <Pagination className='pagination-news flex' onChange={onChangePage} current={currentPage} defaultCurrent={currentPage} total={data?.total} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CompetitionCompilation;
