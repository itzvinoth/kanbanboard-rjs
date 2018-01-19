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
                    borderLeftColor: '#4d94ff',
                    cardType: 'tripleLineWithCommentsCheckBoxAvatar'
    			},{
    				desc: 'Post new dribble shot and share it on social media',
    				imgPresent: true,
                    commentsPresent: true,
                    avatarPresent: true,
                    checkIconPresent: true,
                    cardType: 'tripleLineWithImageAvatar'
    			},{
                    desc: 'New Infographic Designs for investors',
                    imgPresent: false,
                    commentsPresent: false,
                    avatarPresent: false,
                    checkIconPresent: false,
                    cardType: 'doubleLine'
                },{
                    desc: 'Design a new dashboard for Apple watch',
                    imgPresent: false,
                    commentsPresent: true,
                    avatarPresent: true,
                    checkIconPresent: true,
                    borderLeftColor: '#009900',
                    cardType: 'tripleLineWithCommentsCheckBoxAvatar'
                },{
                    desc: 'Release new version of landing page designed by joel',
                    imgPresent: false,
                    commentsPresent: false,
                    avatarPresent: false,
                    badgePresent: true,
                    checkIconPresent: false,
                    borderLeftColor: '#ffff00',
                    cardType: 'tripleLineWithBadge'
                },{
                    desc: 'New revenue streams, speak with vladimir about details',
                    imgPresent: false,
                    commentsPresent: true,
                    avatarPresent: true,
                    checkIconPresent: false,
                    cardType: 'tripleLineWithCommentsAvatar'
                }]
    		},{
    			type: 'Next Priority',
                borderTopColor: '#009933',
    			contents: [{
                    desc: 'Unsplash.com Research, find the best examples for article',
                    imgPresent: true,
                    commentsPresent: true,
                    avatarPresent: true,
                    checkIconPresent: false,
                    cardType: 'tripleLineWithCommentsAvatar'
                },{
                    desc: 'New Team Pictures',
                    imgPresent: false,
                    commentsPresent: false,
                    avatarPresent: false,
                    checkIconPresent: false,
                    borderLeftColor: '#ffff00',
                    cardType: 'singleLine'
                },{
                    desc: 'Discuss new ideas about new Marketing techniques',
                    imgPresent: false,
                    commentsPresent: true,
                    avatarPresent: true,
                    checkIconPresent: false,
                    cardType: 'tripleLineWithCommentsAvatar'
                },{
                    desc: 'Visual Overview of the Dashboard prepare UI kit',
                    imgPresent: false,
                    commentsPresent: true,
                    avatarPresent: true,
                    checkIconPresent: true,
                    borderLeftColor: '#4d94ff',
                    cardType: 'tripleLineWithCommentsCheckBoxAvatar'
                }]
    		},{
    			type: 'In Progress',
                borderTopColor: '#3333ff',
    			contents: [{
                    desc: 'New pitch deck for CEO, based on feedback of X ventures',
                    imgPresent: false,
                    commentsPresent: false,
                    avatarPresent: false,
                    checkIconPresent: false,
                    cardType: 'doubleLine'
                },{
                    desc: 'Infographic about water resources in India(+ Pictures)',
                    imgPresent: true,
                    commentsPresent: true,
                    avatarPresent: false,
                    checkIconPresent: true,
                    cardType: 'tripleLineWithImageNoAvatar'
                },{
                    desc: 'Prepare Q2 Overview of Mixpanel statistics(Keynote required)',
                    imgPresent: false,
                    commentsPresent: true,
                    avatarPresent: false,
                    checkIconPresent: true,
                    borderLeftColor: '#4d94ff',
                    cardType: 'tripleLineWithCommentsCheckBox'
                }]
    		},{
    			type: 'QA',
                borderTopColor: '#996600',
    			contents: [{
                    desc: 'Final version of travel website promo pictures',
                    imgPresent: true,
                    commentsPresent: true,
                    avatarPresent: true,
                    checkIconPresent: true,
                    cardType: 'tripleLineWithImageAvatar'
                },{
                    desc: 'Release first teaser of night & travel UI Kit',
                    imgPresent: true,
                    commentsPresent: true,
                    avatarPresent: true,
                    checkIconPresent: true,
                    cardType: 'tripleLineWithImageAvatar'
                },{
                    desc: 'Final prototype before meeting CEO Jason stan',
                    imgPresent: false,
                    commentsPresent: false,
                    avatarPresent: false,
                    badgePresent: true,
                    checkIconPresent: false,
                    borderLeftColor: '#009900',
                    cardType: 'tripleLineWithBadge'
                }]
    		}]
    	};
    	
	}

	render() {
        const imageUrl = this.props.imageUrl;
        let styleLeftBorderColor, cardStyle;
		return (
            <div style={{marginLeft:'5%'}}>
                <Row>
                    {this.state.progress.map((prog, index) => {
                        return (<Col style={{marginLeft: '12px', marginTop:'5px', width: '240px', float: 'left'}} key={index}><h4 style={{float:'left'}}>{prog.type}&nbsp;&nbsp;</h4> <h4 style={{color: '#c2c2a3',float:'left'}}>{prog.contents.length}</h4><h4 style={{marginLeft: '90%'}}>… </h4> </Col>)
                    })}
                </Row>
				<Row>
					{this.state.progress.map((prog, index) => {
                        return (<div key={index}><Col style={{width: '240px', paddingBottom: '5px', marginLeft: '10px', marginTop: '10px', backgroundColor: '#e8e8e8', float: 'left', borderTop: '3px solid '+prog.borderTopColor}} > 
                        
						{prog.contents.map((card, id) => { 
                            function commentsPresent() {
                                if (card.commentsPresent) {
                                    return (<div style={{float:'left', marginTop:'25px'}}>
                                                <Icon type='form' />
                                                <span>1</span>&nbsp;&nbsp;
                                            </div>)
                                }
                            }
                            function checkIconPresent() {
                                if (card.checkIconPresent) {
                                    return (<div style={{float:'left', marginTop:'25px'}}>
                                            <Icon type='check-square-o' />
                                            <span>3</span>
                                        </div>)
                                }
                            }
                            function avatarPresent() {
                                if (card.avatarPresent && card.checkIconPresent) {
                                    return (<div style={{float:'left', marginTop:'10px', marginLeft: '50%'}}>
                                                <Avatar src={imageUrl} style={{}}/>
                                            </div>)
                                } else if (card.avatarPresent && !card.checkIconPresent){
                                    return (<div style={{float:'left', marginTop:'10px', marginLeft: '60%'}}>
                                                <Avatar src={imageUrl} style={{}}/>
                                            </div>)
                                }
                            }
                            function imgPresent() {
                                if (card.imgPresent) {
                                    return (<img src={logo} style={{width:'210px', height:'130px'}}/>)
                                }
                            }
                            function badgePresent() {
                                if (card.badgePresent) {
                                    return (<div style={{color:'#FFFFFF', backgroundColor:'#ff4d4d', width:'35%',height: '95%', marginTop: '2px', borderRadius:'4px'}}><Icon style={{ marginLeft:'4px'}} type='clock-circle-o' /><span style={{ marginLeft:'4px'}}>12:00</span></div>)
                                }
                            }

                            function singleLine() {
                                if (card.cardType == 'singleLine') {
                                    if (card.cardType == 'singleLine' && card.borderLeftColor !== undefined) {
                                        cardStyle = {margin: '5px', borderLeft: '3px solid '+card.borderLeftColor, width:'230px', height: '40px', borderRadius: '2px', fontFamily: 'ProximaNova', fontSize: '13px', fontWeight: '600', fontStyle: 'normal', fontStretch: 'normal', lineHeight: '1.36', letterSpacing: 'normal', textAlign: 'left', color: '#354052'};
                                    } else if (card.cardType == 'singleLine' && card.borderLeftColor === undefined){
                                        cardStyle = {margin: '5px', width:'230px', height: '40px', borderRadius: '2px',fontFamily: 'ProximaNova', fontSize: '13px', fontWeight: '600', fontStyle: 'normal', fontStretch: 'normal', lineHeight: '1.36', letterSpacing: 'normal', textAlign: 'left', color: '#354052'}
                                    }
                                    return (<Card style={cardStyle}><div>{card.desc}</div></Card>)
                                }
                            }
                            function doubleLine() {
                                if (card.cardType == 'doubleLine') {
                                    if (card.cardType == 'doubleLine' && card.borderLeftColor !== undefined) {
                                        cardStyle = {margin: '5px', borderLeft: '3px solid '+card.borderLeftColor, width:'230px', height: '60px', borderRadius: '2px', fontFamily: 'ProximaNova', fontSize: '13px', fontWeight: '600', fontStyle: 'normal', fontStretch: 'normal', lineHeight: '1.36', letterSpacing: 'normal', textAlign: 'left', color: '#354052'};
                                    } else if (card.cardType == 'doubleLine' && card.borderLeftColor === undefined){
                                        cardStyle = {margin: '5px', width:'230px', height: '60px', borderRadius: '2px', fontFamily: 'ProximaNova', fontSize: '13px', fontWeight: '600', fontStyle: 'normal', fontStretch: 'normal', lineHeight: '1.36', letterSpacing: 'normal', textAlign: 'left', color: '#354052'}
                                    }
                                    return (<Card style={cardStyle}><div>{card.desc}</div></Card>)
                                }
                            }
                            function tripleLineWithBadge() {
                                if (card.cardType == 'tripleLineWithBadge') {
                                    if (card.cardType == 'tripleLineWithBadge' && card.borderLeftColor !== undefined) {
                                        cardStyle = {margin: '5px', borderLeft: '3px solid '+card.borderLeftColor, width:'230px', height: '90px', borderRadius: '2px', fontFamily: 'ProximaNova', fontSize: '13px', fontWeight: '600', fontStyle: 'normal', fontStretch: 'normal', lineHeight: '1.36', letterSpacing: 'normal', textAlign: 'left', color: '#354052'};
                                    } else if (card.cardType == 'tripleLineWithBadge' && card.borderLeftColor === undefined){
                                        cardStyle = {margin: '5px', width:'230px', height: '90px', borderRadius: '2px', fontFamily: 'ProximaNova', fontSize: '13px', fontWeight: '600', fontStyle: 'normal', fontStretch: 'normal', lineHeight: '1.36', letterSpacing: 'normal', textAlign: 'left', color: '#354052'}
                                    }
                                    return (<Card style={cardStyle}><div>{card.desc}</div>{badgePresent()}</Card>)
                                }
                            }
                            function tripleLineWithCommentsCheckBoxAvatar() {
                                if (card.cardType == 'tripleLineWithCommentsCheckBoxAvatar') {
                                    if (card.cardType == 'tripleLineWithCommentsCheckBoxAvatar' && card.borderLeftColor !== undefined) {
                                        cardStyle = {margin: '5px', borderLeft: '3px solid '+card.borderLeftColor, width:'230px', height: '90px', borderRadius: '2px', fontFamily: 'ProximaNova', fontSize: '13px', fontWeight: '600', fontStyle: 'normal', fontStretch: 'normal', lineHeight: '1.36', letterSpacing: 'normal', textAlign: 'left', color: '#354052'};
                                    } else if (card.cardType == 'tripleLineWithCommentsCheckBoxAvatar' && card.borderLeftColor === undefined){
                                        cardStyle = {margin: '5px', width:'230px', height: '90px', borderRadius: '2px', fontFamily: 'ProximaNova', fontSize: '13px', fontWeight: '600', fontStyle: 'normal', fontStretch: 'normal', lineHeight: '1.36', letterSpacing: 'normal', textAlign: 'left', color: '#354052'}
                                    }
                                    return (<Card style={cardStyle}><div>{card.desc}</div>{commentsPresent()}{checkIconPresent()}{avatarPresent()}</Card>)
                                }
                            }
                            function tripleLineWithCommentsCheckBox() {
                                if (card.cardType == 'tripleLineWithCommentsCheckBox') {
                                    if (card.cardType == 'tripleLineWithCommentsCheckBox' && card.borderLeftColor !== undefined) {
                                        cardStyle = {margin: '5px', borderLeft: '3px solid '+card.borderLeftColor, width:'230px', height: '90px', borderRadius: '2px', fontFamily: 'ProximaNova', fontSize: '13px', fontWeight: '600', fontStyle: 'normal', fontStretch: 'normal', lineHeight: '1.36', letterSpacing: 'normal', textAlign: 'left', color: '#354052'};
                                    } else if (card.cardType == 'tripleLineWithCommentsCheckBox' && card.borderLeftColor === undefined){
                                        cardStyle = {margin: '5px', width:'230px', height: '90px', borderRadius: '2px', fontFamily: 'ProximaNova', fontSize: '13px', fontWeight: '600', fontStyle: 'normal', fontStretch: 'normal', lineHeight: '1.36', letterSpacing: 'normal', textAlign: 'left', color: '#354052'}
                                    }
                                    return (<Card style={cardStyle}><div>{card.desc}</div>{commentsPresent()}{checkIconPresent()}</Card>)
                                }
                            }
                            function tripleLineWithCommentsAvatar() {
                                if (card.cardType == 'tripleLineWithCommentsAvatar') {
                                    if (card.cardType == 'tripleLineWithCommentsAvatar' && card.borderLeftColor !== undefined) {
                                        cardStyle = {margin: '5px', borderLeft: '3px solid '+card.borderLeftColor, width:'230px', height: '90px', borderRadius: '2px', fontFamily: 'ProximaNova', fontSize: '13px', fontWeight: '600', fontStyle: 'normal', fontStretch: 'normal', lineHeight: '1.36', letterSpacing: 'normal', textAlign: 'left', color: '#354052'};
                                    } else if (card.cardType == 'tripleLineWithCommentsAvatar' && card.borderLeftColor === undefined){
                                        cardStyle = {margin: '5px', width:'230px', height: '90px', borderRadius: '2px', fontFamily: 'ProximaNova', fontSize: '13px', fontWeight: '600', fontStyle: 'normal', fontStretch: 'normal', lineHeight: '1.36', letterSpacing: 'normal', textAlign: 'left', color: '#354052'}
                                    }
                                    return (<Card style={cardStyle}><div>{card.desc}</div>{commentsPresent()}{avatarPresent()}</Card>)
                                }
                            }
                            function tripleLineWithImageAvatar() {
                                if (card.cardType == 'tripleLineWithImageAvatar') {
                                    if (card.cardType == 'tripleLineWithImageAvatar' && card.borderLeftColor !== undefined) {
                                        cardStyle = {margin: '5px', borderLeft: '3px solid '+card.borderLeftColor, width:'230px', height: '225px', borderRadius: '2px', fontFamily: 'ProximaNova', fontSize: '13px', fontWeight: '600', fontStyle: 'normal', fontStretch: 'normal', lineHeight: '1.36', letterSpacing: 'normal', textAlign: 'left', color: '#354052'};
                                    } else if (card.cardType == 'tripleLineWithImageAvatar' && card.borderLeftColor === undefined){
                                        cardStyle = {margin: '5px', width:'230px', height: '225px', borderRadius: '2px', fontFamily: 'ProximaNova', fontSize: '13px', fontWeight: '600', fontStyle: 'normal', fontStretch: 'normal', lineHeight: '1.36', letterSpacing: 'normal', textAlign: 'left', color: '#354052'}
                                    }
                                    return (<Card style={cardStyle}>{imgPresent()}<div>{card.desc}</div><div style={{height:'30px'}}>{commentsPresent()}{checkIconPresent()}{avatarPresent()}</div></Card>)
                                }
                            }
                            function tripleLineWithImageNoAvatar() {
                                if (card.cardType == 'tripleLineWithImageNoAvatar') {
                                    if (card.cardType == 'tripleLineWithImageNoAvatar' && card.borderLeftColor !== undefined) {
                                        cardStyle = {margin: '5px', borderLeft: '3px solid '+card.borderLeftColor, width:'230px', height: '225px', borderRadius: '2px', fontFamily: 'ProximaNova', fontSize: '13px', fontWeight: '600', fontStyle: 'normal', fontStretch: 'normal', lineHeight: '1.36', letterSpacing: 'normal', textAlign: 'left', color: '#354052'};
                                    } else if (card.cardType == 'tripleLineWithImageNoAvatar' && card.borderLeftColor === undefined){
                                        cardStyle = {margin: '5px', width:'230px', height: '225px', borderRadius: '2px', fontFamily: 'ProximaNova', fontSize: '13px', fontWeight: '600', fontStyle: 'normal', fontStretch: 'normal', lineHeight: '1.36', letterSpacing: 'normal', textAlign: 'left', color: '#354052'}
                                    }
                                    return (<Card style={cardStyle}>{imgPresent()}<div>{card.desc}</div>{commentsPresent()}{checkIconPresent()}</Card>)
                                }
                            }
							
	      					return (<div key={id}>
									{singleLine()}
                                    {doubleLine()}
                                    {tripleLineWithBadge()}
                                    {tripleLineWithCommentsCheckBoxAvatar()}
                                    {tripleLineWithCommentsCheckBox()}
                                    {tripleLineWithCommentsAvatar()}
                                    {tripleLineWithImageAvatar()}
                                    {tripleLineWithImageNoAvatar()}
								</div>)
						})}
                    <div style={{position:'absolute', marginLeft:'5px'}}><Icon type='plus-circle' style={{fontSize: '30px', color:"#6666ff"}}/></div>
					</Col></div>)
					})}
                    <Col style={{ width: '240px', marginLeft: '10px', marginTop: '10px', float: 'left'}}>
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
