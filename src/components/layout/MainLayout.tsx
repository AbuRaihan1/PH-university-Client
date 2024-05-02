import { Layout, Menu } from "antd";
const { Header, Content, Footer, Sider } = Layout;
const MainLayout = () => {
  const items = [
    {
      key: 1,
      label: "Profile",
    },
    {
      key: 2,
      label: "Dashboard",
    },
    {
      key: 1,
      label: "Admin",
      children: [
        {
          key: 11,
          label: "Add Admin",
        },
        {
          key: 22,
          label: "Delete Admin",
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
          items={items}
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
            <h1>Main Content</h1>
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
