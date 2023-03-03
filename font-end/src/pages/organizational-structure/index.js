import { Fragment, lazy, Suspense } from "react";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";

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
        <BreadCrumb navPage="Giới thiệu" navDetail="Cơ cấu tổ chức" />
        <Name></Name>
        <Content></Content>
      </Suspense>
    </Fragment>
  );
};
export default OrganizationalStructure;
