import React, {useEffect} from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import {setProductoServicio, deleteProductoServicio} from "../actions";
import ProductoServicioFeatures from "./ProductoServicioFeatures";
import ModalElement from "./ModalElement";
import useModalElement from "../custom-hooks/UseModalElement";
import "../assets/styles/components/ProductoServicios.scss";

const ProductoServicio = (props) =>{
    const { modalElement,closeModal,openModal } = useModalElement();
    const {data} = props;
    const {nombre_prod_serv, precio} =data;
    useEffect(() => {

    }, []);

    return(
    <div>
        <React.Fragment>
         <div className="calificacion">
            <div className="calificacion__desc">
            <p>
            <span className="producto-servicio__font">nombre producto o servicio:</span>{" "}{nombre_prod_serv}  
            </p>
             <p >
            <span className="producto-servicio__font">precio:</span>{" "}{precio}  
            </p>
             <p className="producto-servicio__font" onClick={openModal}>
            Mas detalles del producto
             </p>
           </div>
           </div>
           </React.Fragment>
        <ModalElement isOpen={modalElement} onClose={closeModal}>
            <ProductoServicioFeatures data={data} />
        </ModalElement>
    </div>
    );
};
const mapStateToProps = (state) => {
   return{
       productoServicios: state.productoServicios
   };
};
//Props
ProductoServicio.propTypes = {
     data: propTypes.object,
     id_prod_serv: propTypes.number, 
     nombre_prod_serv: propTypes.string, 
     precio: propTypes.number, 
     descripcion_prod_serv: propTypes.string, 
     categoria: propTypes.object, 
     empresa: propTypes.object
};

const mapDispatchToProps = {
    setProductoServicio, 
    deleteProductoServicio
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductoServicio); 