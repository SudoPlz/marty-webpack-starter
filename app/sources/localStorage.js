import Marty from 'marty';

class LocalStorage { //extends Marty.LocalStorageStateSource {
    setToken(token) {

        return Marty.isBrowser?window.localStorage.setItem('token', token):null;
        //this.set('token', token);
    }


    getToken() {
        return Marty.isBrowser?window.localStorage.getItem('token'):null;
        //return this.get('token');
    }

    setUsername(username) {
        //if(Marty.isBrowser){
        //    window.localStorage.setItem('username', username)
        //    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% - USERNAME SET. IT IS NOW: '+username);
        //    return true;
        //}else{
        //    return null;
        //}
        return Marty.isBrowser?window.localStorage.setItem('username', username):null;
        //this.set('token', token);
    }

    getUsername() {
        //if(Marty.isBrowser){
        //    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% - Get username ran: '+window.localStorage.getItem('username'));
        //    return window.localStorage.getItem('username');
        //}else{
        //    return null;
        //}
        return Marty.isBrowser?window.localStorage.getItem('username'):null;
        //this.set('token', token);
    }


    clearToken() {
        return Marty.isBrowser?window.localStorage.setItem('token', ''):null;
        //this.clear('token')
    }

    clearAllKeys() {
        return Marty.isBrowser?window.localStorage.clear():null;
    }
}

export default LocalStorage;
