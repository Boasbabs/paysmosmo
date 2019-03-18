import React, { Component } from "react";
import { Layout } from "antd";
import Navbar from "../navbar";
import PageHeader from "../pageHeader"
import PageContent from "../pageContent"

class PageContainer extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Navbar/>
        <Layout>
          <PageHeader/>
          <PageContent/>
        </Layout>
      </Layout>
    );
  }
}

export default PageContainer;
