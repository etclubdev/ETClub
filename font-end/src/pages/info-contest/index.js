import React, { Fragment, lazy, Suspense } from "react";


const Name = lazy(() => import("../../components/info-contest/Name"));

const ContentGlobal = lazy(() =>
  import("../../components/info-contest/ContentGlobal")
);
const ContainerTimelineGlobal = lazy(() => import("../../components/info-contest/ContainerTimelineGlobal"));
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

        <Name />
        <ContentGlobal />

        <ContainerTimelineGlobal />
        <NameResult />
        <ResultContest />
        <ContestDonor />
      </Suspense>
    </Fragment>
  );
};

export default InfoContestPage;
