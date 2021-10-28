import React from "react";
import "../assets/styles/components/CalificacionFeatures.scss";

const CalificacionFeatures = (props) =>{
   // const {data} = props;
    const {id_calificacion, puntaje, comentario} =props;
    return(
        <div>
        <React.Fragment>
        <div className="calificacion_datos">
            <div className="calificacion__desc_comp">
            <p>
            <span className="calificacion__font_comp">Calificacion de producto nro.:</span>{" "}{id_calificacion}  
            </p>
             <p>
            <span className="calificacion__font_comp">Puntaje de Producto:</span>{" "}{puntaje}  
            </p>
            <p>
            <span className="calificacion__font_comp">Reseña:</span>{" "}{comentario}  
            </p>
            </div>
            </div>
            </React.Fragment>
        </div>
    );
    
};
    export default CalificacionFeatures; 