import React from 'react';
import Form from './FormComponent'
import Video from './VideoComponent'
import { Jumbotron } from 'reactstrap';

const Header = () => {
    return(
        <Jumbotron>
            <div className="container">
                <img class="d-block img-fluid img-header" src="assets/Elije.jpeg" alt="fondo"/>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <Form/>
                    </div>
                    <div className="col-12 col-md-6">
                        <Video/>
                    </div>
                </div>
            </div>
        </Jumbotron>    
    );
};

export default Header;