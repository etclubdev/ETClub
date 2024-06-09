import React, { Fragment, Suspense } from "react";
import { Link } from "react-router-dom";
import Event from "../../components/all-competition/Event";
import EventReverse from "../../components/all-competition/EventReverse";
import Mobile from "../../components/all-competition/Mobile";
import Title from "../../components/all-competition/Title";
import Upcomming from "../../components/all-competition/Upcomming";
import Year from "../../components/all-competition/Year";

import { Breadcrumb } from 'antd';
import competitionApi from '../../api/competitionApi';
import dayjs from 'dayjs';

const AllCompetitionPage = () => {
  const [data, setData] = React.useState(undefined)
  const fetchCompetition = async () => {
    try {
      const data = await competitionApi.getAllCompetition();
      setData(data?.result?.competitions)
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    fetchCompetition()
  }, [])
  return (
    <Fragment>
      <Suspense>
        <div className='mx-auto max-sm:p-2 w-full xxl:w-[1300px] xxl:px-[30px] mt-[30px]'>
          <Breadcrumb
            separator=">"

            itemRender={(route, _, routes) => {
              const last = routes.indexOf(route) === routes.length - 1;
              return last ? (
                <span className='breadcrumb-active  max-sm:text-[14px] text-[18px] font-bold'>{route.breadcrumbName}</span>
              ) : (
                <Link className='max-sm:text-[14px] text-[18px] cursor-pointer font-bold text-white ' to={route.path}>{route.breadcrumbName}</Link>
              );
            }}
            routes={[
              {
                path: '/',
                breadcrumbName: 'Trang chủ',
              },
              {
                path: '/',
                breadcrumbName: 'Góc công nghệ',
              },
              {
                path: '/cuoc-thi/tat-ca-cuoc-thi',
                breadcrumbName: 'Tất cả các cuộc thi',
              },

            ]}
          />
        </div>
        <Title />
        {data?.length > 0 && data?.map((item, index) => {
          if (item.end_date === null && dayjs(item.date).isAfter(dayjs())) {
            return <div key={index}>
              <Year year={dayjs(item.date).year()} />
              <Upcomming data={item} />
            </div>
          }
          if (index % 2 === 0) {
            return <div key={index}>
              <Year year={dayjs(item.date).year()} />
              <Event data={item} />
            </div>
          } else {
            return <div key={index}>
              <Year year={dayjs(item.date).year()} />
              <EventReverse data={item} />

            </div>
          }

        })}
        {/* <Year year='2022' />
        <Upcomming />
        <Year year='2021' />
        <EventReverse />
        <Year year='2020' />
        <Event /> */}
        <Mobile data={data} />
      </Suspense>
    </Fragment>
  );
};

export default AllCompetitionPage;
