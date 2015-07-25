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
        this.attemptUserLogout = _.bind(this.attemptUserLogout, this);
        this.isLoggedIn = _.bind(this.isLoggedIn, this);
    }




    render(){
        var loggedInNavBar =
            (<Nav navbar right>
                <DropdownButton eventKey={3} title={this.props.user?this.props.user.username:'User'}>
                    <MenuItemLink to='profile'>Profile</MenuItemLink>
                    <MenuItem divider />
                    <NavItem onClick={this.attemptUserLogout}>Logout</NavItem>
                </DropdownButton>
            </Nav>);

        var loggedOutNavBar =
            (<Nav navbar right>
                <NavItem onClick={this.openLoginModal}>Login</NavItem>
                <NavItemLink to='register' params={{ someparam: 'hello' }}>Register</NavItemLink>
            </Nav>);
        return (
            <div>
                <ModalLogin show={(this.props.user)?false:this.state.isLoginModalOpen} onHide={this.closeLoginModal}/>
                <Navbar brand={<a href='#'>React-Bootstrap</a>} toggleNavKey={0}>
                    <CollapsibleNav eventKey={0}> {/* This is the eventKey referenced */}
                        <Nav navbar>
                            <NavItemLink to='home' params={{ someparam: 'hello' }}>Home</NavItemLink>

                            <NavItemLink to='about' params={{ someparam: 'hello' }}>About</NavItemLink>
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
        this.setState({isLoginModalOpen: true});
    }

    closeLoginModal() {
        this.setState({ isLoginModalOpen: false });
    }

    attemptUserLogout(){
        this.app.loginActionCreators.attemptLogout();
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