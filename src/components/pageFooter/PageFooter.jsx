import React, { Component } from "react";
import { Layout, Icon, Row, Col, List } from "antd";
import "./PageFooter.css";

const { Footer } = Layout;
const helpMenuData = ["Privacy Policy", "How it works", "Terms & Conditions"];
const contactMenuData = ["Registration", "About Us", "Contact Us"];

class PageFooter extends Component {
  state = {};
  render() {
    return (
      <Layout className="page-footer">
        <Footer className="page-footer--top">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col xs={24} sm={24} md={12} lg={7} xl={8}>
              <h3 className="footer--title">Paysmosmo</h3>

              <p className="footer--paragraph">
                Help give out inventory loans to <br />
                cooperative members with ease.
              </p>
            </Col>
            <Col xs={24} sm={24} md={12} lg={7} xl={4}>
              <h4 className="footer--subtitle">Contact</h4>
              <List
                size="small"
                split={false}
                bordered={false}
                dataSource={contactMenuData}
                renderItem={item => (
                  <List.Item className="footer--link">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      {item}
                    </a>
                  </List.Item>
                )}
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={7} xl={4}>
              <h4 className="footer--subtitle">Help</h4>
              <List
                size="small"
                split={false}
                bordered={false}
                dataSource={helpMenuData}
                renderItem={item => (
                  <List.Item className="footer--link">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      {item}
                    </a>
                  </List.Item>
                )}
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={7} xl={4}>
              <h4 className="footer--subtitle">Stay Connected</h4>
              <Row>
                <Col xs={8} sm={8} md={6} lg={6} xl={6}>
                  <List.Item className="footer--link ">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      <Icon type="facebook" className="footer--icon" />
                    </a>
                  </List.Item>
                </Col>
                <Col xs={8} sm={8} md={6} lg={6} xl={6}>
                  <List.Item className="footer--link ">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      <Icon type="twitter" className="footer--icon" />
                    </a>
                  </List.Item>
                </Col>
                <Col xs={8} sm={8} md={6} lg={6} xl={6}>
                  <List.Item className="footer--link ">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      <Icon
                        type="instagram"
                        theme="filled"
                        className="footer--icon"
                      />
                    </a>
                  </List.Item>
                </Col>
              </Row>
            </Col>
            <Col xs={24} sm={24} md={12} lg={7} xl={4}>
              <h4 className="footer--subtitle">Back to top ^</h4>
            </Col>
          </Row>
        </Footer>
        <Layout className="page-footer--bottom">&copy; 2018 paysmosmo</Layout>
      </Layout>
    );
  }
}

export default PageFooter;
