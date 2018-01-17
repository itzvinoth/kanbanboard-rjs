import React from "react";
import { Badge, Layout, Avatar , Row, Col, Button, Icon, Input, Menu, Dropdown } from "antd";
import "./Cards.css";
import Cards from "./Cards";

const { Header, Content, Footer } = Layout;
const Search = Input.Search;
const SubMenu = Menu.SubMenu;

const menu = (
  <Menu>
    <Menu.Item key="0">
      1st menu item
    </Menu.Item>
    <Menu.Item key="1">
      2nd menu item
    </Menu.Item>
  </Menu>
);

export default class LayoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    };

  }

  render() {
    const { imageUrl } = this.state;
    return (
      <div style={{height:"100%", width:"100%"}}>
        <Layout style={{minHeight:"100%"}}>
          <Header style={{background:"#6666ff"}}>
            <div style={{float:"left", marginTop:"10px"}}><Icon type="select" style={{background:"#333300", color:"#FFFFFF", fontSize: "20px", margin:"10px", border:"8px solid black", borderRadius: "4px"}}/></div>
            <div>
              <Menu mode="horizontal" style={{ lineHeight: "63px", background:"#6666ff", color:"#FFFFFF", float:"left" }} >
                <Menu.Item key="1">Boards&nbsp;&nbsp;<span><Icon type="down" style={{color: "#FFFFFF", fontSize: "8px"}}/></span></Menu.Item>
                <Menu.Item key="2">Activity<Badge count={2} style={{background: "#ff6600", color: "#FFFFFF", marginTop:"-20px"}}/></Menu.Item>
                <Menu.Item key="3">Team mates</Menu.Item>
              </Menu>
              <div style={{marginLeft: "90%"}}>
              <Dropdown overlay={menu} trigger={["click"]}>
                <div style={{marginTop: "5%", textAlign:"center"}}>
                <Avatar src={imageUrl} />
                  <Icon type="down" style={{color: "#FFFFFF"}}/>
                </div>
              </Dropdown>
              </div>
            </div>
          </Header>
          <Header style={{ width: "100%", background:"#FFFFFF" }}>
            <Row gutter={16}>
              <Col className="gutter-row" span={14}>
                <h3 style={{color:"#000000", float:"left", marginLeft: "10px"}}>Design Backlog &nbsp;&nbsp;</h3>
                <h3 style={{color:"#999999"}}>|&nbsp;&nbsp;Dashboard Design Team</h3>
              </Col>
              <Col className="gutter-row" span={7} style={{textAlign: "right"}}>
                <Search placeholder="Search" style={{ width: "300px" }}/>
              </Col>
              <Col className="gutter-row" span={3} style={{textAlign: "left"}}>
                <Button style={{ background:"#6666ff", color: "#FFFFFF" }}>
                  <Icon type="plus" />New Card
                </Button>
              </Col>
            </Row>
          </Header>
          <Content style={{ background:" #f5f5f0" }}>            
            <div>  <Cards imageUrl={imageUrl}/> </div>
          </Content>
          <div style={{background:" #f5f5f0", width:"100%", height: "100px"}}></div>
        </Layout>  
      </div>
    )
  }
}
