import React from 'react'
import {PageHeader} from 'react-bootstrap';
import Marty from 'marty';

class VerifyPage extends React.Component {
    render(){
        return (
            <div className='verify'>
                <PageHeader>VerifyPage
                    <br/>
                        <small>Welcome sir.</small>
                    <br/>
                    <h5>Marty version is: {Marty.version}</h5>
                </PageHeader>
            </div>
        );
    }
}

VerifyPage.propTypes = {

};

export default VerifyPage;
