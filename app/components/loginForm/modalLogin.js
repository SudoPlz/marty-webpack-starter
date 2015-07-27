import React from 'react'
import Marty from 'marty';
import Panel from 'react-bootstrap/lib/Panel';
import {Button, Input, Alert, Row, Col} from 'react-bootstrap';
import Modal from '../../../libs/rbmLib/Modal.js';//'react-bootstrap-modal';
import validator from 'validator'
import _ from 'lodash';


class ModalLogin extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.onKeyDown = _.bind(this.onKeyDown, this);
        this.handleLogin = _.bind(this.handleLogin, this);
        this.onDismiss = _.bind(this.onDismiss, this);
        this.onShow = _.bind(this.onShow, this);
    }


    componentWillReceiveProps(nextProps){
        //console.log('Old user: '+this.props.user+ ' new user: '+nextProps.user);
        if(this.props.user!=nextProps.user){
            if(!!nextProps.user){
                this.props.onHide();
            }
        }
    }

    handleLogin(event) {



        var payload = {
            username: this.refs.username.getValue(),
            password : this.refs.password.getValue(),
            rememberMe : this.refs.rememberMe.getChecked()
        };

        //console.log('Trying to log in with: '+payload.username + payload.password);
        this.app.loginActionCreators.attemptLogin(payload);
    }


    //logout: function(e) {
    //    e.preventDefault();
    //    //SessionActionCreators.logout();
    //},

    //handleUsernameChange(event){
    //    this.state.curUsernameUsed = event.target.value;
    //    var erMsg = '';
    //
    //    if(!validator.isLength(this.state.curUsernameUsed,6,32)){
    //        erMsg = 'Username length should be 6-32 characters';
    //    }
    //
    //    this.updateField(FIELD_KEYS.USERNAME, erMsg);
    //}
    //
    //handlePasswordChange(event){
    //    this.state.curPasswordUsed = event.target.value;
    //    var erMsg = '';
    //
    //    if(!validator.isLength(this.state.curPasswordUsed,6,32)){
    //        erMsg =  'Password length should be 6-32 characters';
    //    }
    //
    //    this.updateField(FIELD_KEYS.PASSWORD, erMsg);
    //}

    //this.props.isLoggedIn?false:
    render() {
        //console.log('show is : '+this.props.show);
        //autoFocus
        return (
            <Modal
                show={this.props.show}
                onShow={this.onShow}
                onHide={this.onDismiss}
                //backdrop={'static'}
                animate={true}
                keyboard= {true}
                autoFocus={false}
                >
                <Modal.Header closeButton>
                    <Modal.Title id='ModalHeader'>Please log in. </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className='loginErrorLbl' >{this.props.error?<Alert bsStyle='danger'>
                        <strong>{this.props.error}</strong>
                    </Alert>:''}</div>
                    <Input name='username' ref='username' type='username' placeholder='Username or Email'
                           required={true} minLength={6} defaultValue={this.app.localStorage.getUsername()}/>
                    <Input name='password' ref='password'  type='password' placeholder='Password'
                           required={true} minLength={6}  onKeyDown={this.onKeyDown} />
                </Modal.Body>
                <Modal.Footer>
                    <Row className='loginBtns'>
                        <Col  xs={5} md={8}>
                            <Input type='checkbox' defaultChecked={true} label='Remember me' ref='rememberMe' />
                        </Col>
                        <Col xs={12} md={4}>
                            <Col xs={3} md={6}>
                                <Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss>
                            </Col>
                            <Col xs={3} md={6}>
                                <Button onClick={this.handleLogin} type='#' bsStyle='success'>Login</Button>
                            </Col>
                        </Col>
                    </Row>
                </Modal.Footer>
            </Modal>
        );
    }

    //onChange={(e)=>{console.log(e.target.checked)}} //for checkBox

    onKeyDown(e) {
        if (e.keyCode === 13) {
            this.handleLogin();
        }
    }

    onShow(e){
        if(this.refs.username.getValue()&& this.refs.username.getValue().length>0){
            this.refs.password.getInputDOMNode().focus();
        }else{
            this.refs.username.getInputDOMNode().focus();
        }
    }
    onDismiss(e){
        this.props.onHide();
    }
}

ModalLogin.propTypes = {

};

export default Marty.createContainer(ModalLogin, {
    listenTo: ['loginStore'],
    fetch: {
        error() {
            return this.app.loginStore.getError();
        },
        user(){
            var usr = this.app.loginStore.getUser();
            return (!usr)?false:usr;
        }
        //,isLoggedIn(){
        //    return this.app.loginStore.isLoggedIn();
        //}
    }
});
