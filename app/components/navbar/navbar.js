import React from 'react'
import {Nav, Navbar, CollapsibleNav, NavItem, DropdownButton, MenuItem, ListGroup, ModalTrigger, Button} from 'react-bootstrap';
import {NavItemLink,ButtonLink,ListGroupItemLink,MenuItemLink} from 'react-router-bootstrap';
import ModalLogin from './../loginForm/modalLogin';

class MyNavbar extends React.Component {

    constructor(props) {
        super(props);
        //this.render = this.render.bind(this);
        this.state = { isLoginModalOpen:false };

        this.openLoginModal = this.openLoginModal.bind(this);
        this.closeLoginModal = this.closeLoginModal.bind(this);

    }





    render(){
        var loggedInNavBar =
            (<Nav navbar right>
                <DropdownButton eventKey={3} title='Dropdown'>
                    <MenuItemLink to='destination' params={{ someparam: 'hello' }}>Profile</MenuItemLink>
                    <MenuItem divider />
                    <MenuItemLink to='destination' params={{ someparam: 'hello' }}>Logout</MenuItemLink>
                </DropdownButton>
            </Nav>);

        var loggedOutNavBar =
            (<Nav navbar right>
                <NavItem onClick={this.openLoginModal}>Login</NavItem>
                <NavItemLink to='register' params={{ someparam: 'hello' }}>Register</NavItemLink>
            </Nav>);
        return (
            <div>
                <ModalLogin show={this.state.isLoginModalOpen} onHide={this.closeLoginModal}/>
                <Navbar brand={<a href='#'>React-Bootstrap</a>} toggleNavKey={0}>
                    <CollapsibleNav eventKey={0}> {/* This is the eventKey referenced */}
                        <Nav navbar>
                            <NavItemLink to='home' params={{ someparam: 'hello' }}>Home</NavItemLink>

                            <NavItemLink to='about' params={{ someparam: 'hello' }}>About</NavItemLink>
                        </Nav>
                        {this.props.isLoggedIn?loggedInNavBar:loggedOutNavBar}
                    </CollapsibleNav>
                </Navbar>
            </div>
        );
    }

    openLoginModal(){
        this.setState({isLoginModalOpen: true});
    }

    closeLoginModal() {
        this.setState({ isLoginModalOpen: false });
    }
}

MyNavbar.propTypes = {
    isLoginModalOpen:React.PropTypes.bool
};

export default MyNavbar;
