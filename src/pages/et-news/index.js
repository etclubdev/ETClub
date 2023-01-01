import { Fragment, lazy, Suspense } from "react";

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
        <Title></Title>
        <NewestNew></NewestNew>
        <MaybeInterested></MaybeInterested>
        <FilterAndActivitiesCard></FilterAndActivitiesCard>
      </Suspense>
    </Fragment>
  );
};
export default EtNews;
