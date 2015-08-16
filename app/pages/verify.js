import React from 'react'
import {Jumbotron, Button, Alert, Popover, OverlayTrigger} from 'react-bootstrap';
import _ from 'lodash';
import Marty from 'marty';
import Spinner from 'react-loader';

class VerifyPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        //console.log('Verify started..!');
        //this.render = _.bind(this.render, this);
        this.handleAlertDismiss = _.bind(this.handleAlertDismiss, this);
        this.componentDidMount = _.bind(this.componentDidMount, this);
        this.reconfirmEmail = _.bind(this.reconfirmEmail, this);
        this.state = {
            alertVisible: false,
            isLoading: true
        };
    }

    //getInitialState() {
    //    return {
    //        alertVisible: false
    //    };
    //}


    componentDidMount() {
        var username = this.props.params.username;
        var verifId = this.props.params.verificationId;
        if(verifId.length==7 && username.length>2){
            //setTimeout(() => {console.log('Now verifying your email address.');}, 3000);
            this.app.registerStore.clearVerifErrors();
            this.app.registerActionCreators.verifyMailAddressById(username, verifId)
        }
    }

    reconfirmEmail(){
        console.log('Resending an email..!');
        //TODO: Check if reconfirm works AFTER I implement it in backend
        this.app.registerActionCreators.reconfirmMail(this.props.params.username);
        this.setState({alertVisible:true});
    }

    handleAlertDismiss(){
        this.setState({alertVisible:false});
    }

    render(){
        if(this.props.params.verificationId == 'id')//if the user just came from the regist page
        {
            return (
                <div className='verify'>
                    {this.state.alertVisible?<Alert  bsStyle='success' onDismiss={this.handleAlertDismiss} dismissAfter={3000}>
                        <h4>A new confirmation mail has just been sent.</h4>
                    </Alert>:<div></div>}
                    <Jumbotron>
                        <h1>Thank you for signing up {this.props.params.username}.</h1>
                        <small>A verification mail has been sent to your email address. </small>
                        <p>If after a while theres no verification mail in your inbox, please check the spam folder. Otherwise you can always send a new mail by clicking the button below.</p>
                        <OverlayTrigger placement='right' overlay=
                            {<Popover placement='right' title='Reconfirmation button'>
                            Make sure you wait at least 10 minutes before you hit this button.
                            </Popover>}>
                            <Button bsStyle='primary' onClick={this.reconfirmEmail}>Reconfirm mail</Button>
                        </OverlayTrigger>
                    </Jumbotron>
                </div>
            );
        }else if(this.props.params.verificationId.length == 7) {    //if the user really provided a verif id
            return (
                <div className='verify'>
                    <div className='verifErrorLbl' >
                        {((this.props.mailIsVerified==null) || (this.props.mailIsVerified==true))?
                            '':
                            <Alert bsStyle='danger'>
                                <strong>{this.props.verifMessage}</strong>
                            </Alert>
                        }
                    </div>
                    <Jumbotron>
                        <h1>Thank you for signing up {this.props.params.username}.</h1>
                        {(this.props.mailIsVerified==null)?<p>We are currently checking your verification id.</p>:
                            (this.props.mailIsVerified==true)?
                            <p>Your email address is now verified..!<span className="glyphicon glyphicon-ok "></span></p>:
                                <p>We were not able to verify your mail address.<span className="glyphicon glyphicon-remove"></span></p>
                        }
                        <Spinner   top='83%' left='50%' loaded={(this.props.mailIsVerified!=null)}></Spinner>
                    </Jumbotron>
                </div>
            );
        }else{
            return (
                <Jumbotron>
                    <h2>Puppies are dying!</h2>
                    <small>We cannot confirm an email address with this id.</small>
                </Jumbotron>
            )
        }
    }
}






//console.log('Props of mail verif: '+this.props.mailIsVerified);
//if(this.props.mailIsVerified){
//    return (
//        <Jumbotron>
//            <h1>Great success!</h1>
//            <small>Your email address is verified.</small>
//        </Jumbotron>
//    );
//}else {
//
//}

VerifyPage.propTypes = {

};

export default Marty.createContainer(VerifyPage, {
    listenTo: 'registerStore',
    fetch: {
        mailIsVerified() {
            return this.app.registerStore.didVerificationSucceed();
        }
        ,verifMessage(){
            return this.app.registerStore.getVerifMessage();
        }
    }
    //,pending() {
    //    return this.done({
    //        verifError: false,
    //        mailIsVerified:null
    //    });
    //},
    //failed(errors) {
    //    return <div className="User User-failedToLoad">{errors}</div>;
    //}

});