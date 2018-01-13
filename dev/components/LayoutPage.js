import React from "react";
import { Layout, Avatar , Row, Col, Button, Icon } from 'antd';
import './Cards.css';
import Cards from "./Cards";

const { Header, Content, Footer } = Layout;

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
          <Header style={{ position: 'fixed', width: '100%', background:"#FFFFFF" }}>
            <Row gutter={16}>
              <Col className="gutter-row" span={4}>
                <h3 style={{color:"#000000"}}>Design Backlog</h3>
              </Col>
              <Col className="gutter-row" span={6}>
                <Button icon="search" size='large' style={{width: '250px'}}>Search</Button>
              </Col>
              <Col className="gutter-row" span={4}>
                <Button type="primary">
                  <Icon type="plus" />New Card
                </Button>
              </Col>
            </Row>
          </Header>
          <Content style={{marginTop: 100, background:" #e2dada", }}>            
            <div>  <Cards/> </div>
          </Content>
        </Layout>  
      </div>
    )
  }
}
