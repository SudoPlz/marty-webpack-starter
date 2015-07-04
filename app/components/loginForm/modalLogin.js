import React from 'react'
import Marty from 'marty';
import Panel from 'react-bootstrap/lib/Panel';
import {Button, Input, Alert} from 'react-bootstrap';
import Modal from 'react-bootstrap-modal';
import validator from 'validator'
import _ from 'lodash';


class ModalLogin extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.onKeyDown = _.bind(this.onKeyDown, this);
        this.handleLogin = _.bind(this.handleLogin, this);
        this.onDismiss = _.bind(this.onDismiss, this);
    }

    handleLogin(event) {
        var payload = {
            username: this.refs.username.getValue(),
            password : this.refs.password.getValue()
        };

        //console.log('Trying to log in with: '+payload.username + payload.password);
        //TODO: Add remember me on the parameters below
        this.app.loginActionCreators.attemptLogin(payload.username, payload.password);
    }


    //logout: function(e) {
    //    e.preventDefault();
    //    //SessionActionCreators.logout();
    //    //TODO: Do something on logout
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

    render() {
        //console.log('show is : '+this.props.show);
        return (
            <Modal
                show={this.props.show}
                onHide={this.onDismiss}
                backdrop={'static'}
                animate={true}
                >
                <Modal.Header closeButton>
                    <Modal.Title id='ModalHeader'>Please log in. </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div class='loginErrorLbl' >{this.props.error?<Alert bsStyle='danger'>
                        <strong>{this.props.error}</strong>
                    </Alert>:''}</div>
                    <Input name='username' ref='username' type='username' placeholder='Username or Email' required={true} minLength={6}/>
                    <Input name='password' ref='password' type='password' placeholder='Password'
                           required={true} minLength={6}  onKeyDown={this.onKeyDown} />
                </Modal.Body>
                <Modal.Footer>
                    <Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss>
                    <Button onClick={this.handleLogin} type='#' bsStyle='success'>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }

    onKeyDown(e) {
        if (e.keyCode === 13) {
            this.handleLogin();
        }
    }

    onDismiss(e){
        this.app.loginStore.clearErrors();
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
        }
    }
});
