import React, { Component } from "react";
import { Layout, Row, Col, Menu, Carousel, PageHeader, Button } from "antd";
import "./PageContent.css";
import BannerImage from "../images/landing-image.jpg";

const { Content } = Layout;
const SubMenu = Menu.SubMenu;


class PageContent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Content className="page-content--container">
          <Row gutter={24}>
            <Col span={7} className="side-menu--shadow">
              <PageHeader title="Categories" className="page-content--header" />
              <Menu style={{ width: "100%", padding: 0 }} mode="vertical">
                <SubMenu key="sub1" title={<span>Navigation One</span>}>
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span>Navigation Two</span>}>
                  <Menu.Item key="5">Option 5</Menu.Item>
                  <Menu.Item key="6">Option 6</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span>Navigation 3</span>}>
                  <Menu.Item key="9">Option 9</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span>Navigation 4</span>}>
                  <Menu.Item key="9">Option 9</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span>Navigation 5</span>}>
                  <Menu.Item key="9">Option 9</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span>Navigation 6</span>}>
                  <Menu.Item key="9">Option 9</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span>Navigation 7</span>}>
                  <Menu.Item key="9">Option 9</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span>Navigation 8</span>}>
                  <Menu.Item key="9">Option 9</Menu.Item>
                </SubMenu>
              </Menu>
            </Col>
            <Col span={17}>
              <Carousel autoplay className="">

                <div className="carousel ">
                  <p className="carousel--header">
                    New Collection 1
                  </p>
                  <p  className="carousel--text">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <Button className="carousel--btn" size="large">Shop Now</Button>
                </div>
                <div className="carousel ">
                  <p className="carousel--header">
                    New Collection 2
                  </p>
                  <p  className="carousel--text">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <Button className="carousel--btn" size="large">Shop Now</Button>
                </div>
                <div className="carousel ">
                  <p className="carousel--header">
                    New Collection 3
                  </p>
                  <p  className="carousel--text">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <Button className="carousel--btn" size="large">Shop Now</Button>
                </div>

              </Carousel>
            </Col>
          </Row>
        </Content>
      </React.Fragment>
    );
  }
}

export default PageContent;
