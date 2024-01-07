import React from "react";
import {
  MailOutlined,
  SettingOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Row, Button } from "antd";

import { useNavigate, useLocation } from "react-router-dom";
import authApi from '../../api/authApi';
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

  getItem("Banner", "sub2", <AppstoreOutlined />, "/admin"),
  getItem("Cuộc thi", "sub3", <SettingOutlined />, "/admin/competition"),
  getItem("Cảm nghĩ", "sub4", <SettingOutlined />, "/admin/feeling"),

  getItem("Kết quả Cuộc thi", "sub6", <SettingOutlined />, "/admin/competition-results"),

  getItem("Bản tin ET", "sub8", <SettingOutlined />, "/admin/etnews"),
  getItem("Timeline cuộc thi", "sub9", <SettingOutlined />, "/admin/milestone"),
  getItem("Thành viên", "sub10", <SettingOutlined />, "/admin/member"),
  // getItem("Hình ảnh hoạt động các ban", "sub11", <SettingOutlined />, "/admin/hoat-dong"),

  getItem("Quản lý nhà tài trợ", "sub13", <SettingOutlined />, "/admin/sponsor"),
  getItem("Đăng xuất", "sub14")
];
const LeftMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onClick = async (e) => {

    // ... (xử lý các sự kiện khác)

    if (e.key === "sub14") {
      try {
        const result = await authApi.logout({ refresh_token: localStorage.getItem('refresh_token') });
        if (result?.message) {
          alert('Đăng xuất thành công')
          navigate('/login')
        }
      } catch (err) {
        console.log(err)
      }

    } else {
      navigate(items.find((item) => item.key === e.key)?.link || "/"); // Chuyển hướng đến đường dẫn liên kết của mục menu
    }
  };

  // Tìm key tương ứng với đường dẫn URL hiện tại
  const currentKey = items.find((item) => item.link === location.pathname)?.key;
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
        selectedKeys={[currentKey]}
        mode='inline'
        style={{
          height: "100vh",
        }}


      >
        {items.map((item) => (
          <Menu.Item key={item.key} icon={item.icon} style={item.key === 'sub14' ? { background: 'green', textAlign: 'center', color: 'white' } : {}}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>

    </Layout.Sider>
  );
};
export default LeftMenu;
