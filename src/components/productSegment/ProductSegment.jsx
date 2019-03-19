import React, { Component } from "react";
import { Layout, Row, Col, Rate, Card, Skeleton } from "antd";
import axios from "axios";

import "./ProductSegment.css";
import CardImage from "../images/card-image.jpg";
import { PRODUCT_ENDPOINT } from "../constants";

const { Content } = Layout;

class ProductSegment extends Component {
  constructor(props) {
    super(props);
    this.state = { productData: [] };
  }

  componentDidMount() {
    // make API request
    axios
      .get(PRODUCT_ENDPOINT)
      .then(response => {
        // handle success
        const productData = response.data;
        this.setState({ productData });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }

  render() {
    const { heading } = this.props;
    const { productData } = this.state;

    return (
      <Content className="product-segment--container">
        <Card title={heading} className="card-shadow">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {/* Check if the data is fetched, else display loader */}
            {productData.length == 0 ? (
              <Skeleton active paragraph={{ rows: 6 }} />
            ) : (
              //Iterate over the productData using Js Array map method
              productData.map(({ id, name, rating, price, old_price }) => {
                return (
                  <Col key={id} xs={24} sm={24} md={12} lg={6} xl={6}>
                    <Card
                      className="product-card"
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt="example" src={CardImage} />}
                      bordered={false}
                    >
                      <div>{name}</div>
                      <div>
                        <Rate defaultValue={rating} />
                      </div>
                      <div>
                        <del>N&nbsp;{old_price}</del>{" "}
                        <span style={{ float: "right" }}>N&nbsp;{price}</span>
                      </div>
                    </Card>
                  </Col>
                );
              })
            )}

            {}

            {}
          </Row>
        </Card>
      </Content>
    );
  }
}

export default ProductSegment;
