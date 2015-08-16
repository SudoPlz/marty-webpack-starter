import _ from 'lodash';
import Marty from 'marty';
import LoginConstants from '../constants/loginConstants';


class LoginActionCreators extends Marty.ActionCreators {

    constructor(options){
        if(options){super(options)}else{super()}
    }


    //this.dispatch(LoginConstants.LOGIN_ATTEMPT, payload);



    attemptLogin(payLoad) {
        //console.log('&&&&&&&&&& session: '+this.app.session.getToken());
        //console.log('&&&&&&&&&& localStorage: '+this.app.localStorage.getToken());
        this.app.session.clearToken();
        this.app.localStorage.clearToken();

        this.app.usersApi.login(payLoad.username, payLoad.password).then(
                res =>{
                //console.log('Response received: '+JSON.stringify(res));
                let {status, code, message, data} = res;
                if(status=='success'){
                    var token = data.token;


                    this.app.session.setToken(token);
                    this.app.localStorage.setToken(token);
                    //console.log('%%% - ABOUT to set username 1 sinse rememberMe is: '+payLoad.rememberMe);
                    if(payLoad.rememberMe){
                        //console.log('%%% - ABOUT to set username 2 to: '+ payLoad.username);
                        this.app.localStorage.setUsername(payLoad.username);
                    }else{
                        this.app.localStorage.setUsername('');
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
        console.log('Logout.');
        var token = this.app.loginStore.getToken();
        this.app.session.clearToken();
        this.app.localStorage.clearToken();
        this.app.usersApi.logout(token).then(res =>{}, err=>{});
        this.dispatch(LoginConstants.LOGGED_OUT);
    }


    attemptChangePassword(oldPassword, newPassword, next){
        console.log('ChangePassword.');
        var token = this.app.loginStore.getToken();

        this.app.usersApi.changePassword(token, oldPassword, newPassword).then(
                res =>{
                //console.log('Response received: '+JSON.stringify(res));
                let {status, code, message} = res;
                if(status=='success'){
                    return next(true, message);
                }else{
                    return next(false, message);
                }
            },
                err=>{
                    return next(false, err);
            }
        );
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
