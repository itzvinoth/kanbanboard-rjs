import React from 'react';

import {  Row, Col, Card, Icon, Avatar, Button } from 'antd';
import './Cards.css';
import 'antd/dist/antd.css';
import logo from './logo.jpg';

const { Meta } = Card;
export default class Cards extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		progress: [{
    			type: 'Backlog',
                borderTopColor: '#ff0000',
    			contents: [{
    				desc: 'Monetisation (Share revenue )',
    				imgAvail: true,
    			},{
    				desc: 'Post new dribble shot and share it on social media Post new dribble shot and share it on social media',
    				imgAvail: false,
    			},{
                    desc: 'Post new dribble shot and share it on social media',
                    imgAvail: false,
                }]
    		},{
    			type: 'Next Priority',
                borderTopColor: '#009933',
    			contents: [{
    				desc: 'Post new dribble shot and share it on social media',
    				imgAvail: false,
    			},{
                    desc: 'Monetisation (Share revenue )',
                    imgAvail: true,
                }]
    		},{
    			type: 'In Progress',
                borderTopColor: '#3333ff',
    			contents: [{
    				desc: 'Monetisation (Share revenue )',
    				imgAvail: true,
    			},{
    				desc: 'Post new dribble shot and share it on social media',
    				imgAvail: false,
    			}]
    		},{
    			type: 'QA',
                borderTopColor: '#996600',
    			contents: [{
    				desc: 'Monetisation (Share revenue )',
    				imgAvail: true,
    			},{
    				desc: 'Post new dribble shot and share it on social media',
    				imgAvail: false,
    			},{
    				desc: 'Post new dribble shot and share it on social media',
    				imgAvail: false,
    			}]
    		}]
    	};
    	
	}

	render() {
        const imageUrl = this.props.imageUrl;
        const styles = {
            cardStyle : {
                margin: '5px'
            }, logoStyle: {
                width:'180px',
                height:'100px',
                marginLeft:'30px'
            }
        };
		return (
			<div>
                <Row>
                    {this.state.progress.map((prog, index) => {
                        return (<Col span={4} style={{marginLeft: '12px', marginTop:'5px'}} key={index}><h4>{prog.type + ' ' +prog.contents.length}</h4> </Col>)
                    })}
                </Row>
				<Row>
					{this.state.progress.map((prog, index) => {
                        return (<div key={index}><Col span={4} style={{paddingBottom: '5px', marginLeft: '10px', marginTop: '10px', backgroundColor: '#e8e8e8', float: 'left', borderTop: '3px solid '+prog.borderTopColor}} > 
                        
						{prog.contents.map((card, id) => { 
							if (card.imgAvail) {
		      					return (<div key={id}>
										<Card style={styles.cardStyle} cover={<img src={logo} style={styles.logoStyle}/>}>
										    <Meta description={card.desc}/>
                                            <div style={{float:'left', marginTop:'5%'}}>
                                            <Icon type='check-square-o' />
                                            <span>3</span>&nbsp;&nbsp;
                                            <Icon type='form' />
                                            <span>1</span>
                                            </div>
                                            <Avatar src={imageUrl} style={{marginLeft:'40%'}}/>
										</Card>
									</div>)
		      				} else {
		      					return (<div key={id}>
										<Card style={styles.cardStyle}>
										<div>{card.desc}</div>
										</Card>
									</div>)
		      				}
						})}
                    <div style={{position:'fixed', marginLeft:'5px'}}><Icon type='plus-circle' style={{fontSize: '30px', color:"#6666ff"}}/></div>
					</Col></div>)
					})}
                    <Col span={4} style={{ marginLeft: '10px', marginTop: '10px', float: 'left'}}>
                        <Button size='large' style= {{backgroundColor: '#e8e8e8'}}>
                            <Icon type='plus' />Add a board
                        </Button>
                    </Col>
				</Row>
			</div>
		)
	}
}
