import React, { Component } from "react";
import { Layout } from "antd";
import Navbar from "../navbar";
import PageHeader from "../pageHeader";
import PageContent from "../pageContent";
import ProductSegment from "../productSegment";

class PageContainer extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Navbar/>
        <Layout style={{backgroundColor: "#fff"}}>
          <PageHeader/>
          <PageContent/>
          <ProductSegment heading="Explore New Categories"></ProductSegment>
          <ProductSegment heading="Explore New Stuffs"></ProductSegment>
        </Layout>
      </Layout>
    );
  }
}

export default PageContainer;
