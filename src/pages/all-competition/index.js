import React, { Fragment, Suspense } from "react";
import { useLocation } from "react-router-dom";
import Event from "../../components/all-competition/Event";
import EventReverse from "../../components/all-competition/EventReverse";
import Mobile from "../../components/all-competition/Mobile";
import Title from "../../components/all-competition/Title";
import Upcomming from "../../components/all-competition/Upcomming";
import Year from "../../components/all-competition/Year";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";

const AllCompetitionPage = () => {
  return (
    <Fragment>
      <Suspense>
        <BreadCrumb navPage="Cuộc thi" navDetail="Tất cả các cuộc thi" />
        <Title />
        <Year year="2022" />
        <Upcomming />
        <Year year="2021" />
        <EventReverse />
        <Year year="2020" />
        <Event />
        <Mobile />
      </Suspense>
    </Fragment>
  );
};

export default AllCompetitionPage;
