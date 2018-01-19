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
      <div style={{height:"100%", width:"1500px"}}>
        <Layout style={{minHeight:"100%"}}>
          <Header style={{background:"#1990ea"}}>
            <div style={{float:"left"}}><Icon type="select" style={{background:"#1166a5", color:"#FFFFFF", fontSize: "20px", margin:"10px", border:"8px solid #1166a5", borderRadius: "4px"}}/></div>
            <div style={{ backgroundColor:"#1990ea"}}>
              <Menu mode="horizontal" style={{ background:"#1990ea", color:"#FFFFFF", float:"left", border: "2px" }} >
                <Menu.Item key="1">Boards&nbsp;&nbsp;<span><Icon type="down" style={{color: "#FFFFFF", fontSize: "8px"}}/></span></Menu.Item>
                <Menu.Item key="2">Activity<Badge count={2} style={{background: "#ff7800", color: "#FFFFFF", marginTop:"-20px"}}/></Menu.Item>
                <Menu.Item key="3">Teammates</Menu.Item>
              </Menu>
              <div style={{marginLeft: "90%"}}>
              <Dropdown overlay={menu} trigger={["click"]}>
                <div style={{marginTop: "6%", textAlign:"center"}}>
                <Avatar src={imageUrl} />
                  <Icon type="down" style={{color: "#FFFFFF", position:"absolute", marginTop:"20px", marginLeft:"5px"}}/>
                </div>
              </Dropdown>
              </div>
            </div>
          </Header>
          <Header style={{ width: "100%", background:"#FFFFFF" }}>
            <Row gutter={16}>
              <Col className="gutter-row" span={14}>
                <h3 style={{color:"#354052", float:"left", marginLeft: "10px", fontSize: "16px"}}>Design Backlog &nbsp;&nbsp;</h3>
                <h3 style={{color:"#7f8fa4", fontSize: "12px", marginTop: "1.5px"}}>|&nbsp;&nbsp;Dashboard Design Team</h3>
              </Col>
              <Col className="gutter-row" span={7} style={{textAlign: "right"}}>
                <Search placeholder="Search" style={{ width: "300px" }}/>
              </Col>
              <Col className="gutter-row" span={3} style={{textAlign: "left"}}>
                <Button style={{ background:"#1990ea", color: "#FFFFFF" }}>
                  <Icon type="plus" />New Card
                </Button>
              </Col>
            </Row>
          </Header>
          <Content style={{ background:" #eff3f6" }}>            
            <div>  <Cards imageUrl={imageUrl}/> </div>
          </Content>
          <div style={{background:" #eff3f6", width:"100%", height: "100px"}}></div>
        </Layout>  
      </div>
    )
  }
}
