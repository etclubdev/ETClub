import React, { Fragment, lazy, Suspense } from "react";

const Achivement = lazy(() => import("../../components/about-clb/Achivement"));
const Banner = lazy(() => import("../../components/about-clb/Banner"));
const Content = lazy(() => import("../../components/about-clb/Content"));
const AboutClb = () => {
  return (
    <Fragment>
      <Suspense>
        <Banner />
        <Content />
        <Achivement />
      </Suspense>
    </Fragment>
  );
};

export default AboutClb;
