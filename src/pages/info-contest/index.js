import React, { Fragment, lazy, Suspense } from "react";

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
const InfoContestPage = () => {
  return (
    <Fragment>
      <Suspense>
        <Name />
        <ContentGlobal />
        <ContentGlobalMobile />
        <ContainerTimelineGlobal />
      </Suspense>
    </Fragment>
  );
};

export default InfoContestPage;
