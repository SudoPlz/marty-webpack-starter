import React from 'react';
import Marty from 'marty';
import Application from './application';
import Layout from './layout';
let {ApplicationContainer} = Marty;

window.React = React;
window.Marty = Marty;


Marty.HttpStateSource.removeHook('parseJSON');

if (process.env.NODE_ENV !== 'test') {
    var app = new Application();
}
//
//app.rehydrate();
//
//if (Marty.isBrowser) {
//    app.serverUpdatesSocket.open();
//}

app.router.run((Handler, state) => {
    //app.navigationActionCreators.changeRoute(state, Handler);

    React.render((
        <ApplicationContainer app={app}>
            <Handler {...state.params} />
        </ApplicationContainer>
    ), document.getElementById('app'));
});
