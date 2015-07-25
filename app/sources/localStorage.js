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
        return Marty.isBrowser?window.localStorage.setItem('username', username):null;
        //this.set('token', token);
    }

    getUsername() {
        return Marty.isBrowser?window.localStorage.getItem('username'):null;
        //this.set('token', token);
    }


    logout() {
        return Marty.isBrowser?window.localStorage.clear('token'):null;
        //this.clear('token')
    }

    clear(key) {
        return Marty.isBrowser?window.localStorage.clear(key):null;
        //this.storage.clear(key);
    }
}

export default LocalStorage;
