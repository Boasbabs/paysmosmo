import React, { Component } from "react";
import {
  Layout,
  Row,
  Col,
  Menu,
  Carousel,
  PageHeader,
  Button,
  Spin
} from "antd";
import axios from "axios";
import { CATEGORY_ENDPOINT, ACCESS_TOKEN } from "../constants";
import "./PageContent.css";

const { Content } = Layout;
const SubMenu = Menu.SubMenu;

//axios.defaults.headers.common['Authorization'] = ACCESS_TOKEN;

class PageContent extends Component {
  state = { categoryData: [] };

  componentDidMount() {
    // make API request
    axios
      .get(CATEGORY_ENDPOINT, { headers: { Authorization: ACCESS_TOKEN } })
      .then(response => {
        // handle success
        const categoryData = response.data;
        this.setState({ categoryData });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }
  render() {
    // destruction categoryData from state
    const { categoryData } = this.state;
    return (
      <React.Fragment>
        <Content className="page-content--container">
          <Row gutter={24}>
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={7}
              xl={7}
              className="side-menu--shadow"
            >
              <PageHeader title="Categories" className="page-content--header" />
              <Menu style={{ width: "100%", padding: 0 }} mode="vertical">
                {/* Iterate over the categoryData using Js Array map method */}
                { categoryData.length === 0 ? (
                  // Display spinner while data is fetch
                  // <div className="loading-container">
                    <Spin size="large" tip="Loading..." />
                  // </div>
                ) : (
                  categoryData.map(({ name, id }) => (
                    <SubMenu key={id} title={<span>{name}</span>}>
                      <Menu.Item key="1">Option 1</Menu.Item>
                      <Menu.Item key="2">Option 2</Menu.Item>
                    </SubMenu>
                  ))
                )}
              </Menu>
            </Col>
            <Col xs={24} sm={24} md={12} lg={17} xl={17}>
              <Carousel autoplay className="">
                <div className="carousel ">
                  <p className="carousel--header">New Collection 1</p>
                  <p className="carousel--text">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <Button className="carousel--btn" size="large">
                    Shop Now
                  </Button>
                </div>
                <div className="carousel ">
                  <p className="carousel--header">New Collection 2</p>
                  <p className="carousel--text">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <Button className="carousel--btn" size="large">
                    Shop Now
                  </Button>
                </div>
                <div className="carousel ">
                  <p className="carousel--header">New Collection 3</p>
                  <p className="carousel--text">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <Button className="carousel--btn" size="large">
                    Shop Now
                  </Button>
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
