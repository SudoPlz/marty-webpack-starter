import React from 'react'
import {Input,Row,Col, ButtonInput, Glyphicon, Button, Panel, Alert} from 'react-bootstrap';
import Marty from 'marty';
import validator from 'validator';


const FIELD_KEYS = {
    USERNAME:0,
    PASSWORD:1,
    PASSWORD_CONF:2,
    EMAIL:3,
    FIRST_NAME:4,
    LAST_NAME:5
};
const TOTAL_SIGNUP_FIELDS = 6;

class RegisterPage extends React.Component {



    constructor(props, context){
        super(props, context);
        //this.state.errorTxt = '';

        this.state = {
            isLoading: false,
            fieldErrors: [],
            submitBtnDisabled: true,
            resetBtnDisabled:false,
            curUsernameUsed:'',
            curPasswordUsed:'',
            noInputYet:true
        };

    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.isLoading)
        {
            if((!prevProps.error && this.props.error) ){
                this.setState({isLoading:false, submitBtnDisabled:!(this.allFieldsAccepted()), resetBtnDisabled:false});
            }
            if(this.props.error && (prevProps.error==this.props.error)){
                this.setState({isLoading:false, submitBtnDisabled:!(this.allFieldsAccepted()), resetBtnDisabled:false});
            }
        }
    }

    handleResetForms(){
        this.setState({
            curUsernameUsed:'',
            curPasswordUsed:'',
            noInputYet:true,
            fieldErrors:[]
        });
    }

    handleSubmit(e) {

        e.preventDefault();
        var payload = {
            email:this.refs.email.getValue(),
            username:this.refs.username.getValue(),
            password: this.refs.password.getValue(),
            firstName : this.refs.firstName.getValue(),
            lastName : this.refs.lastName.getValue()
        };

        this.app.registerStore.clearRegistErrors();

        if(this.allFieldsAccepted()){
            this.setState({
                isLoading:true,
                submitBtnDisabled:true,
                resetBtnDisabled:true,
                //errorTxt:'',
                curUsernameUsed:'',
                curPasswordUsed:'',
                noInputYet:true
            });

            this.app.registerActionCreators.attemptRegister(payload);
        }
    }

    handleUsernameChange(event){
        this.state.curUsernameUsed = event.target.value;
        var erMsg = '';
        if(!this.passesOurCharWhitelist(this.state.curUsernameUsed)){
            erMsg = 'Allowed username characters are a-z, A-Z, 0-9, and !@#%&?+*^~-_.,().';
        }
        if(!validator.isLength(this.state.curUsernameUsed,6,32)){
            erMsg = 'Username length should be 6-32 characters';
        }
        this.updateField(FIELD_KEYS.USERNAME, erMsg);
    }
    handlePasswordChange(event){
        this.state.curPasswordUsed = event.target.value;
        var erMsg = '';
        if(!this.passesOurCharWhitelist(this.state.curPasswordUsed)){
            erMsg = 'Allowed password characters are a-z, A-Z, 0-9, and !@#%&?+*^~-_.,().';
        }
        if(!validator.isLength(this.state.curPasswordUsed,6,32)){
            erMsg =  'Password length should be 6-32 characters';
        }
        if(this.state.curUsernameUsed == this.state.curPasswordUsed){
            erMsg =  'Username and password CANNOT be the same. Choose a different password please.';
        }
        this.updateField(FIELD_KEYS.PASSWORD, erMsg);
    }

    handlePasswordConfrimationChange(event){
        var curPassConf = event.target.value;
        var erMsg = '';
        if(this.state.curPasswordUsed != curPassConf)
        {
            erMsg = 'Password and password confirmation don\'t match';
        }
        this.updateField(FIELD_KEYS.PASSWORD_CONF, erMsg);
    }

    handleEmailChange(event){
        var curEmail = event.target.value;
        var erMsg = '';
        if(!validator.isEmail(curEmail) || !validator.isLength(curEmail,6,64)){
            erMsg = 'Please provide us with a valid email 6-64 characters long.';
        }
        this.updateField(FIELD_KEYS.EMAIL, erMsg);
    }

    updateField(fieldName, errMessage){
        var fErs = this.state.fieldErrors;
        fErs[fieldName] = errMessage;
        this.setState({fieldErrors: fErs, errors:'', submitBtnDisabled:!(this.allFieldsAccepted()), noInputYet:false });
    }

    handleFirstNameChange(event){

        var curFirstName = event.target.value;
        var erMsg = '';
        if(!validator.isLength(curFirstName,2,60)){
            erMsg ='Please provide your real first name 2-60 characters long.';
        }
        this.updateField(FIELD_KEYS.FIRST_NAME, erMsg);
    }

    handleLastNameChange(event){
        var curLastName = event.target.value;
        var erMsg = '';
        if(!validator.isLength(curLastName,3,60)){
            erMsg ='Please provide your real last name 3-60 characters long.';
        }
        this.updateField(FIELD_KEYS.LAST_NAME, erMsg);
    }

    passesOurCharWhitelist(str){
        return str.match(new RegExp(/(^[\w!@#%&\/(){}[\]=?+*^~\-_.:,]{1,32}$)/));
    }

    allFieldsAccepted() {
        var i, len, field;
        var accepted = true;
        var arr = this.state.fieldErrors;
        len = arr.length;
        var keys = Object.keys(arr);
        //console.log('Arr status: '+arr+ ' with length: '+len);
        //console.log('Total fields: '+len);
        if(len<TOTAL_SIGNUP_FIELDS) {accepted = false}
        else
        {
            for (i = 0; i < len; ++i) {
                if (i in arr) {
                    field = arr[i];
                    if (field != '') {
                        accepted = false;
                    }
                }
            }
        }
        //console.log(accepted?'All fields OK':'Some fields need work');
        return accepted;
    }


    getAppropriateStyle(fieldKey){
        var style = null;
        //console.log('fielderrors for key: '+fieldKey+' is: '+this.state.fieldErrors[fieldKey]);
        if(this.state.fieldErrors[fieldKey]!=undefined){
            if(this.state.fieldErrors[fieldKey]==''){
                style = 'success';
            }else{
                style = 'error';
            }
        }
        //console.log('getAppropriateStyle style: '+style);
        return style;
    }

    render(){

        return (
            <Panel header='Lets get you up and running:'  bsStyle='success' className='register' >
                <div className='registerErrorLbl' >{this.props.error?<Alert bsStyle='danger'>
                    <strong>{this.props.error}</strong>
                </Alert>:''}</div>

                <Row className='nameinputs'>
                    <Col xs={5}>
                        <Input type='text' placeholder='First name'
                               label='First name'         ref='firstName'
                               onChange={this.handleFirstNameChange.bind(this)}
                               bsStyle={this.getAppropriateStyle(FIELD_KEYS.FIRST_NAME)}
                               help={this.state.fieldErrors[FIELD_KEYS.FIRST_NAME]} hasFeedback={!this.state.noInputYet}/>
                    </Col>
                    <Col xs={7}>
                        <Input type='text' placeholder='Last name'
                               label='Last name'         ref='lastName'
                               onChange={this.handleLastNameChange.bind(this)}
                               bsStyle={this.getAppropriateStyle(FIELD_KEYS.LAST_NAME)}
                               help={this.state.fieldErrors[FIELD_KEYS.LAST_NAME]} hasFeedback={!this.state.noInputYet}/>
                    </Col>
                </Row>
                <Input className='emailInput' type='email' label='Email Address' placeholder='Enter email'       ref='email'
                       onChange={this.handleEmailChange.bind(this)}
                       bsStyle={this.getAppropriateStyle(FIELD_KEYS.EMAIL)}
                       help={this.state.fieldErrors[FIELD_KEYS.EMAIL]} hasFeedback={!this.state.noInputYet}/>
                <Input className='usernameInput' type='text' label='Username' placeholder='Enter your username'  ref='username'
                       onChange={this.handleUsernameChange.bind(this)}
                       bsStyle={this.getAppropriateStyle(FIELD_KEYS.USERNAME)}
                       help={this.state.fieldErrors[FIELD_KEYS.USERNAME]} hasFeedback={!this.state.noInputYet}/>
                <Input className='passwordInput' type='password' label='Password' placeholder='Enter a password' ref='password'
                       onChange={this.handlePasswordChange.bind(this)}
                       bsStyle={this.getAppropriateStyle(FIELD_KEYS.PASSWORD)}
                       help={this.state.fieldErrors[FIELD_KEYS.PASSWORD]} hasFeedback={!this.state.noInputYet}/>
                <Input className='passwordConfInput' type='password' label='Confirmation Password' placeholder='Re enter your password'
                       onChange={this.handlePasswordConfrimationChange.bind(this)}
                       bsStyle={this.getAppropriateStyle(FIELD_KEYS.PASSWORD_CONF)}
                       help={this.state.fieldErrors[FIELD_KEYS.PASSWORD_CONF]} hasFeedback={!this.state.noInputYet}/>
                <Button type="submit"  className='submitButton' onClick={this.handleSubmit.bind(this)} disabled={this.state.submitBtnDisabled} bsStyle='success'>
                    {this.state.isLoading ? <div><span className="glyphicon glyphicon-refresh spinning"></span> Loading...</div>: 'Submit'}
                </Button>
                <ButtonInput type="reset" className='resetButton' bsStyle="link" onClick={this.handleResetForms.bind(this)} disabled={this.state.resetBtnDisabled} >Reset</ButtonInput>
            </Panel>
        );

        //if(this.props.registSuccess){
        //    return (
        //        <Panel header='Lets get you up and running:'  bsStyle='success' className='register' >
        //            <h1>Thank you for signing up.</h1>
        //            <br/>
        //            <p>Check your mailbox for a verification mail.</p>
        //        </Panel>
        //    );
        //}
        //else{
        //}

    }
}

RegisterPage.propTypes = {

};

export default Marty.createContainer(RegisterPage, {
    listenTo: ['registerStore'],
    fetch: {
        error() {
            return this.app.registerStore.getRegistError();
        }

    }

});