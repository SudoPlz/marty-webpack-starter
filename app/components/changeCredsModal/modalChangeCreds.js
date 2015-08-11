import React from 'react'
import Marty from 'marty';
import {Button, Modal, Input} from 'react-bootstrap';
import validator from 'validator'
import _ from 'lodash';


class ModalChangeCreds extends React.Component {

    constructor(props, context) {
        super(props, context);


        this.state = {
            labelOne:{error:'', style:''},
            labelTwo:{error:'', style:''},
            labelThree:{error:'', style:''},
            newPass:''
        };
        this.onKeyDown = _.bind(this.onKeyDown, this);
        this.saveFunc = _.bind(this.saveFunc, this);
        this.onHide = _.bind(this.onHide, this);

    }


    //componentWillReceiveProps(nextProps){
    //    //console.log('Old user: '+this.props.user+ ' new user: '+nextProps.user);
    //    if(this.props.user!=nextProps.user){
    //        if(!!nextProps.user){
    //            this.props.onHide();
    //        }
    //    }
    //}

    //handleLogin(event) {
    //
    //    var payload = {
    //        username: this.refs.username.getValue(),
    //        password : this.refs.password.getValue(),
    //        rememberMe : this.refs.rememberMe.getChecked()
    //    };
    //
    //    //console.log('Trying to log in with: '+payload.username + payload.password);
    //    this.app.loginActionCreators.attemptLogin(payload);
    //}

    onHide(){
        //console.log('ON hide.');
        if(this.props.closeFunc){
            this.props.closeFunc();
        }
    }

    //import Header from 'react-bootstrap/lib/ModalHeader'

