import Marty from 'marty';
import RegisterConstants from '../constants/registerConstants.js';
import _ from 'lodash';

class RegisterActionCreator extends Marty.ActionCreators {


    constructor(options){
        if(options){super(options)}else{super()}

        this.attemptRegister = _.bind(this.attemptRegister, this);
    }

    attemptRegister(payLoad) {
        this.app.usersApi.register(payLoad.username, payLoad.password, payLoad.email, payLoad.firstName, payLoad.lastName).then(
                res =>{
                //console.log('Response received: '+JSON.stringify(res));
                let {status, code, message, data} = res;
                if(status=='success'){
                    this.dispatch(RegisterConstants.RECEIVE_REGIST_SUCCESS, {message: message, data: data});
                    //console.log('REGIST SUCCESS')
                }else{

                    this.dispatch(RegisterConstants.RECEIVE_REGIST_FAILED, {message: message, code: code});
                }
            },
                err=>{
                //console.log('registerActionCreators.attemptRegister err: '+err);
                this.dispatch(RegisterConstants.RECEIVE_REGIST_FAILED, {message: 'Huston our server is down and as a result puppies are dying right now. Please try again later.'});
            }
        );
    }

    reconfirmMail(username) {
        this.dispatch(RegisterConstants.RESEND_CONFIRM_MAIL, username);
    }

    verifyMailAddressById(username, verificationId){
        //console.log('About to verify mail address of: '+username+' with ver id: '+verificationId);
        this.app.usersApi.verifyMail(username, verificationId).then(
                res =>{
                //console.log('Response received: '+JSON.stringify(res));
                let {status, code, message, data} = res;
                if(status=='success'){
                    //console.log('Verif  SUCCESS !');
                    this.dispatch(RegisterConstants.RECEIVE_MAIL_VERIF_SUCCESS, {message: message, data: data});
                    //console.log('REGIST SUCCESS')
                }else{
                    //console.log('Verif  FAILURE: '+message);
                    this.dispatch(RegisterConstants.RECEIVE_MAIL_VERIF_FAILED, {message: message, code: code});
                }
            },
                err=>{
                //console.log('registerActionCreators.attemptRegister err: '+err);
                this.dispatch(RegisterConstants.RECEIVE_MAIL_VERIF_FAILED, {message: 'Huston our server is down and as a result puppies are dying right now. Please try again later.'});
            }
        );
    }

}

export default RegisterActionCreator;
