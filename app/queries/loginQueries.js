import Marty from 'marty';
import LoginConstants from '../constants/loginConstants';
//import _ from 'lodash';
//import UsersAPI from '../sources/usersApi';

class LoginQueries extends Marty.Queries {

    getTokenFromStorage() {


        let token = this.app.session.getToken() || this.app.localStorage.getToken();
        //console.log('TOKEN: '+this.app.localStorage.getToken());
        //this.app.localStorage.setToken('BAR');
        if (token) {
            this.dispatch(LoginConstants.RECEIVE_TOKEN, token);
            return token;
        }
    }

    getUserForToken(token) {

        if(!token || token.length<=0){      //if the token is null/undefined or if the length is zero
            return this.app.loginActionCreators.attemptLogout();
        }
        return this.app.usersApi.getSelf(token).then(res => {
                var {status, message, data} = res;
                if(status=='success'){
                    console.log('Got user');
                    this.dispatch(LoginConstants.RECEIVE_USER, data);
                    return data;
                }else{
                    console.log('SELF FAILED: '+message);
                    this.app.loginActionCreators.attemptLogout();
                    //console.log('Err is: '+message);
                    return message;
                }
            },
                err => {
                    return console.log('Err is: '+err);
                }
        );
    }



    attemptReAuth() {
        var token = this.getTokenFromStorage();
        if (token) {
            this.getUserForToken(token);
        }else{
            console.log('...re auth failed.');
        }
    }
}

export default LoginQueries;
