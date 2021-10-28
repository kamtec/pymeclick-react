import React from "react";
import { createPortal } from "react-dom";
import closeIcon  from "../assets/images/icons/close-icon.png";
import "../assets/styles/components/ModalElement.scss";
import { useSelector } from "react-redux";
import CalificacionFeatures from "../components/CalificacionFeatures";
import ProductoServicioFeatures from "../components/ProductoServicioFeatures";
import EmpresaFeatures from "../components/EmpresaFeatures";
import {setCalificacion, setProductoServicio, setEmpresa} from "../actions";

const ModalElement = (props) =>{
    const dataEmpresa = props.empresa;
    const dataCalificacion = props.calificacion;
    const dataProductoServicio = props.productoServicio;
    const page = useSelector((state) => state.pageActive);
    return (
     props.isOpen ? 
       createPortal(
           <div className ="modal-element">
               <img src={closeIcon} alt="close-icon"  onClick={props.onClose} className="modal-element__close"/>
                <div>
                    {page === "Calificaciones" ? <CalificacionFeatures data={dataEmpresa}/> : <div></div>}
                    {page === "ProductoServicios"  ?<ProductoServicioFeatures data={dataCalificacion}/> : <div></div>}
                    {page === "Empresas"  ? <EmpresaFeatures data={dataProductoServicio}/> : <div></div>}</div>
           </div> ,
           document.getElementById("modal"),
       )
       : ""
    );
}
    export default ModalElement; 