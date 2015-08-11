import React from 'react'
import Marty from 'marty';
import {Button, Modal, Input} from 'react-bootstrap';
import validator from 'validator'
import _ from 'lodash';


class ModalChangeCreds extends React.Component {

    constructor(props, context) {
        super(props, context);
        //this.state = {
        //    showModal: false
        //};
        this.onKeyDown = _.bind(this.onKeyDown, this);
        this.saveFunc = _.bind(this.saveFunc, this);
        this.onHide = _.bind(this.onHide, this);
        this.onRequestHide = _.bind(this.onRequestHide, this);

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
        console.log('ON hide.');
        //if(this.props.closeFunc){
        //    this.props.closeFunc();
        //}
    }

    onRequestHide(){
        console.log('ON REQUEST hide.');
    }
        //import Header from 'react-bootstrap/lib/ModalHeader'

    render() {
        //console.log('show is : '+this.props.show);
        //autoFocus

        //console.log(Header+'test');
        return (<div>
            <Modal show={this.props.show} onHide={this.onHide} onRequestHide={this.onRequestHide}>
                <Header closeButton>
                    <Title>Change your {this.props.changeType}</Title>
                </Header>
                <Body>
                    <h4>Lets change your {this.props.changeType}</h4>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

                    <hr />
                    <Input name='password' ref='password'  type='password' placeholder='Password'
                           required={true} minLength={6}  onKeyDown={this.onKeyDown} />

                </Body>
                <Footer>
                    <Button onClick={this.onHide}>Close</Button>
                    <Button onClick={this.saveFunc}>Save</Button>
                </Footer>
            </Modal>
            <div>Test</div>
        </div>);
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
