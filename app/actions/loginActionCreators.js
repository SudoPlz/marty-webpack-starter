import _ from 'lodash';
import Marty from 'marty';
import LoginConstants from '../constants/loginConstants';
import UsersAPI from '../sources/usersApi';

class LoginActionCreators extends Marty.ActionCreators {

    constructor(options){
        if(options){super(options)}else{super()}

        this.api = new UsersAPI();
        this.attemptLogin = _.bind(this.attemptLogin, this);

    }

    attemptLogin(username, password, rememberMe = false) {
        var self = this;
        console.log('Attempting to log in with username: '+username +' and password: '+password);
        this.api.login(username, password, (error, res) => {
            //console.log("Error: "+error+ "responce: "+JSON.stringify(res));
            if(error){
                return self.dispatch(LoginConstants.LOGIN_FAILED, error);
            }else{
                var body = res.body;
                if(body.status=='fail'|| body.status=='error'){
                    return self.dispatch(LoginConstants.LOGIN_FAILED, body.message, body.code);
                }else{
                    return self.dispatch(LoginConstants.LOGGED_IN, body.message, body.data);
                }
            }
        });

        //.then(res => {
        //        console.log('Responce: '+res.body);
            //if (res.status === 200) {
            //    console.log('Responce: '+res.body);
            //    this.dispatch(LoginConstants.RECEIVE_TOKEN, res.body.token);
            //    this.dispatch(LoginConstants.RECEIVE_USER, res.body.user);
            //    this.loggedIn(res.body.user);
            //    if (rememberMe) {
            //        this.dispatch(LoginConstants.REMEMBER_ME);
            //    }
            //} else {
            //    this.dispatch(LoginConstants.LOGIN_FAILED, res.body.exception);
            //}
        //})
    }

    loggedIn(user) {
        if (this.app.router.getCurrentPath() === '/login') {
            this.app.navigationActionCreators.navigateHome();
        }

        this.dispatch(LoginConstants.LOGGED_IN, user);
    }

    attemptReAuth() {
        if (this.app.loginQueries.getTokenFromStorage()) {
            this.app.loginQueries.getUser().then(user => this.loggedIn(user));
        }
    }

    logout() {
        this.dispatch(LoginConstants.LOGGED_OUT);
        console.log('logout');
        this.app.navigationActionCreators.navigateToLogin();
    }
}

export default LoginActionCreators;
