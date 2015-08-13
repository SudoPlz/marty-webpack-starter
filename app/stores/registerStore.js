import _ from 'lodash';
import Marty from 'marty';
import RegisterConstants from '../constants/registerConstants.js';
//import UsersAPI from '../sources/usersApi.js';

class RegisterStore extends Marty.Store {
    constructor(options) {
        super(options);
        //this.api = new UsersAPI();
        this.state = {
            registError: null,
            verifMessage:null,
            didVerifSucceed: null
        };
        this.registerSuccess = _.bind(this.registerSuccess, this);
        this.registerFailed = _.bind(this.registerFailed, this);
        this.verifMailSuccess = _.bind(this.verifMailSuccess, this);
        this.verifMailFailed = _.bind(this.verifMailFailed, this);

        this.handlers = {
            resendMail: RegisterConstants.RESEND_CONFIRM_MAIL,
            verifyMail: RegisterConstants.VERIFY_MAIL_ADDRESS,
            registerSuccess: RegisterConstants.RECEIVE_REGIST_SUCCESS,
            registerFailed: RegisterConstants.RECEIVE_REGIST_FAILED
        };

    }


    resendMail(username){
        var self = this;
        this.usersApi.resendMail(username, (error, res) => {
            this.handleServerResponce(error, res, self.resendMailSuccess, self.resendMailFailed );
        })
    }

    verifyMail(username, verificationId){
        this.setState({didVerifSucceed:null});
        var self = this;
        this.usersApi.verifyMail(username, verificationId, (error, res) => {
            this.handleServerResponce(error, res, self.verifMailSuccess, self.verifMailFailed );
        })
    }

    registerFailed(payload) {
        console.log('REGISTRATION FAILED: '+payload.message+' code: '+payload.code);
        this.setState({registError: payload.message});
    }

    registerSuccess(payload){
        this.setState({registError: null});
        this.app.navigationActionCreators.navigateToVerify(payload.data.username);
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
        this.setState({registError: null});
    }
    clearVerifErrors(){
        this.setState({verifMessage: null});
    }

}

export default RegisterStore;
