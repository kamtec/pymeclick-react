import React, {useEffect} from "react";
import ErrorHandler from "./ErrorHandler";
import LoaderElement from "./LoaderElement";
import ProductoServicio from "./ProductoServicio";
import useGetProductoServicios from "../custom-hooks/useGetProductoServicios";
import "../assets/styles/components/ProductoServicios.scss";

const ProductoServicios = () =>{
    const { productosServicios, load,errorHandler, getProductosServicios } = useGetProductoServicios();
    useEffect(() => {
        getProductosServicios();
    },
    [getProductosServicios]);

    return(
       <div className="producto-servicio">
           {
               load ? ( <LoaderElement /> )
               :errorHandler ? (<ErrorHandler />)
               :productosServicios.length === 0  ? (<ErrorHandler />)
               : (
                productosServicios.map((productoServicio) =>  (
                 <ProductoServicio key={productoServicio.id_prod_serv} data={productoServicio}/>
                ))
           )}
       </div>
    );
};
export default ProductoServicios; 