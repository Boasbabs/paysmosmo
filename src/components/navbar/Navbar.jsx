import React, { Component } from "react";
import { Layout, Menu } from "antd";

import "./Navbar.css";

const { Header } = Layout;

class Navbar extends Component {
  state = {};
  render() {
    return (
      <Header className="navbar-header">
        <Menu mode="horizontal" className="navbar-menu">
          <Menu.Item key="1" className="navbar-menu--item">
            How it works
          </Menu.Item>
          <Menu.Item key="2" className="navbar-menu--item">
            Log In
          </Menu.Item>
          <Menu.Item key="#124" className="navbar-menu--item" disabled>
            &#124;
          </Menu.Item>
          <Menu.Item key="3" className="navbar-menu--item signup">
            Sign Up
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default Navbar;
