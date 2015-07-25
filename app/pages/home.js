import React from 'react'
import {PageHeader, Button} from 'react-bootstrap';
import Marty from 'marty';
import _ from 'lodash';

class HomePage extends React.Component {

    constructor(props, context){
        super(props, context);
        //this.saveToStorage = _.bind(this.saveToStorage, this);

    }


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

    //<Button bsStyle='success' onClick={this.saveToStorage}>Save to LocalStorage</Button>
    //saveToStorage(e){
    //    console.log('Saved');
    //    if(Marty.isBrowser){
    //      //console.log('Token set storage');
    //        return  this.app.localStorage.setTest('TESTING 123');
    //    }
    //}

}

HomePage.propTypes = {

};


//export default Marty.createContainer(HomePage);
export default HomePage;
