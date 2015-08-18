import Marty from 'marty';
import Router from 'react-router';

var router;

//export default
router = Router.create({
    routes: require('./routes'),
    location: location()
});

module.exports = {
    getCurrentPath() {
        return router.getCurrentPath();
    },

    getParams(){
        return router.getParams();
    },

    makePath(to, params, query) {
        return router.makePath(to, params, query);
    },

    makeHref(to, params, query) {
        return router.makeHref(to, params, query);
    },

    transitionTo(to, params, query) {
        //console.log('My Transition to '+to+' ran.');
        return router.transitionTo(to, params, query);
    },

    replaceWith(to, params, query) {
        return router.replaceWith(to, params, query);
    },

    refresh(){
        return router.refresh();
    },

    goBack() {
        return router.goBack();
    },

    run(render) {
        router.run((Handler, state) => {
            render(Handler, state);
        });
    }
};


function location() {
    if (typeof window !== 'undefined') {
        return Router.HistoryLocation;
        //return Router.HashLocation;
    }
}
