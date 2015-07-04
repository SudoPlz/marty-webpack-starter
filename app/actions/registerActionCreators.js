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

}

export default RegisterActionCreator;
