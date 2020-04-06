import React from 'react';
import Benefits from './BenefitsComponent'


function Footer() {
    return(
        <>
            <Benefits />
            <div className="container mt-5">
                <img className="d-block img-fluid img-footer" src="assets/Footer-BG.jpg" alt="fondo"/>
                <div className="row whitetexttitle d-flex justify-content-center">
                    <blockquote className="text-center z">
                        <div><cite className="orangetextsmall"></cite></div>
                    </blockquote>
                </div>
            </div>
        </>
    );
}

export default Footer;