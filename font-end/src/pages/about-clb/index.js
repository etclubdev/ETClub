import React, { Fragment, lazy, Suspense } from "react";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";

const Achivement = lazy(() => import("../../components/about-clb/Achivement"));
const Banner = lazy(() => import("../../components/about-clb/Banner"));
const Content = lazy(() => import("../../components/about-clb/Content"));
const AboutClb = () => {
  return (
    <Fragment>
      <Suspense>
        <BreadCrumb navPage="Giới thiệu" navDetail="Về CLB" />
        <Banner />
        <Content />
        <Achivement />
      </Suspense>
    </Fragment>
  );
};

export default AboutClb;
