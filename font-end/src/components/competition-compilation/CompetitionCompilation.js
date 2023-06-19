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
      const result = await competitionApi.getAllCompetition({ status: status, page: currentPage })
      setData(result)
    }
    fetchData()
  }, [status, currentPage])

  return (
    <>
      <div>
        <div className="cc-name">
          <h1>
            TỔNG HỢP
            <br /> CÁC CUỘC THI CÔNG NGHỆ
          </h1>
        </div>
        <div className="container-allcompetion row md:flex md:gap-x-[110px]">
          <div className="container-navbar ">
            {/* <div class="empty"></div> */}
            <div className="cc-navbar">
              <button onClick={() => {
                setStatus(1)
              }} className={`cc-navbar__item ${status === 1 ? 'active' : ''}`}>
                <h6>Sắp diễn ra</h6>
              </button>
              <button onClick={() => {
                setStatus(2)
              }} className={`cc-navbar__item ${status === 2 ? 'active' : ''}`}>
                <h6>Đang diễn ra</h6>
              </button>
              <button onClick={() => {
                setStatus(3)
              }} className={`cc-navbar__item ${status === 3 ? 'active' : ''}`}>
                <h6>Đã diễn ra</h6>
              </button>
            </div>
          </div>
          {data?.data?.map((item, index) => {
            return <Link to={`/cuoc-thi/${item.id}`} key={index} className="competition-poster gx-1 col-12  col-sm-6  col-xl-4 ">

              <img src={`http://127.0.0.1:1111/public/images/competition/${item.portrait_poster}`} alt />
              <div className="competition-status">
                <button>{item.status}</button>
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
