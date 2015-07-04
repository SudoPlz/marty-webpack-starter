import Marty from 'marty';
import RegisterConstants from '../constants/registerConstants.js';

import _ from 'lodash';

class RegisterActionCreator extends Marty.ActionCreators {


    constructor(options){
        if(options){super(options)}else{super()}

        this.attemptRegister = _.bind(this.attemptRegister, this);
    }

    attemptRegister(payLoad) {
        this.dispatch(RegisterConstants.REGISTER_NEW_USER, payLoad);
    }

    reconfirmMail(username) {
        this.dispatch(RegisterConstants.RESEND_CONFIRM_MAIL, username);
    }

    verifyMailAddressById(username, verId){
        this.dispatch(RegisterConstants.VERIFY_MAIL_ADDRESS, username, verId);
    }

}

export default RegisterActionCreator;
