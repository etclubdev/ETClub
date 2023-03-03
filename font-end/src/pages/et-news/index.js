import { Fragment, lazy, Suspense } from "react";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";

const NewestNew = lazy(() => import("../../components/et-news/NewestNew"));
const Title = lazy(() => import("../../components/et-news/Title"));
const MaybeInterested = lazy(() =>
  import("../../components/et-news/MaybeInterested")
);
const FilterAndActivitiesCard = lazy(() =>
  import("../../components/et-news/FilterAndActivitiesCard")
);
const EtNews = () => {
  return (
    <Fragment>
      <Suspense>
        <BreadCrumb navPage="Góc công nghệ" navDetail="Bản tin ET" />
        <Title></Title>
        <NewestNew></NewestNew>
        <MaybeInterested></MaybeInterested>
        <FilterAndActivitiesCard></FilterAndActivitiesCard>
      </Suspense>
    </Fragment>
  );
};
export default EtNews;
