import React from 'react'
import {Nav, Navbar, CollapsibleNav, NavItem, DropdownButton, MenuItem, ListGroup, ModalTrigger, Button} from 'react-bootstrap';
import {NavItemLink,ButtonLink,ListGroupItemLink,MenuItemLink} from 'react-router-bootstrap';
import ModalLogin from './../loginForm/modalLogin';
import Marty from 'marty';
import _ from 'lodash';

class MyNavbar extends React.Component {

    constructor(props) {
        super(props);
        //this.render = this.render.bind(this);
        this.state = { isLoginModalOpen:false };

        this.openLoginModal = _.bind(this.openLoginModal, this);
        this.closeLoginModal = _.bind(this.closeLoginModal, this);
        //this.reload = _.bind(this.reload, this);
        this.isLoggedIn = _.bind(this.isLoggedIn, this);
        this.handleSelect = _.bind(this.handleSelect, this);



    }


//<MenuItemLink to='profile'>Profile</MenuItemLink>

    //reload(){
    //    //this.app.navigationActionCreators.reload();
    //    console.log('GOGO: '+this.props.checkPermissions);
    //}
//<NavItem onClick={this.reload}>Reload</NavItem>

    handleSelect(selectedKey) {
        //console.log(selectedKey);
        //alert('selected ' + selectedKey);
        if(selectedKey=='logout'){
            this.app.loginActionCreators.attemptLogout();
        }else{
            this.app.navigationActionCreators.navigateTo(selectedKey);
        }

    }

    render(){
        var loggedInNavBar =
            (<Nav navbar right onSelect={this.handleSelect}>
                <DropdownButton title={this.props.user?this.props.user.username:'User'} navItem>
                    <MenuItem eventKey='profile'>Profile</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey='logout'>Logout</MenuItem>
                </DropdownButton>
            </Nav>);

        var loggedOutNavBar =
            (<Nav navbar right>
                <NavItem onSelect={this.openLoginModal}>Login</NavItem>
                <NavItemLink to='register' params={{ someparam: 'hello' }}>Register</NavItemLink>
            </Nav>);


        return (
            <div>
                <ModalLogin show={this.state.isLoginModalOpen} onHide={this.closeLoginModal}/>
                <Navbar brand={<a href='#'>React-Bootstrap</a>} toggleNavKey={0}>
                    <CollapsibleNav eventKey={0}> {/* This is the eventKey referenced */}
                        <Nav navbar>
                            <NavItemLink to='home' >Home</NavItemLink>
                            <NavItemLink to='about'>About</NavItemLink>

                        </Nav>
                        {(this.props.user)?loggedInNavBar:loggedOutNavBar}
                    </CollapsibleNav>
                </Navbar>
            </div>
        );
    }


    isLoggedIn(){
        return !!this.props.user;
    }

    openLoginModal(){
        //console.log('#################### - Login btn clicked! as a result modal is now open!');
        this.setState({isLoginModalOpen: true});
    }

    closeLoginModal() {
        //console.log('@@@@@@@@@@@@@@@@@@@@ - Closing login modal!');
        this.setState({ isLoginModalOpen: false });
    }

}

MyNavbar.propTypes = {
    isLoginModalOpen:React.PropTypes.bool
};

export default Marty.createContainer(MyNavbar, {
    listenTo: ['loginStore'],
    fetch: {
        user(){
            var usr = this.app.loginStore.getUser();
            return (!usr)?false:usr;
        }
    }
});