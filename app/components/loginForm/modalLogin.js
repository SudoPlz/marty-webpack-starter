import React from 'react'
import Marty from 'marty';
import Panel from 'react-bootstrap/lib/Panel';
import {Button, Input} from 'react-bootstrap';
import Modal from 'react-bootstrap-modal';


class ModalLogin extends React.Component {

    handleLogin(payload) {
        this.app.loginActionCreators.attemptLogin(payload.email, payload.password, payload.rememberMe);
    }


    //logout: function(e) {
    //    e.preventDefault();
    //    //SessionActionCreators.logout();
    //    //TODO: Do something on logout
    //},

    render() {
        //console.log('show is : '+this.props.show);
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.onHide}
                backdrop={false}
                animate={true}
                >
                <Modal.Header closeButton>
                    <Modal.Title id='ModalHeader'>Please log in.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input name="email" type="email" placeholder="Username or Email" required={true}/>
                    <Input name="password" type="password" placeholder="Password"
                           required={true} minLength={5}/>
                </Modal.Body>
                <Modal.Footer>
                    <Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss>
                    <Button onClick={this.handleLogin} type="#" bsStyle="success">
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

ModalLogin.propTypes = {

};

export default Marty.createContainer(ModalLogin, {
    listenTo: ['loginStore'],
    fetch: {
        error() {
            return this.app.loginStore.getError();
        }
    }
});
