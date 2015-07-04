import _ from 'lodash';
import Marty from 'marty';
import RegisterConstants from '../constants/registerConstants.js';
import UsersAPI from '../sources/usersApi.js';

class RegisterStore extends Marty.Store {
    constructor(options) {
        super(options);
        this.api = new UsersAPI();
        this.state = {
            registError: null,
            verifMessage:null,
            didVerifSucceed: null,
            didRegistSucceed: null

        };
        this.registerSuccess = _.bind(this.registerSuccess, this);
        this.registerFailed = _.bind(this.registerFailed, this);
        this.verifMailSuccess = _.bind(this.verifMailSuccess, this);
        this.verifMailFailed = _.bind(this.verifMailFailed, this);

        this.handlers = {
            attemptRegister:RegisterConstants.REGISTER_NEW_USER,
            resendMail: RegisterConstants.RESEND_CONFIRM_MAIL,
            verifyMail: RegisterConstants.VERIFY_MAIL_ADDRESS
            //registerSuccess: RegisterConstants.RECEIVE_REGIST_SUCCESS,
            //registerFailed: RegisterConstants.RECEIVE_REGIST_FAILED
        };

    }

    attemptRegister(payLoad){
        var self = this;
        this.setState({didRegistSucceed:null});
        this.api.register(payLoad.username, payLoad.password, payLoad.email, payLoad.firstName, payLoad.lastName, (error, res) => {
            this.handleServerResponce(error, res, self.registerSuccess, self.registerFailed);
        })
    }

    resendMail(username){
        var self = this;
        this.api.resendMail(username, (error, res) => {
            this.handleServerResponce(error, res, self.resendMailSuccess, self.resendMailFailed );
        })
    }

    verifyMail(username, verificationId){
        this.setState({didVerifSucceed:null});
        var self = this;
        this.api.verifyMail(username, verificationId, (error, res) => {
            this.handleServerResponce(error, res, self.verifMailSuccess, self.verifMailFailed );
        })
    }





    handleServerResponce(error, res, onSuccess, onFail){
        if(error){
            return onFail(error);
        }else{
            var body = res.body;
            if(body.status=='fail'|| body.status=='error'){
                return onFail(body.message, body.code);
            }else{
                return onSuccess(body.data, body.message);
            }
        }
    }


    verifMailSuccess(user, msg){
        console.log('Verif mail success.');
        this.setState({didVerifSucceed:true, verifMessage:msg});
    }

    verifMailFailed(exception){
        //console.log('Verif mail fail.');
        this.setState({didVerifSucceed:false, verifMessage:exception});
    }

    resendMailSuccess(){
        console.log('Resend mail success.');
    }

    resendMailFailed(){
        console.log('Resend mail failed.');
    }


    registerFailed(exception, code) {
        console.log('REGISTRATION FAILED: '+exception+' code: '+code);
        this.setState({registError: exception, didRegistSucceed:false});
    }

    registerSuccess(data){
        this.setState({registError: null, didRegistSucceed:true});
        this.app.navigationActionCreators.navigateToVerify(data.username);
    }


    didRegistrationSucceed() {
        return this.state.didRegistSucceed;
    }

    //wether user email verification succeded or failed
    didVerificationSucceed() {
        return this.state.didVerifSucceed;
    }


    getVerifMessage() {
        return this.state.verifMessage;
    }
    getRegistError() {
        return this.state.registError;
    }

    clearRegistErrors(){
        this.setState({registError: null, didRegistSucceed:null});
    }
    clearVerifErrors(){
        this.setState({verifMessage: null, didVerifSucceed:null});
    }

}

export default RegisterStore;
