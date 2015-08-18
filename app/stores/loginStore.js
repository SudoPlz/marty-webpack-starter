import _ from 'lodash';
//import UsersAPI from '../sources/usersApi';
import Marty from 'marty';
import LoginConstants from '../constants/loginConstants';


class LoginStore extends Marty.Store {
    constructor(options) {
        if(options)     {super(options)} else {super()}

        this.state = {
            error: null,                //login error
            user: null,                //User data
            token: null               //The token to use on each request
        };
        //this.api = new UsersAPI();
        //this.attemptLogin = _.bind(this.attemptLogin, this);
        //this.loginFailure = _.bind(this.loginFailure, this);
        //this.logout = _.bind(this.logout, this);

        this.handlers = {
            //attemptLogin: LoginConstants.LOGIN_ATTEMPT
            onLoginSuccess: LoginConstants.LOGIN_SUCCESS,
            onLoginFailure: LoginConstants.LOGIN_FAILURE,
            onGotToken: LoginConstants.RECEIVE_TOKEN,
            onLogout: LoginConstants.LOGGED_OUT,
            onGotUserSuccess: LoginConstants.RECEIVE_USER
        };

    }



    onLoginSuccess(payload) {
        this.clearErrors();
        this.setState({user: payload.user, token: payload.token, error: payload.error});
        //console.log('LOGIN Success');
    }

    onLoginFailure(payload) {
        this.clearErrors();
        this.setState({error: payload.error});
        //console.log('LOGIN FAILURE: '+this.state.error);
    }

    onLogout() {
        this.setState({
            token: null,
            user: null
        });
    }

    onGotUserSuccess(user) {
        this.setState({user: user});
    }

    onGotToken(token){
        this.setState({token: token});
    }


    getUser() {
        return this.fetch({
            id: 'get-user',
            locally() {
                //Try to fetch old tokens
                if(!this.state.token && Marty.isBrowser) {         //if theres no token in our state
                    var tok = this.app.session.getToken() || this.app.localStorage.getToken();
                    //console.log('Token exists session: '+!!this.app.session.getToken()+ ' local storage: '+!!this.app.localStorage.getToken()+' ::'+(typeof tok!=undefined));
                    if(tok != null && tok.length>0){
                        console.log('loginStore: Got old token.');
                        //this.app.session.setToken(tok);
                        this.setState({token: tok});
                    }
                }


                /*
                 *       1 out of 3 cases.
                 *
                 *   1) We've got a token AND weve got a user --> just return the user locally
                 *
                 *   2) We've got a token but we DONT have a user --> go remotely and fetch the user
                 *
                 *   3) We've got NO token and we've got NO user --> just return false locally
                 *
                 * */
                if(!this.state.token) {     //if theres no token in our state       //case 3
                    //console.log('No token NO user. NOT logged in.')
                    return !!this.state.user;
                }else{                      //if we got a token
                    if(this.state.user){                                            //case 1
                        //console.log('Got token AND user. Logged in.')
                        return this.state.user;
                    }else{                                                          //case 2
                        //do nothing and fetch remotely
                    }
                }

            },
            remotely() {
                if(this.state.token==null){
                    throw new Error('Token is null, this shouldnt be running');
                }
                console.log('Lets remotely get the user.');
                return this.app.loginQueries.getUserForToken(this.state.token);
            }
        })
    }

    clearErrors(){
        this.setState({error: null});
    }






    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////         GETTERS         ////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    getToken() {
        return this.state.token;
    }


    getError() {
        return this.state.error;
    }



}

export default LoginStore;
