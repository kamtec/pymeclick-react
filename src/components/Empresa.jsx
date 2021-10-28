import React, {useEffect} from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import {setEmpresa, deleteEmpresa} from "../actions";
import EmpresaFeatures from "./EmpresaFeatures";
import ModalElement from "./ModalElement";
import useModalElement from "../custom-hooks/UseModalElement";
import "../assets/styles/components/Empresa.scss";

const Empresa = (props) =>{
    const { modalElement,closeModal,openModal } = useModalElement();
    const {data} = props;
    const {nombre, direccion,  descripcion} =data;
    useEffect(() => {

    }, []);
    
    return(
    <div>
         <React.Fragment>
         <div className="empresa">
            <div className="empresa__desc">
             <h2>Nombre de Empresa: {nombre}</h2>
             <p>
            <span className="empresa__font">Direcci&oacute;n:</span>{" "}{direccion}  
            </p>
            <p>
            <span className="empresa__font">Descripci&oacute;n:</span>{" "}{descripcion}
            </p>
             <p className="empresa__font" onClick={openModal}>
            Mas detalles de la Empresa
             </p>
             </div>
           </div>
           </React.Fragment>
        <ModalElement isOpen={modalElement} onClose={closeModal}>
            <EmpresaFeatures data={data} />
        </ModalElement>
    </div>
    );
};
const mapStateToProps = (state) => {
   return{
            empresas: state.empresas
   };
};
//Props
Empresa.propTypes = {
     data: propTypes.object,
     id_empresa: propTypes.number,
     nombre: propTypes.string,
     direccion: propTypes.string, 
     descripcion: propTypes.string,
     telefono: propTypes.string,
     email: propTypes.string,
     comuna: propTypes.object,
     ciudad: propTypes.object, 
     categoria: propTypes.object
};

const mapDispatchToProps = {
    setEmpresa, 
    deleteEmpresa
};
export default connect(mapStateToProps, mapDispatchToProps)(Empresa); 