import Marty from 'marty';
import {format} from 'util';
import config from '../config.json';
import httpRequest from 'superagent';

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

    getSelf() {
        return this.get(endpoint + '/self').then(handleRes);
    }


    login(username, password, next) {
        var url = format(endpoint + '/auth/local');
        return httpRequest.post(url)
            .send({ identifier: username, password: password })
            .set('Accept', 'application/json')
            .end(next);
    }

    register(username, password, email, firstName, lastName, next) {
        console.log('Attempting to register with us: '+username
            +' pas'+password
            +' mail: '
            +email+' fn: '
            +firstName+' ln: '
            +lastName);

        var url = format(endpoint + '/signup');
        return httpRequest.post(url)
            .send({
                username: username,
                password: password,
                email: email,
                firstName: firstName,
                lastName: lastName
            })
            .set('Accept', 'application/json')
            .end(next);
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
