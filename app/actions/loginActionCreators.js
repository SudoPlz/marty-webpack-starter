import _ from 'lodash';
import Marty from 'marty';
import LoginConstants from '../constants/loginConstants';


class LoginActionCreators extends Marty.ActionCreators {

    constructor(options){
        if(options){super(options)}else{super()}
    }


        //this.dispatch(LoginConstants.LOGIN_ATTEMPT, payload);



    attemptLogin(payLoad) {
        //console.log('Attempting to log in with username: '+payLoad.username +' and password: '+payLoad.password);
        //if(payLoad.rememberMe){
        //    this.setState({rememberMe:true});
        //}

        this.app.usersApi.login(payLoad.username, payLoad.password).then(
                res =>{
                //console.log('Response received: '+JSON.stringify(res));
                let {status, code, message, data} = res;
                if(status=='success'){
                    var token = data.token;
                    this.app.session.setToken(token);
                    this.app.localStorage.setToken(token);
                    if(payLoad.rememberMe){
                        this.app.localStorage.setUsername(payLoad.username);
                    }else{
                        this.app.localStorage.setUsername(null);
                    }

                    this.dispatch(LoginConstants.LOGIN_SUCCESS, {user: data.user, token: token, error: null});
                    //console.log('LOGIN SUCCESS')
                }else{
                    //console.log('LOGIN FAILED: '+message+' code: '+code);
                    this.dispatch(LoginConstants.LOGIN_FAILURE, {error: message});
                }
            },
            err=>{
                console.log('loginStore.attemptLogin err: '+err);
                this.dispatch(LoginConstants.LOGIN_FAILURE, {error: 'Huston we got a problem and as a result puppies are dying right now. Please try again later.'});
            }
        );
    }


    attemptLogout(){

        var token = this.app.loginStore.getToken();
        this.app.session.logout();
        this.app.localStorage.logout();
        this.app.usersApi.logout(token).then(res =>{}, err=>{});
        this.dispatch(LoginConstants.LOGGED_OUT);

    }



    //loggedIn(user) {
    //    if (this.app.router.getCurrentPath() === '/login') {
    //        this.app.navigationActionCreators.navigateHome();
    //    }
    //
    //    this.dispatch(LoginConstants.LOGGED_IN, user);
    //}



    //logout() {
    //    this.dispatch(LoginConstants.LOGGED_OUT);
    //    console.log('logout');
    //    this.app.navigationActionCreators.navigateToLogin();
    //}
}

export default LoginActionCreators;
