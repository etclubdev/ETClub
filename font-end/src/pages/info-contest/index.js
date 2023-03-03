import React, { Fragment, lazy, Suspense } from "react";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";

const Name = lazy(() => import("../../components/info-contest/Name"));
const ContentGlobalMobile = lazy(() =>
  import("../../components/info-contest/ContentGlobalMobile")
);
const ContentGlobal = lazy(() =>
  import("../../components/info-contest/ContentGlobal")
);
const ContainerTimelineGlobal = lazy(() =>
  import("../../components/info-contest/ContainerTimelineGlobal")
);
const NameResult = lazy(() =>
  import("../../components/info-contest/NameResult")
);
const ContestDonor = lazy(() =>
  import("../../components/info-contest/ContestDonor")
);
const ResultContest = lazy(() =>
  import("../../components/info-contest/ResultContest")
);
const InfoContestPage = () => {
  return (
    <Fragment>
      <Suspense>
        <BreadCrumb
          navPage="Cuộc thi"
          navDetail="Cuộc thi Global Talents 2020"
        />
        <Name />
        <ContentGlobal />
        <ContentGlobalMobile />
        <ContainerTimelineGlobal />
        <NameResult />
        <ResultContest />
        <ContestDonor />
      </Suspense>
    </Fragment>
  );
};

export default InfoContestPage;
