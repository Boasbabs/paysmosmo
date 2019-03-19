import React, { Component } from "react";
import { Layout, Icon, Row, Col, Input, Badge } from "antd";
import Logo from "../images/paysmosmo-logo.png";
import "./PageHeader.css";

const { Content } = Layout;
const Search = Input.Search;

const IconText = ({ type, text, theme }) => (
  <span>
    <Badge dot>
      <Icon type={type} theme={theme} className="menu-icon" />
    </Badge>
    <div className="icon-text--text">{text}</div>
  </span>
);

class PageHeader extends Component {
  state = {};
  render() {
    return (
      <Layout style={{ padding: "50px 50px 24px", backgroundColor: "#fff" }}>
        <Content className="page-header--container">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col xs={24} sm={8} md={6} lg={4} xl={4}>
              <img src={Logo} alt="Paysmosmo logo" className="logo" />
            </Col>
            <Col xs={24} sm={8} md={10} lg={15} xl={15}>
              <Search
                className="page-header--search"
                placeholder="Search for products"
                prefix={
                  <Icon type="search" style={{ color: "rgba(0,0,0,.5)" }} />
                }
                enterButton="Search"
                color="#ff2323"
                size="large"
              />
            </Col>
            <Col xs={24} sm={8} md={8} lg={5} xl={5}>
              <Row>
                <Col xs={8} sm={8} md={6} lg={8} xl={8}>
                  <IconText theme="outlined" type="shopping-cart" text="cart" />
                </Col>
                <Col xs={8} sm={8} md={6} lg={8} xl={8}>
                  <IconText theme="filled" type="heart" text="wishlist" />
                </Col>
                <Col xs={8} sm={8} md={6} lg={8} xl={8}>
                  <IconText theme="outlined" type="bell" text="notification" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}

export default PageHeader;
