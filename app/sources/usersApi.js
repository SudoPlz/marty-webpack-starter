import Marty from 'marty';
import {format} from 'util';
import config from '../config.json';
//import httpRequest from 'superagent';

var base = config.API.ROOT;
var endpoint = base; //+ 'users';

//function handleRes(res) {
//    console.log('Responce: '+res.body);
//    let json = res.json();
//    if (res.ok) {
//        return json;
//    }
//    throw new Error('Error in response', json, res);
//}

class UserHttpAPI extends Marty.HttpStateSource {

    //constructor(options){
    //    super(options);
    //    this.login = this.login.bind(this);
    //}


    handleRes( res) {
        let json = res.json();
        //console.log('Responce in Json: '+JSON.stringify(json));
        if (res.ok) {
            return json;
        }
        throw new Error('Error in response', json, res);
    }


    //login(username, password) {
    //    console.log('About to post login: '+username+password);
    //    var url = format(endpoint + '/login');
    //    return this.post({
    //        url: url,
    //        body: {
    //            identifier: username,
    //            password: password
    //        }
    //    }).then(handleRes);
    //}

    //register(username, password, email, firstName, lastName){
    //
    //    return this.post({
    //        url: url,
    //        body: {
    //            username:username,
    //            password: password,
    //            email: email,
    //            firstName:firstName,
    //            lastName:lastName
    //        }
    //    }).then(handleRes);
    //}

    getSelf(token, next) {
        var url = format(endpoint + '/self');
        return this.request({
            url: url,
            method: 'POST',
            body: { token: token}
        }).then(this.handleRes);

        //return httpRequest.post(url)
        //    .send({ token: token})
        //    .set('Accept', 'application/json')
        //    .end(next);
    }


    changePassword(token, oldPassword, newPassword){
        var url = format(endpoint + '/changeCredentials/password');
        return this.request({
            url: url,
            headers:{Authorization:'Bearer '+token},
            method: 'POST',
            body: { userToken:token, oldPass:oldPassword, newPass:newPassword }
        }).then(this.handleRes);
    }


    logout(token) {
        var url = format(endpoint + '/logout');
        return this.request({
            url: url,
            method: 'POST',
            body: { token:token }
        }).then(this.handleRes);
        //return httpRequest.post(url)
        //    .send({ identifier: username, password: password })
        //    .set('Accept', 'application/json')
        //    .end(next);
    }


    login(username, password) {

        var url = format(endpoint + '/auth/local');
        return this.request({
            url: url,
            method: 'POST',
            body: { identifier: username, password: password }
        }).then(this.handleRes);
        //return httpRequest.post(url)
        //    .send({ identifier: username, password: password })
        //    .set('Accept', 'application/json')
        //    .end(next);
    }

    register(username, password, email, firstName, lastName) {

        var url = format(endpoint + '/signup');
        return this.request({
            url: url,
            method: 'POST',
            body: {
                username: username,
                password: password,
                email: email,
                firstName: firstName,
                lastName: lastName
            }
        }).then(this.handleRes);


        console.log('Attempting to register with us: '+username
            +' pas'+password
            +' mail: '
            +email+' fn: '
            +firstName+' ln: '
            +lastName);
        //return httpRequest.post(url)
        //    .send({
        //        username: username,
        //        password: password,
        //        email: email,
        //        firstName: firstName,
        //        lastName: lastName
        //    })
        //    .set('Accept', 'application/json')
        //    .end(next);
    }


    //TODO: Endpoint in backend does not yet exist for this
    resendMail(username, next){
        var url = format(endpoint + '/reconfirm');

        return this.request({
            url: url,
            method: 'POST',
            body: { username: username }
        }).then(this.handleRes);

        //return httpRequest.post(url)
        //    .send({
        //        username: username
        //    })
        //    .set('Accept', 'application/json')
        //    .end(next);
    }

    verifyMail(username, verificationId, next){
        var url = format(endpoint + '/signup/verify');
        return this.request({
            url: url,
            method: 'POST',
            body: {
                username: username
                ,verificationId: verificationId
            }
        }).then(this.handleRes);

        //return httpRequest.post(url)
        //    .send({
        //        username: username
        //        ,verificationId: verificationId
        //    })
        //    .set('Accept', 'application/json')
        //    .end(next);
    }


    //
    //
    //verifyEmail: function (username, verificationId) {
    //    request.post(API_ENDPOINTS.VERIFY_EMAIL)
    //        .send({ username: username, verificationId: verificationId })
    //        .set('Accept', 'application/json')
    //        .end(function(error, res){
    //            if(error) return ServerActionCreators.receiveMailVerification('error', error);
    //            if (res) {
    //                var responseParsed = res.body;
    //                //console.log(responseParsed);
    //                return ServerActionCreators.receiveMailVerification(responseParsed.status, responseParsed.message, responseParsed.data, responseParsed.code );
    //            }
    //        });
    //},


}

export default UserHttpAPI;
