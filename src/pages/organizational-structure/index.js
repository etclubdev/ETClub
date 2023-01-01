import { Fragment, lazy, Suspense } from "react";

const Content = lazy(() =>
  import("../../components/organizational-structure/Content")
);
const Name = lazy(() =>
  import("../../components/organizational-structure/Name")
);
const OrganizationalStructure = () => {
  return (
    <Fragment>
      <Suspense>
        <Name></Name>
        <Content></Content>
      </Suspense>
    </Fragment>
  );
};
export default OrganizationalStructure;
