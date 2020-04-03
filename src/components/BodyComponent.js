import React from 'react';
import Process from './ProcessComponent'
const Body = () => {
    return (
        <div className="container">
            <div className="row row-title">
                <div className="col-12 d-flex justify-content-center blacktext">TU DESPENSA</div>
                <div className="col-12 d-flex justify-content-center blacktext">RAPIDO, FACIL, DIRECTO A TU<div className="orangetextsmall d-none d-md-block">HOGAR</div></div>
                <div className="col-12 orangetext d-block d-md-none">HOGAR</div>
                <div className="col-12 d-flex justify-content-center smalltext"><p>Aqui va un texto muy pequeñito que<br></br> aun no se cual es pero dejare el espacio</p></div>
            </div>
            <Process/>
        </div>
    );
}

export default Body;