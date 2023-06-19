import React, { Fragment, lazy, Suspense } from "react";

import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const CompetitionCompilation = lazy(() =>
  import("../../components/competition-compilation/CompetitionCompilation")
);

const CompetitionCompilationPage = () => {
  return (
    <Fragment>
      <Suspense>
        <div className='mx-auto w-full xxl:w-[1300px] xxl:px-[30px] mt-[30px]'>
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
                path: '/tech-corner/cuoc-thi-cong-nghe',
                breadcrumbName: 'Các cuộc thi về công nghệ',
              },

            ]}
          />
        </div>
        <CompetitionCompilation></CompetitionCompilation>

      </Suspense>
    </Fragment>
  );
};

export default CompetitionCompilationPage;
