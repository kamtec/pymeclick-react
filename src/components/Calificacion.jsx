import React, {useEffect} from "react";
import { connect } from "react-redux"; 
import propTypes from "prop-types";
import {setCalificacion, deleteCalificacion} from "../actions"
import CalificacionFeatures from "./CalificacionFeatures";
import ModalElement from "./ModalElement";
import useModalElement from "../custom-hooks/UseModalElement";
import "../assets/styles/components/Calificacion.scss";

const Calificacion = (props) =>{
    const { modalElement,closeModal,openModal } = useModalElement();
    const {data} = props;
    const {id_calificacion, puntaje} =data;
    useEffect(() => {

    }, []);
    
    return(
    <div>
         <React.Fragment>
         <div className="calificacion">
            <div className="calificacion__desc">
         <p>
            <span className="producto-servicio__font">Calificacion de producto o servicio nro.:</span>{" "}{id_calificacion}  
            </p>
             <p>
            <span className="producto-servicio__font">Puntaje de Producto:</span>{" "}{puntaje}  
            </p>
             <p className="producto-servicio__font" onClick={openModal}>
              ver Reseña 
             </p>
           </div>
           </div>
           </React.Fragment>
        <ModalElement isOpen={modalElement} onClose={closeModal}>
            <CalificacionFeatures data={data} />
        </ModalElement>
    </div>
    );
};
const mapStateToProps = (state) => {
   return{
            calificaciones: state.calificaciones
   };
};
//Props
Calificacion.propTypes = {
     data: propTypes.object,
     id_calificacion: propTypes.number, 
     puntaje: propTypes.number, 
     comentario: propTypes.string
};

const mapDispatchToProps = {
    setCalificacion, 
    deleteCalificacion
};
export default connect(mapStateToProps, mapDispatchToProps)(Calificacion);  
