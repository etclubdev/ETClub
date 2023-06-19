import React from "react";
import {
  MailOutlined,
  SettingOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Row } from "antd";

import { useNavigate } from "react-router-dom";
function getItem(label, key, icon, link, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
    link,
  };
}

const items = [

  getItem("Banner", "sub2", <AppstoreOutlined />),
  getItem("Cuộc thi", "sub3", <SettingOutlined />),
  getItem("Cảm nghĩ", "sub4", <SettingOutlined />),

  getItem("Kết quả Cuộc thi", "sub6", <SettingOutlined />),

  getItem("Bản tin ET", "sub8", <SettingOutlined />),
  getItem("Timeline cuộc thi", "sub9", <SettingOutlined />),

  getItem("Hình ảnh hoạt động các ban", "sub11", <SettingOutlined />),

  getItem("Quản lý nhà tài trợ", "sub13", <SettingOutlined />),
];
const LeftMenu = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    console.log("click ", e);
    if (e.key === "sub5") {
      navigate("/admin/partner");
    }
    if (e.key === "sub3") {
      navigate("/admin/competition");
    }
    if (e.key === "sub6") {
      navigate("/admin/competition-results");
    }
    if (e.key === "sub4") {
      navigate("/admin/feeling");
    }
    if (e.key === "sub2") {
      navigate("/admin");
    }
    if (e.key === "sub8") {
      navigate("/admin/etnews");
    }
    if (e.key === "sub9") {
      navigate("/admin/milestone");
    }
    if (e.key === "sub13") {
      navigate("/admin/sponsor");
    }
  };
  return (
    <Layout.Sider width='100%' style={{ zIndex: 9999, background: "#fff" }}>
      <Row justify='center'>
        <img
          src='/img/ET 1.png'
          style={{ margin: "5px" }}
          alt='Logo ET'
          height={48}
        />
      </Row>
      <Menu
        onClick={onClick}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode='inline'
        style={{
          height: "100vh",
        }}
        items={items}
      />
    </Layout.Sider>
  );
};
export default LeftMenu;
