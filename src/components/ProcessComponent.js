import React from 'react';
import { ALLPROCESS } from '../shared/allprocess';

const Process = () => {
    const containerprocess = ALLPROCESS.map((process) => {//map hace que menu sea un arreglo, y a cada uno de los dish generados, les aplica el cuerpo de la funcion, osea el return
        if(process.lado==0)
        return (
            <div className="row row-content align-items-center">
                <div className="col-12 col-md-6 order-md-first">
                    <div className="media">
                        <div class="media-body">
                            <img src={process.imagen} alt={process.orangetext} width="800px" height="800px" className="d-flex img-thumbnail align-self-center"></img>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="orangetext">{process.orangetext}</div>
                    <div className="blacktext">{process.blacktext}</div>
                    <div className="smalltext">{process.smalltext}</div>
                </div>
            </div>
        );
        else
        return (
            <div className="row row-content align-items-center">
                <div className="col-12 col-md-6 order-md-last">
                    <div className="media">
                        <div class="media-body">
                            <img src={process.imagen} alt={process.orangetext} width="800px" height="800px" className="d-flex img-thumbnail align-self-center"></img>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="orangetext">{process.orangetext}</div>
                    <div className="blacktext">{process.blacktext}</div>
                    <div className="smalltext">{process.smalltext}</div>
                </div>
            </div>
        );
    });

    return (
        <div className="row">
            {containerprocess}
        </div>
    );
}

export default Process;