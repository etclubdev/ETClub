import { Col, Row } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import LeftMenu from "../../components/LeftMenu";

const LayoutAdmin = () => {
  return (
    <Row>
      <Col span={5}>
        <LeftMenu />
      </Col>
      <Col span={19}>
        <Outlet></Outlet>
      </Col>
    </Row>
  );
};

export default LayoutAdmin;
