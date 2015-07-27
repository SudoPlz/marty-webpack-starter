import React from 'react'
import Marty from 'marty';
//import Panel from 'react-bootstrap/lib/Panel';
import {Button, Input, Alert, Row, Col, Panel, ButtonInput} from 'react-bootstrap';
import _ from 'lodash';


class LoginPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.onKeyDown = _.bind(this.onKeyDown, this);
        this.handleLogin = _.bind(this.handleLogin, this);
        //this.clearInputFields = _.bind(this.clearInputFields, this);

    }

    //componentDidMount(){
    //if(!!this.props.user){
    //    console.log('Did  LOG IN');
    //}else{
    //    console.log('not logged in');
    //}
    //}

    handleLogin(event) {
        var payload = {
            username: this.refs.username.getValue(),
            password : this.refs.password.getValue(),
            rememberMe : this.refs.rememberMe.getChecked()
        };

        //console.log('Trying to log in with: '+payload.username + payload.password);
        //TODO: Add remember me on the parameters below
        this.app.loginActionCreators.attemptLogin(payload);
    }

    //this.props.isLoggedIn?false:
    render() {
        //console.log('show is : '+this.props.show);
        if(!!this.props.user){
            //console.log('USER logged in');
            return (<div></div>);
        }else{
            //console.log('USER NOT logged in');
            return (
                <Row className='loginPage'>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <Panel header='Please log in'>

                            <div className='loginErrorLbl' >{this.props.error?<Alert bsStyle='danger'>
                                <strong>{this.props.error}</strong>
                            </Alert>:''}</div>
                            <form method='post'>
                                <Input name='username' ref='username' type='username' placeholder='Username or Email' autoFocus={true}
                                       required={true} minLength={6} defaultValue={this.app.localStorage.getUsername()}/>
                                <Input name='password' ref='password'  type='password' placeholder='Password'
                                       required={true} minLength={6}  onKeyDown={this.onKeyDown} />
                                <Row className='loginBtns'>
                                    <Col  xs={5} md={8}>
                                        <Input type='checkbox' defaultChecked={true} label='Remember me' ref='rememberMe' />
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <Col xs={3} md={6}>

                                            <ButtonInput type="reset" bsStyle="link"  />
                                        </Col>
                                        <Col xs={3} md={6}>
                                            <ButtonInput type="submit" onClick={this.handleLogin} bsStyle='success' />
                                        </Col>
                                    </Col>
                                </Row>
                            </form>
                        </Panel>
                    </Col>
                    <Col md={3}></Col>
                </Row>
            );
        }
    }

//<Button onClick={this.clearInputFields} type='#' bsStyle='link'>Clear</Button>

    onKeyDown(e) {
        if (e.keyCode === 13) {
            this.handleLogin();
        }
    }



    //clearInputFields(e){
    //    console.log('Clear input f.');
    //    this.refs.username;
    //}
}

LoginPage.propTypes = {

};

export default Marty.createContainer(LoginPage, {
    listenTo: ['loginStore'],
    fetch: {
        error() {
            return this.app.loginStore.getError();
        }

        //,isLoggedIn(){
        //    return this.app.loginStore.isLoggedIn();
        //}
        ,user(){
            return this.app.loginStore.getUser();
        }
    }
});
