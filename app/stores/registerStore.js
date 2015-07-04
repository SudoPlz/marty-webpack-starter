import _ from 'lodash';
import Marty from 'marty';
import RegisterConstants from '../constants/registerConstants.js';
import UsersAPI from '../sources/usersApi.js';

class RegisterStore extends Marty.Store {
    constructor(options) {
        super(options);
        this.api = new UsersAPI();
        this.state = {
            error: null
        };

        this.handlers = {
            attemptRegister:RegisterConstants.REGISTER_NEW_USER
            //registerSuccess: RegisterConstants.RECEIVE_REGIST_SUCCESS,
            //registerFailed: RegisterConstants.RECEIVE_REGIST_FAILED
        };

    }

    attemptRegister(payLoad){
        var self = this;

        this.api.register(payLoad.username, payLoad.password, payLoad.email, payLoad.firstName, payLoad.lastName, (error, res) => {
            //console.log("Error: "+error+ "responce: "+JSON.stringify(res));
            if(error){
                return self.registerFailed(error);
            }else{
                var body = res.body;
                if(body.status=='fail'|| body.status=='error'){
                    return self.registerFailed(body.message, body.code);
                }else{
                    return self.registerSuccess(body.data);
                }
            }
        })
    }


    registerFailed(exception, code) {
        console.log('REGISTRATION FAILED: '+exception+' code: '+code);
        this.setState({error: exception});
    }

    registerSuccess(data){
        this.app.navigationActionCreators.navigateToVerify();
    }


    getError() {
        return this.state.error;
    }

    clearErrors(){
        this.setState({error: null});
    }

}

export default RegisterStore;
