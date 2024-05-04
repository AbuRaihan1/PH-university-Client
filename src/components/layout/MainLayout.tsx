import { Layout, Menu } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { adminSidebarItem } from "../../routes/admin.routes";
const { Header, Content, Footer, Sider } = Layout;
const MainLayout = () => {
  const items = [
    {
      key: "Dashboard",
      label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
    },
    {
      key: "User management",
      label: "User management",
      children: [
        {
          key: "Create Admin",
          label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,
        },
        {
          key: "Create Faculty",
          label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>,
        },
        {
          key: "Create Student",
          label: <NavLink to="/admin/create-student">Create Student</NavLink>,
        },
      ],
    },
  ];
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: "white",
            padding: "10px 0",
            paddingLeft: "25px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <h1>PH uni</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={adminSidebarItem}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <div>amar</div>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              //   background: colorBgContainer,
              //   borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
