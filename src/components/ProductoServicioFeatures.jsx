import React from "react";
import "../assets/styles/components/ProductoServicioFeatures.scss";

const ProductoServicioFeatures = (props) =>{
   // const {data} = props;
    const {nombre_prod_serv, precio, descripcion_prod_serv} =props;
    return(
        <div>
        <React.Fragment>
        <div className="porducto-servicio_datos">
            <div className="porducto-servicio__desc_comp">
            <p>
            <span className="porducto-servicio__font_comp">Nombre producto o servicio:</span>{" "}{nombre_prod_serv}  
            </p>
             <p>
            <span className="porducto-servicio__font_comp">Precio:</span>{" "}{precio}  
            </p>
            <p>
            <span className="porducto-servicio__font_comp">Descripci&oacute;n:</span>{" "}{descripcion_prod_serv}  
            </p>
            </div>
        </div>
        </React.Fragment>
        </div>
    );

};
    export default ProductoServicioFeatures; 