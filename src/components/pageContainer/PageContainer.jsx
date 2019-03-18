import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon, List } from "antd";
import Navbar from "../navbar"

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class PageContainer extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Navbar/>
        <Layout>
          
          
        </Layout>
      </Layout>
    );
  }
}

export default PageContainer;
