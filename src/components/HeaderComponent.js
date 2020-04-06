import React from 'react';
import Form from './FormComponent'
import Video from './VideoComponent'
import { Jumbotron } from 'reactstrap';

const Header = () => {
    return(
        <Jumbotron>
            <div className="container">
                <img className="d-block img-fluid img-header" src="assets/Header-BG.jpg" alt="fondo"/>
                <div className="row">
                    <img className="logo" src="assets/logo-2.png" alt="logo"/>
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