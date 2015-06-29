import React from 'react'
import {PageHeader} from 'react-bootstrap';
import Marty from 'marty';

class HomePage extends React.Component {
    render(){
        return (
            <div className='home'>
                <PageHeader>Home page!
                    <br/>
                        <small>Welcome sir.</small>
                    <br/>
                    <h5>Marty version is: {Marty.version}</h5>
                </PageHeader>
            </div>
        );
    }
}

HomePage.propTypes = {

};

export default HomePage;
