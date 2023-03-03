import { Fragment, lazy, Suspense } from "react";

const Banner = lazy(() => import("../../components/homepage/Banner"));
const Competition = lazy(() => import("../../components/homepage/Competition"));
const Introduction = lazy(() =>
  import("../../components/homepage/Introduction")
);
const TechConer = lazy(() => import("../../components/homepage/TechConer"));
const Thinking = lazy(() => import("../../components/homepage/Thinking"));
const Donor = lazy(() => import("../../components/homepage/Donor"));
const HomePage = () => {
  return (
    <Fragment>
      <Suspense>
        <Banner></Banner>
        <Introduction />
        <TechConer />
        <Competition />
        <Thinking />
        <Donor />
      </Suspense>
    </Fragment>
  );
};
export default HomePage;
