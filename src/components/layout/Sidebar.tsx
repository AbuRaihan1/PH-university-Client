import { Layout, Menu } from "antd";
import { adminPaths } from "../../routes/admin.routes";
import sidebarItemsGenerator from "../../utils/sidebarItemsGenerator";

const { Sider } = Layout;

const Sidebar = () => {
  return (
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
        items={sidebarItemsGenerator(adminPaths, "admin")}
      />
    </Sider>
  );
};

export default Sidebar;
