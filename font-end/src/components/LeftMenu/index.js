import React from "react";
import {
  MailOutlined,
  SettingOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link, NavLink, useNavigate } from "react-router-dom";
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
  getItem("Pages", "sub1", <MailOutlined />),
  getItem("Banner", "sub2", <AppstoreOutlined />),
  getItem("Cuộc thi", "sub3", <SettingOutlined />),
  getItem("Cảm nghĩ", "sub4", <SettingOutlined />),
  getItem("Đối tác đồng hành", "sub5", <SettingOutlined />),
  getItem("Kết quả Cuộc thi", "sub6", <SettingOutlined />),
  getItem("Nhà tài trợ cuộc thi", "sub7", <SettingOutlined />),
  getItem("Bản tin ET", "sub8", <SettingOutlined />),
  getItem("Tổng hợp các cuộc thi công nghệ", "sub9", <SettingOutlined />),
  getItem("Cơ cấu các ban", "sub10", <SettingOutlined />),
  getItem("Hình ảnh hoạt động các ban", "sub11", <SettingOutlined />),
  getItem("Thành tựu các ban", "sub12", <SettingOutlined />),
];
const LeftMenu = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    console.log("click ", e);
    if (e.key === "sub5") {
      navigate("/admin/partner");
    }
    if (e.key === "sub4") {
      navigate("/admin/thinking");
    }
    if (e.key === "sub2") {
      navigate("/admin");
    }
  };
  return (
    <Menu
      onClick={onClick}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode='inline'
      style={{
        height: "100%",
      }}
      items={items}
    />
  );
};
export default LeftMenu;
