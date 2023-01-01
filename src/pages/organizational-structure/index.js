import { Fragment, lazy, Suspense } from "react";
import Content from "../../components/organizational-structure/Content";
import Name from "../../components/organizational-structure/Name";
// const Content = lazy(() =>
//   import("../../components/organizational-structure/Content")
// );
// const Name = lazy(() =>
//   import("../../components/organizational-structure/Name")
// );
const OrganizationalStructure = () => {
  return (
    <Fragment>
      <Name></Name>
      <Content></Content>
    </Fragment>
  );
};
export default OrganizationalStructure;
