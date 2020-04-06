import React from 'react';
import { BENEFITS } from '../shared/benefits';


const containerprocess = BENEFITS.map((benefit) => {
    return(
        <div className="col-12 col-md-4">
            {benefit.icon == 'fa-clock'?<span className="fa fa-clock-o fa-lg icon"></span>:null}
            {benefit.icon == 'fa-home'?<span className="fa fa-home fa-lg"></span>:null}
            {benefit.icon == 'fa-home'?<span className="fa fa-home fa-lg"></span>:null}
            <div className="col-12 whitetext">
                {benefit.title}
            </div>
            <div className="col-12 whitetextsmall">
                {benefit.description}
            </div>
        </div>
    );
})

function Benefits() {
    return(
        <> 
            <div className="container mt-5">
                <img className="d-block img-fluid img-footer" src="assets/BODY-BENEFICIOS-BG.jpg" alt="fondo"/>
                <div className="row d-flex justify-content-center">
                    <blockquote className="text-center z">
                        <div className="col-12 whitetexttitle">Descubre los beneficios que<span className="orangetextsmall">ToSuper </span> tiene para ti</div>
                        <div className="row mt-5">{containerprocess}</div>
                    </blockquote>
                </div>
            </div>
        </>
    );
}

export default Benefits;