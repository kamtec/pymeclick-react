import React from "react";
import "../assets/styles/components/EmpresaFeatures.scss";

const EmpresaFeatures = (props) =>{
   // const {data} = props;
    const {nombre, direccion,  descripcion, telefono, email} =props;

    return(
        <div>
        <React.Fragment>
        <div className="empresa_datos">
            <div className="empresa__desc_comp">
            <h2 className="empresa__font_comp">Nombre de Empresa: {nombre}</h2>
             <p>
            <span className="empresa__font_comp">Direcci&oacute;n:</span>{" "}{direccion}  
            </p>
            <p>
            <span className="empresa__font_comp">Descripci&oacute;n:</span>{" "}{descripcion}
            </p>
            <p>
            <span className="empresa__font_comp">Tel&eacute;fono:</span>{" "}{telefono}
            </p>
            <p>
            <span className="empresa__font_comp">Email:</span>{" "}{email}
            </p>
            </div>
        </div>
        </React.Fragment>
        </div>
    );

};
    export default EmpresaFeatures; 