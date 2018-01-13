import React from 'react';

import {  Row, Col, Card } from 'antd';
import './Cards.css';
import logo from './logo.jpg';

const { Meta } = Card;
export default class Cards extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		progress: [{
    			type: 'Backlog',
    			contents: [{
    				desc: 'Monetisation (Share revenue with developers)',
    				imgAvail: true,
    			},{
    				desc: 'Post new dribble shot and share it on social media',
    				imgAvail: false,
    			}]
    		},{
    			type: 'Next Priority',
    			contents: [{
    				desc: 'Monetisation (Share revenue with developers)',
    				imgAvail: true,
    			},{
    				desc: 'Post new dribble shot and share it on social media',
    				imgAvail: false,
    			}]
    		},{
    			type: 'In Progress',
    			contents: [{
    				desc: 'Monetisation (Share revenue with developers)',
    				imgAvail: true,
    			},{
    				desc: 'Post new dribble shot and share it on social media',
    				imgAvail: false,
    			}]
    		},{
    			type: 'QA',
    			contents: [{
    				desc: 'Monetisation (Share revenue with developers)',
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
		// <img src={logo} width="100" height="50" />
		const divStyle = {
			marginLeft: '10px',
			marginTop: '10px'
		};
		const cardStyle= {
			margin: '5px' 
		}
		return (
			<div>
				<Row>
					{this.state.progress.map((prog, index) => {
						return (<Col span={5} style={divStyle} key={index}> 
						{prog.contents.map((card, id) => { 
							if (card.imgAvail) {
		      					return (<div key={id}>
										<Card style={cardStyle} cover={<img src={logo} style={{width:'200px',height:'100px',marginLeft:'30px'}}/>}>
										    <Meta description={card.desc}/>
										</Card>
									</div>)
		      				} else {
		      					return (<div key={id}>
										<Card style={cardStyle}>
										<div><text>{card.desc}</text>
										</div></Card>
									</div>)
		      				}
						
						})}
					</Col>)
					})}
					
				</Row>
			</div>
		)
	}
}
