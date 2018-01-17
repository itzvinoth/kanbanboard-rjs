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
                    avatarPresent: true,
                    checkIconPresent: true,
                    borderLeftColor: '#4d94ff'
    			},{
    				desc: 'Post new dribble shot and share it on social media',
    				imgPresent: true,
                    commentsPresent: true,
                    avatarPresent: true,
                    checkIconPresent: true
    			},{
                    desc: 'Post new dribble shot and share it on social media',
                    imgPresent: false,
                    commentsPresent: false,
                    avatarPresent: false,
                    checkIconPresent: false
                },{
                    desc: 'Monetisation (Share revenue with developers)',
                    imgPresent: false,
                    commentsPresent: true,
                    avatarPresent: true,
                    checkIconPresent: true,
                    borderLeftColor: '#009900'
                },{
                    desc: 'Post new dribble shot and share it on social media',
                    imgPresent: false,
                    commentsPresent: false,
                    avatarPresent: false,
                    badgePresent: true,
                    checkIconPresent: false,
                    borderLeftColor: '#ffff00'
                },{
                    desc: 'Post new dribble shot and share it on social media',
                    imgPresent: false,
                    commentsPresent: true,
                    avatarPresent: true,
                    checkIconPresent: false
                }]
    		},{
    			type: 'Next Priority',
                borderTopColor: '#009933',
    			contents: [{
                    desc: 'Post new dribble shot and share it on social media',
                    imgPresent: true,
                    commentsPresent: true,
                    avatarPresent: true,
                    checkIconPresent: false
                },{
                    desc: 'Post new dribble shot and share it on social media',
                    imgPresent: false,
                    commentsPresent: false,
                    avatarPresent: false,
                    checkIconPresent: false,
                    borderLeftColor: '#ffff00'
                },{
                    desc: 'Post new dribble shot and share it on social media',
                    imgPresent: false,
                    commentsPresent: true,
                    avatarPresent: true,
                    checkIconPresent: false
                },{
                    desc: 'Post new dribble shot and share it on social media',
                    imgPresent: false,
                    commentsPresent: true,
                    avatarPresent: true,
                    checkIconPresent: true,
                    borderLeftColor: '#4d94ff'
                }]
    		},{
    			type: 'In Progress',
                borderTopColor: '#3333ff',
    			contents: [{
                    desc: 'Post new dribble shot and share it on social media',
                    imgPresent: false,
                    commentsPresent: false,
                    avatarPresent: false,
                    checkIconPresent: false
                },{
                    desc: 'Post new dribble shot and share it on social media',
                    imgPresent: true,
                    commentsPresent: true,
                    avatarPresent: false,
                    checkIconPresent: true
                },{
                    desc: 'Post new dribble shot and share it on social media',
                    imgPresent: false,
                    commentsPresent: true,
                    avatarPresent: false,
                    checkIconPresent: true,
                    borderLeftColor: '#4d94ff'
                }]
    		},{
    			type: 'QA',
                borderTopColor: '#996600',
    			contents: [{
                    desc: 'Post new dribble shot and share it on social media',
                    imgPresent: true,
                    commentsPresent: true,
                    avatarPresent: true,
                    checkIconPresent: true
                },{
                    desc: 'Post new dribble shot and share it on social media',
                    imgPresent: true,
                    commentsPresent: true,
                    avatarPresent: true,
                    checkIconPresent: true
                },{
                    desc: 'Post new dribble shot and share it on social media',
                    imgPresent: false,
                    commentsPresent: false,
                    avatarPresent: false,
                    badgePresent: true,
                    checkIconPresent: false,
                    borderLeftColor: '#009900'
                }]
    		}]
    	};
    	
	}

	render() {
        const imageUrl = this.props.imageUrl;
        let styleLeftBorderColor;
		return (
            <div style={{marginLeft:'5%'}}>
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
                                                <Icon type='form' />
                                                <span>1</span>&nbsp;&nbsp;
                                            </div>)
                                }
                            }
                            function checkIconPresent() {
                                if (card.checkIconPresent) {
                                    return (<div style={{float:'left', marginTop:'5%'}}>
                                            <Icon type='check-square-o' />
                                            <span>3</span>
                                        </div>)
                                }
                            }
                            function avatarPresent() {
                                if (card.avatarPresent && card.checkIconPresent) {
                                    return (<div>
                                                <Avatar src={imageUrl} style={{marginLeft: '50%', marginTop:'3px'}}/>
                                            </div>)
                                } else if (card.avatarPresent && !card.checkIconPresent){
                                    return (<div>
                                                <Avatar src={imageUrl} style={{marginLeft: '60%', marginTop:'3px'}}/>
                                            </div>)
                                }
                            }
                            function imgPresent() {
                                if (card.imgPresent) {
                                    return (<img src={logo} style={{width:'80%', height:'100px', marginLeft:'10px'}}/>)
                                }
                            }
                            function badgePresent() {
                                if (card.badgePresent) {
                                    return (<div style={{color:'#FFFFFF', backgroundColor:'#ff4d4d', width:'35%',height: '95%', marginTop: '2px', borderRadius:'4px'}}><Icon style={{ marginLeft:'4px'}} type='clock-circle-o' /><span style={{ marginLeft:'4px'}}>12:00</span></div>)
                                }
                            }
                            if (card.borderLeftColor !== undefined) {
                                styleLeftBorderColor = {margin: '5px', borderLeft: '3px solid '+card.borderLeftColor}
                            } else {
                                styleLeftBorderColor = {margin: '5px'}
                            }
							
	      					return (<div key={id}>
									<Card style={styleLeftBorderColor}>
                                        {imgPresent()}
									    <div>{card.desc}</div>
                                            {commentsPresent()}
                                            {checkIconPresent()}
                                            {avatarPresent()}
                                            {badgePresent()}
									</Card>
								</div>)
						})}
                    <div style={{position:'absolute', marginLeft:'5px'}}><Icon type='plus-circle' style={{fontSize: '30px', color:"#6666ff"}}/></div>
					</Col></div>)
					})}
                    <Col span={4} style={{ marginLeft: '10px', marginTop: '10px', float: 'left'}}>
                        <Button size='large' style= {{backgroundColor: '#e8e8e8', width:'100%'}}>
                            <div style={{textAlign: 'left'}}>
                            <Icon type='plus' />Add a board
                            </div>
                        </Button>
                    </Col>
				</Row>
			</div>
		)
	}
}
