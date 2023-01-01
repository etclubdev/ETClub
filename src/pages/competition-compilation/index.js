import React, { Fragment, lazy, Suspense } from "react";

const CompetitionCompilation = lazy(() =>
  import("../../components/competition-compilation/CompetitionCompilation")
);
const Pagination = lazy(() =>
  import("../../components/competition-compilation/Pagination")
);
const CompetitionCompilationPage = () => {
  return (
    <Fragment>
      <Suspense>
        <CompetitionCompilation></CompetitionCompilation>
        <Pagination></Pagination>
      </Suspense>
    </Fragment>
  );
};

export default CompetitionCompilationPage;
