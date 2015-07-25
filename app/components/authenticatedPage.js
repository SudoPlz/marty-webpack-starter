import React from 'react';
import Marty from 'marty';
import _ from 'lodash';
/**
 * Used for creating pages which require authentication.
 *
 * Given a component and an array of allowedRoles:
 * Automatically redirects away if current user in LoginStore does not match any of the allowed roles
 */
    //public user admin


    //var availableRoles = ['public', 'user', 'admin'];

export default function(OriginalComponent, allowedRoles) {
    let extendedComponent =  class extends React.Component {

        constructor(props) {
            super(props);
            this.checkRoleCompability = _.bind(this.checkRoleCompability, this);
        }


        checkRoleCompability(){
            if(Marty.isBrowser){
                var curRole = !!this.props.user?'user':'public';
                //curRole = this.props.isAdmin?'admin':curRole;

                console.log('Cur role: '+curRole);
                var allowed = (_.findIndex(allowedRoles, function(chr) {return chr == curRole})==-1)?false:true;    //if -1 then curRole NOT allowed, else allowed
                console.log('Allowed? : '+allowed);
                if(!allowed && curRole=='public'){
                    console.log('Navigate to login');
                    this.app.navigationActionCreators.navigateToLogin();
                }else if(!allowed && curRole=='user'){
                    console.log('Navigate to home');
                    this.app.navigationActionCreators.navigateHome();
                }else{
                    console.log('No need to do anything, user allowed.');
                }
            }
        }

        componentDidMount(){
            //console.log('Did mount...!');
            this.checkRoleCompability();
        }

        componentWillMount() {
            ////if(!this.app.loginStore.isLoggedIn()){
            ////    return this.app.navigationActionCreators.navigateToLogin();
            ////}
        }

        //isLoggedIn(){
        //    console.log('User: '+this.props.user);
        //    return !!this.props.user;
        //}

        render() {
            return <OriginalComponent {...this.props} />
        }
    };

    let container = Marty.createContainer(extendedComponent
        , {
        listenTo: ['loginStore'],
        fetch: {

            //isAdmin(){
            //    return this.app.loginStore.getUser().role=='admin';
            //},

            user(){
                return this.app.loginStore.getUser();
            }
        }
    }
    );
    container.allowedRoles = allowedRoles;
    return container;
}
