import React, { Fragment, lazy, Suspense } from "react";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";

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
        <BreadCrumb
          navPage="Góc công nghệ"
          navDetail="Các cuộc thi về công nghệ"
        />
        <CompetitionCompilation></CompetitionCompilation>
        <Pagination></Pagination>
      </Suspense>
    </Fragment>
  );
};

export default CompetitionCompilationPage;
