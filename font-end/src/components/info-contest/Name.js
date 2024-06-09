import React from "react";
import "./name.scss";
import { Link, useParams } from 'react-router-dom';
import competitionApi from '../../api/competitionApi';
import { Breadcrumb } from 'antd';
const Name = () => {
  const [data, setData] = React.useState()
  const { id } = useParams();

  React.useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const result = await competitionApi.getByCompetitionId(id)
        setData(result?.result)
      }
      fetchData()
    }
  }, [id])
  return (
    <>
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
              path: '/introduce/about-clb',
              breadcrumbName: 'Các cuộc thi về công nghệ',
            },
            {
              path: '/',
              breadcrumbName: `${data?.name}`,
            },

          ]}
        />
      </div>
      <div class="Contest-global__name">
        <h1>{data?.name}</h1>
      </div>
    </>

  );
};

export default Name;
