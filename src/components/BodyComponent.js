import React from 'react';
import Process from './ProcessComponent'
const Body = () => {
    return (
        <div className="container mt-5">
            <div className="row blacktexttitle d-flex justify-content-center">
                <blockquote className="text-center">
                    <div>TU DESPENSA</div>
                    <div>RAPIDO, FACIL, DIRECTO A TU<cite className="orangetextsmall">HOGAR</cite></div>
                </blockquote>
            </div>
            <Process/>
        </div>
    );
}

export default Body;