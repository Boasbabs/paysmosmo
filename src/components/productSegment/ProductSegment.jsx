import React, { Component } from "react";
import { Layout, Row, Col, Rate, Card } from "antd";
import "./ProductSegment.css";
import CardImage from "../images/card-image.jpg";

const { Content } = Layout;

class ProductSegment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { heading } = this.props;
    return (
      <Content className="product-segment--container">
        <Card title={heading} className="card-shadow">
          <Row gutter={16}>
            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
              <Card
                className="product-card"
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={CardImage} />}
                bordered={false}
              >
                <div>Lorem Ipsum</div>
                <div>
                  <Rate defaultValue={4} />
                </div>
                <div>
                  <del>N 15,000.00</del>{" "}
                  <span style={{ float: "right" }}>N 15,000.00</span>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={6} xl={6}>
              <Card
                className="product-card"
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={CardImage} />}
                bordered={false}
              >
                <div>Lorem Ipsum</div>
                <div>
                  <Rate defaultValue={4} />
                </div>
                <div>
                  <del>N 15,000.00</del>{" "}
                  <span style={{ float: "right" }}>N 15,000.00</span>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={6} xl={6}>
              <Card
                className="product-card"
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={CardImage} />}
                bordered={false}
              >
                <div>Lorem Ipsum</div>
                <div>
                  <Rate defaultValue={4} />
                </div>
                <div>
                  <del>N 15,000.00</del>{" "}
                  <span style={{ float: "right" }}>N 15,000.00</span>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={6} xl={6}>
              <Card
                className="product-card"
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={CardImage} />}
                bordered={false}
              >
                <div>Lorem Ipsum</div>
                <div>
                  <Rate defaultValue={4} />
                </div>
                <div>
                  <del>N 15,000.00</del>{" "}
                  <span style={{ float: "right" }}>N 15,000.00</span>
                </div>
              </Card>
            </Col>
          </Row>
        </Card>
      </Content>
    );
  }
}

export default ProductSegment;
