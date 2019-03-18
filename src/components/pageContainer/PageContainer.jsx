import React, { Component } from "react";
import { Layout } from "antd";
import Navbar from "../navbar";
import PageHeader from "../pageHeader"

class PageContainer extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Navbar/>
        <Layout>
          <PageHeader/>
        </Layout>
      </Layout>
    );
  }
}

export default PageContainer;
