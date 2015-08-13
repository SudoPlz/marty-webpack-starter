'use strict';
import Marty from 'marty';
import React from 'react';
import MD5 from 'md5';
import {PageHeader, Panel, Row, Col, Button, Thumbnail, Alert} from 'react-bootstrap';
import _ from 'lodash';
import ModalChangeCreds from '../components/changeCredsModal/modalChangeCreds.js';

class ProfilePage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            modalProps: {visible:false, changeType:''},
            alertBox:{msg:'',style:null}
        };
        //this.onKeyDown = _.bind(this.onKeyDown, this);
        this.closeCredChangeModal = _.bind(this.closeCredChangeModal, this);
        this.openCredChangeModal = _.bind(this.openCredChangeModal, this);
        this.setAlertBox = _.bind(this.setAlertBox, this);
    }

    closeCredChangeModal(e){
        console.log('closeFunc ran');
        this.setState({modalProps: {visible:false, changeType:''}});
    }

    openCredChangeModal(type){
        this.setState({modalProps: {visible:true, changeType:type}});
    }


    componentWillReceiveProps(nextProps){
        //console.log('Old user: '+this.props.user+ ' new user: '+nextProps.user);
        if(this.props.user!=nextProps.user){
            //console.log('Check for permission changes!');
            this.props.checkPermissions();
        }

    }

    setAlertBox(style, msg){
        this.setState({alertBox:{msg:msg,style:style}});
    }

    render() {
        return(<div>
            <div className='loginErrorLbl' >{this.state.alertBox.msg?
                <Alert bsStyle={this.state.alertBox.style}><strong>{this.state.alertBox.msg}</strong></Alert>
                :
                ''}
            </div>
            <ModalChangeCreds show={this.state.modalProps.visible} changeType={this.state.modalProps.changeType} closeFunc={this.closeCredChangeModal} parentAlertBox={this.setAlertBox}/>
            <Panel bsStyle='info' className='profilePanel' >
                <Row className='generalSettings'>
                    <Col md={3}>
                        <Thumbnail href='https://en.gravatar.com/support/what-is-gravatar/' alt='200x200' src={'http://www.gravatar.com/avatar/'+MD5(this.props.user.email)+'?s=200'} />
                        <p className='thumbText'>Thumbnail taken from your gravatar account if you have one.</p>

                    </Col>
                    <Col md={9}>
                        <PageHeader><small>General settings</small></PageHeader>

                        <Row className='firstNameSettings tintBackgroundGrey'>
                            <Col md={6}>First name:</Col>
                            <Col md={4}>{this.props.user.firstName}</Col>
                            <Col md={2}>    </Col>
                        </Row>
                        <Row className='lastNameSettings'>
                            <Col md={6}>Last name:</Col>
                            <Col md={4}>{this.props.user.lastName}</Col>
                            <Col md={2}>    </Col>
                        </Row>


                        <Row className='memberSinceSettings tintBackgroundGrey'>
                            <Col md={6}>Member since:</Col>
                            <Col md={4}>{new Date(this.props.user.createdAt).toDateString()}</Col>
                            <Col md={2}> </Col>
                        </Row>

                        <Row className='usernameSettings'>
                            <Col md={6}>Username:</Col>
                            <Col md={4}>{this.props.user.username}</Col>
                            <Col md={2}></Col>
                        </Row>

                        <Row className='passwordSettings tintBackgroundGrey'>
                            <Col md={6}>Password:</Col>
                            <Col md={4}>***********</Col>
                            <Col md={2}>    <Button bsStyle='default' onClick={ (e)=>{this.openCredChangeModal('password')}}>Edit</Button> </Col>
                        </Row>

                        <PageHeader><small>Contact settings</small></PageHeader>
                        <Row className='usernameSettings'>
                            <Col md={6}>Mail address:</Col>
                            <Col md={4}>{this.props.user.email}</Col>
                            <Col md={2}>    <Button bsStyle='default' onClick={ (e)=>{this.openCredChangeModal('email')}}>Edit</Button> </Col>
                        </Row>
                    </Col>
                </Row>
            </Panel>
        </div>);
    }
}
//this.openCredChangeModal('PROOPS');
ProfilePage.propTypes = {

};

//<div>User: {this.props.user}</div>
export default Marty.createContainer(ProfilePage, {
    listenTo: ['loginStore'],
    fetch: {

        user(){
            return this.app.loginStore.getUser();
        }
    }
});
