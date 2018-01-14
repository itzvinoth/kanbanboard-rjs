import React from "react";
import { Badge, Layout, Avatar , Row, Col, Button, Icon, Input, Menu } from "antd";
import "./Cards.css";
import Cards from "./Cards";

const { Header, Content, Footer } = Layout;
const Search = Input.Search;
const SubMenu = Menu.SubMenu;

export default class LayoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {

    return (
      <div style={{height:"100%", width:"100%"}}>
        <Layout style={{minHeight:"100%"}}>
          <Header style={{background:"#6666ff"}}>
            <div>
              <Menu mode="horizontal" style={{ lineHeight: "63px", background:"#6666ff", color:"#FFFFFF" }} >
                <Menu.Item key="1">Boards</Menu.Item>
                <Menu.Item key="2">Activity</Menu.Item>
                <Menu.Item key="3">Team mates</Menu.Item>
              </Menu>
            </div>
          </Header>
          <Header style={{ position: "fixed", width: "100%", background:"#FFFFFF", marginTop: "5%" }}>
            <Row gutter={16}>
              <Col className="gutter-row" span={14}>
                <h3 style={{color:"#000000", float:"left", marginLeft: "10px"}}>Design Backlog &nbsp;&nbsp;</h3>
                <h3 style={{color:"#999999"}}>|&nbsp;&nbsp;Dashboard Design Team</h3>
              </Col>
              <Col className="gutter-row" span={6}>
                <Search placeholder="Search" style={{ width: "300px" }}/>
              </Col>
              <Col className="gutter-row" span={4}>
                <Button type="primary">
                  <Icon type="plus" />New Card
                </Button>
              </Col>
            </Row>
          </Header>
          <Content style={{marginTop: "10%", background:" #e2dada", }}>            
            <div>  <Cards/> </div>
          </Content>
        </Layout>  
      </div>
    )
  }
}
