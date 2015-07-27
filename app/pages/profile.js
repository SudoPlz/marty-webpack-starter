'use strict';
import Marty from 'marty';
import React from 'react';
import MD5 from 'md5';
import {PageHeader, Panel, Row, Col, Button, Thumbnail} from 'react-bootstrap';


var ProfilePage = React.createClass({
    displayName: 'Profile Component',

    componentWillReceiveProps(nextProps){
        //console.log('Old user: '+this.props.user+ ' new user: '+nextProps.user);
        if(this.props.user!=nextProps.user){
            //console.log('Check for permission changes!');
            this.props.checkPermissions();
        }

    },


    render: function () {
        //{this.props.user.username}
        return (
                <Panel bsStyle='info' className='profilePanel' >
                    <Row className='generalSettings'>
                        <Col md={3}>

                            <Thumbnail href='#' alt='200x200' src={'http://www.gravatar.com/avatar/'+MD5(this.props.user.email)+'?s=200'} />
                        </Col>
                        <Col md={9}>
                            <PageHeader><small>General settings</small></PageHeader>

                            <Row className='firstNameSettings'>
                                <Col md={6}>First name:</Col>
                                <Col md={4}>{this.props.user.firstName}</Col>
                                <Col md={2}>    </Col>
                            </Row>
                            <Row className='lastNameSettings'>
                                <Col md={6}>Last name:</Col>
                                <Col md={4}>{this.props.user.lastName}</Col>
                                <Col md={2}>    </Col>
                            </Row>


                            <Row className='memberSinceSettings'>
                                <Col md={6}>Member since:</Col>
                                <Col md={4}>{new Date(this.props.user.createdAt).toDateString()}</Col>
                                <Col md={2}> </Col>
                            </Row>

                            <Row className='usernameSettings'>
                                <Col md={6}>Username:</Col>
                                <Col md={4}>{this.props.user.username}</Col>
                                <Col md={2}>    <Button bsStyle='default'>Edit</Button> </Col>
                            </Row>

                            <Row className='passwordSettings'>
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

        );
    }
});

//<div>User: {this.props.user}</div>
export default Marty.createContainer(ProfilePage, {
    listenTo: ['loginStore'],
    fetch: {

        user(){
            return this.app.loginStore.getUser();
        }
    }
});
