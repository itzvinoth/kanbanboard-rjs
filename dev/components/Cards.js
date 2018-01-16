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
    				desc: 'Monetisation (Share revenue with developers)',
    				imgPresent: false,
                    commentsPresent: true,
                    avatarPresent: true
    			},{
    				desc: 'Post new dribble shot and share it on social media',
    				imgPresent: true,
                    commentsPresent: true,
                    avatarPresent: true
    			},{
                    desc: 'Post new dribble shot and share it on social media',
                    imgPresent: false,
                    commentsPresent: false,
                    avatarPresent: false
                },{
                    desc: 'Monetisation (Share revenue with developers)',
                    imgPresent: false,
                    commentsPresent: true,
                    avatarPresent: true
                },{
                    desc: 'Post new dribble shot and share it on social media',
                    imgPresent: false,
                    commentsPresent: false,
                    avatarPresent: false,
                    badgePresent: true
                },{
                    desc: 'Post new dribble shot and share it on social media',
                    imgPresent: false,
                    commentsPresent: true,
                    avatarPresent: true
                }]
    		},{
    			type: 'Next Priority',
                borderTopColor: '#009933',
    			contents: [{
                    desc: 'Post new dribble shot and share it on social media',
                    imgPresent: true,
                    commentsPresent: true,
                    avatarPresent: true
                },{
                    desc: 'Post new dribble shot and share it on social media',
                    imgPresent: false,
                    commentsPresent: false,
                    avatarPresent: false
                },{
                    desc: 'Post new dribble shot and share it on social media',
                    imgPresent: false,
                    commentsPresent: true,
                    avatarPresent: true
                },{
                    desc: 'Post new dribble shot and share it on social media',
                    imgPresent: false,
                    commentsPresent: true,
                    avatarPresent: true
                }]
    		},{
    			type: 'In Progress',
                borderTopColor: '#3333ff',
    			contents: [{
                    desc: 'Post new dribble shot and share it on social media',
                    imgPresent: false,
                    commentsPresent: false,
                    avatarPresent: false
                },{
                    desc: 'Post new dribble shot and share it on social media',
                    imgPresent: true,
                    commentsPresent: true,
                    avatarPresent: false
                },{
                    desc: 'Post new dribble shot and share it on social media',
                    imgPresent: false,
                    commentsPresent: true,
                    avatarPresent: false
                }]
    		},{
    			type: 'QA',
                borderTopColor: '#996600',
    			contents: [{
                    desc: 'Post new dribble shot and share it on social media',
                    imgPresent: true,
                    commentsPresent: true,
                    avatarPresent: true
                },{
                    desc: 'Post new dribble shot and share it on social media',
                    imgPresent: true,
                    commentsPresent: true,
                    avatarPresent: true
                },{
                    desc: 'Post new dribble shot and share it on social media',
                    imgPresent: false,
                    commentsPresent: false,
                    avatarPresent: false,
                    badgePresent: true
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
                marginLeft:'10px'
            }
        };
		return (
            <div>
                <Row>
                    {this.state.progress.map((prog, index) => {
                        return (<Col span={4} style={{marginLeft: '12px', marginTop:'5px'}} key={index}><h4 style={{float:'left'}}>{prog.type}&nbsp;&nbsp;</h4> <h4 style={{color: '#c2c2a3',float:'left'}}>{prog.contents.length}</h4><h4 style={{marginLeft: '90%'}}>… </h4> </Col>)
                    })}
                </Row>
				<Row>
					{this.state.progress.map((prog, index) => {
                        return (<div key={index}><Col span={4} style={{paddingBottom: '5px', marginLeft: '10px', marginTop: '10px', backgroundColor: '#e8e8e8', float: 'left', borderTop: '3px solid '+prog.borderTopColor}} > 
                        
						{prog.contents.map((card, id) => { 
                            function commentsPresent() {
                                if (card.commentsPresent) {
                                    return (<div style={{float:'left', marginTop:'5%'}}>
                                                <Icon type='check-square-o' />
                                                <span>3</span>&nbsp;&nbsp;
                                                <Icon type='form' />
                                                <span>1</span>
                                            </div>)
                                }
                            }
                            function avatarPresent() {
                                if (card.avatarPresent) {
                                    return (<div>
                                                <Avatar src={imageUrl} style={{marginLeft: '50%', marginTop:'3px'}}/>
                                            </div>)
                                }
                            }
                            function imgPresent() {
                                if (card.imgPresent) {
                                    return (<img src={logo} style={styles.logoStyle}/>)
                                }
                            }
                            function badgePresent() {
                                if (card.badgePresent) {
                                    return (<div style={{color:'#FFFFFF', backgroundColor:'#ff4d4d', width:'35%',height: '95%', marginTop: '2px', borderRadius:'4px'}}><Icon style={{ marginLeft:'4px'}} type='clock-circle-o' /><span style={{ marginLeft:'4px'}}>12:00</span></div>)
                                }
                            }
							
	      					return (<div key={id}>
									<Card style={styles.cardStyle}>
                                        {imgPresent()}
									    <div>{card.desc}</div>
                                            {commentsPresent()}
                                            {avatarPresent()}
                                            {badgePresent()}
									</Card>
								</div>)
						})}
                    <div style={{position:'absolute', marginLeft:'5px'}}><Icon type='plus-circle' style={{fontSize: '30px', color:"#6666ff"}}/></div>
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
