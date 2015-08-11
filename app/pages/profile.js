'use strict';
import Marty from 'marty';
import React from 'react';
import MD5 from 'md5';
import {PageHeader, Panel, Row, Col, Button, Thumbnail} from 'react-bootstrap';
import _ from 'lodash';
import ModalChangeCreds from '../components/changeCredsModal/modalChangeCreds.js';

class ProfilePage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            modalProps: {visible:false, changeType:''}
        };
        //this.onKeyDown = _.bind(this.onKeyDown, this);
        this.closeCredChangeModal = _.bind(this.closeCredChangeModal, this);
        //this.openCredChangeModal = _.bind(this.openCredChangeModal, this);

    }

    closeCredChangeModal(){
        console.log('Modal SHUTS DOWN NOW!');
        this.setState({modalProps: {visible:false, changeType:''}});
    }
    //openCredChangeModal(){
    //    this.setState({credChangeModalVisible:true});
    //}
    //

    componentWillReceiveProps(nextProps){
        //console.log('Old user: '+this.props.user+ ' new user: '+nextProps.user);
        if(this.props.user!=nextProps.user){
            //console.log('Check for permission changes!');
            this.props.checkPermissions();
        }

    }


//<ModalChangeCreds show={this.state.modalProps.visible} changeType={this.state.modalProps.changeType} closeFunc={this.closeCredChangeModal}/>
    render() {
        return(<div>

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
                            <Col md={2}>    <Button bsStyle='default'>Edit</Button> </Col>
                        </Row>

                        <PageHeader><small>Contact settings</small></PageHeader>
                        <Row className='usernameSettings'>
                            <Col md={6}>Mail address:</Col>
                            <Col md={4}>{this.props.user.email}</Col>
                            <Col md={2}>    <Button bsStyle='default'>Edit</Button> </Col>
                        </Row>
                    </Col>
                </Row>
            </Panel>
        </div>);
    }
}
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
