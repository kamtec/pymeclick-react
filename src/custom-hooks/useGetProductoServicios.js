import axios from "axios";
import {useState} from "react";
import { useLocalStorage } from "./useLocalStorage";

const useGetProductoServicios = () =>{
    const [productosServicios, setProductosServicios] = useLocalStorage("productosServicios","");
    const [load, SetLoad] = useState(true);
    const [errorHandler, SetErrorHandler] = useState(false);

    async function getProductosServicios(){
         try{
            const productosServiciosResponse = await axios.get("https://pymeclick.herokuapp.com/productoservicio");
            const productosServiciosResult = productosServiciosResponse.data
            setProductosServicios(productosServiciosResult);
            SetLoad(false);
            SetErrorHandler(false);
            console.log(productosServiciosResult);
         } catch (errorHandler) {
            SetLoad(true);
            SetErrorHandler(errorHandler);
            console.log(errorHandler);
         }
    };
    return { productosServicios, load,errorHandler, getProductosServicios }
};
export default useGetProductoServicios;