    render() {
        //console.log('show is : '+this.props.show);
        //autoFocus

        //console.log(Header+'test');

        let GenericBody =
            <Modal.Body>
                <h4>Type your new {this.props.changeType}.</h4>
                <Input name='newGenericInput' type='text' placeholder={'New '+this.props.changeType}
                       required={true} minLength={1} bsStyle={this.state.labelOne.style} onKeyDown={this.onKeyDown} onChange={
                    (e)=>{
                       var curEmail = e.target.value;
                       var erMsg = '';
                       if(!validator.isLength(curEmail,1,64)){
                            erMsg = 'Please provide us with a value of at least 1 character.';
                       }
                       if(erMsg!=''){
                           this.setState({labelOne:{error:erMsg, style:'error'}});
                       }else{
                           this.setState({labelOne:{error:erMsg, style:'success'}});
                       }
                    }
                }/>
            </Modal.Body>;

        let MailBody =
            <Modal.Body>
                <h5>Type your new mail address.</h5>
                <Input name='newEmailInput' type='text' placeholder='Email address' label={this.state.labelOne.error}
                       required={true} minLength={6} bsStyle={this.state.labelOne.style} onKeyDown={this.onKeyDown} onChange={
                    (e)=>{
                       var curEmail = e.target.value;
                       var erMsg = '';
                       if(!validator.isEmail(curEmail) || !validator.isLength(curEmail,6,64)){
                       erMsg = 'Please provide us with a valid email 6-64 characters long.';
                       }
                       if(erMsg!=''){
                           this.setState({labelOne:{error:erMsg, style:'error'}});
                       }else{
                           this.setState({labelOne:{error:erMsg, style:'success'}});
                       }
                    }
                }/>
            </Modal.Body>;

        let PasswordBody =
            <Modal.Body>
                <h5>Type your old password.</h5>
                <Input name='oldPasswordInput' type='password' placeholder='Old password' label={this.state.labelOne.error}
                       required={true} minLength={6} bsStyle={this.state.labelOne.style} onChange={
                    (e)=>{
                        let oldPassword = event.target.value;
                        var erMsg = '';
                        if(!oldPassword.match(new RegExp(/(^[\w!@#%&\/(){}[\]=?+*^~\-_.:,]{1,32}$)/))){
                            erMsg = 'Allowed password characters are a-z, A-Z, 0-9, and !@#%&?+*^~-_.,().';
                        }
                        if(!validator.isLength(oldPassword,6,32)){
                            erMsg =  'Password length should be 6-32 characters';
                        }

                        if(erMsg!=''){
                           this.setState({labelOne:{error:erMsg, style:'error'}});
                       }else{
                           this.setState({labelOne:{error:erMsg, style:'success'}});
                       }
                    }
                }/>
                <h5>Type your new password.</h5>
                <Input name='newPasswordInput' type='password' placeholder='New password' label={this.state.labelTwo.error}
                       required={true} minLength={6} bsStyle={this.state.labelTwo.style} onChange={
                    (e)=>{
                        let oldPassword = event.target.value;
                        var erMsg = '';
                        if(!oldPassword.match(new RegExp(/(^[\w!@#%&\/(){}[\]=?+*^~\-_.:,]{1,32}$)/))){
                            erMsg = 'Allowed password characters are a-z, A-Z, 0-9, and !@#%&?+*^~-_.,().';
                        }
                        if(!validator.isLength(oldPassword,6,32)){
                            erMsg =  'Password length should be 6-32 characters';
                        }

                        if(erMsg!=''){
                           this.setState({labelTwo:{error:erMsg, style:'error'}, newPass:oldPassword});
                       }else{
                           this.setState({labelTwo:{error:erMsg, style:'success'}, newPass:oldPassword});
                       }
                    }
                }/>
                <h5>Type your new password again.</h5>
                <Input name='newPasswordInput' type='password' placeholder='New password again' label={this.state.labelThree.error}
                       required={true} minLength={6} bsStyle={this.state.labelThree.style} onKeyDown={this.onKeyDown} onChange={
                    (e)=>{
                        let passwordConf = event.target.value;
                        var erMsg = '';
                        if(this.state.newPass != passwordConf)
                        {
                            erMsg = 'Password and password confirmation don\'t match';
                        }
                        if(erMsg!=''){
                           this.setState({labelThree:{error:erMsg, style:'error'}});
                       }else{
                           this.setState({labelThree:{error:erMsg, style:'success'}});
                       }
                    }
                }/>
            </Modal.Body>;


        var ModalBody;
        if(this.props.show)
        {
            if(this.props.changeType=='email'){
                ModalBody = MailBody;
            }else if(this.props.changeType=='password'){
                ModalBody = PasswordBody;
            }else{
                ModalBody = GenericBody;
            }
        }else{
            ModalBody=<div></div>;
        }


        return (<Modal show={this.props.show} onHide={this.onHide} >
                <Modal.Header closeButton>
                    <Modal.Title>Change your {this.props.changeType}</Modal.Title>
                </Modal.Header>
                {ModalBody}
                <Modal.Footer>
                    <Button onClick={this.onHide}>Close</Button>
                    <Button onClick={this.saveFunc}>Save</Button>
                </Modal.Footer>
            </Modal>);
    }

    onKeyDown(e) {
        if (e.keyCode === 13) {
            this.handleLogin();
        }
    }

    //onShow(e){
    //    if(this.refs.username.getValue()&& this.refs.username.getValue().length>0){
    //        this.refs.password.getInputDOMNode().focus();
    //    }else{
    //        this.refs.username.getInputDOMNode().focus();
    //    }
    //}
    saveFunc(e){

        this.props.closeFunc();
    }
}

ModalChangeCreds.propTypes = {
    show: React.PropTypes.bool,
    changeType: React.PropTypes.string,
    closeFunc: React.PropTypes.func
};

export default Marty.createContainer(ModalChangeCreds, {
    listenTo: ['loginStore'],
    fetch: {
        //error() {
        //    return this.app.loginStore.getError();
        //},
        //user(){
        //    var usr = this.app.loginStore.getUser();
        //    return (!usr)?false:usr;
        //}
        //,isLoggedIn(){
        //    return this.app.loginStore.isLoggedIn();
        //}
    }
});
