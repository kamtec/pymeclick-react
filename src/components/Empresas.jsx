import React, {useEffect} from "react";
import Empresa from "./Empresa";
import LoaderElement from "./LoaderElement";
import ErrorHandler from "./ErrorHandler";
import useGetEmpresas from "../custom-hooks/useGetEmpresas";
import "../assets/styles/components/Empresas.scss";

const Empresas = () =>{
    const {empresas, load,errorHandler, getEmpresas} = useGetEmpresas();
       
    useEffect(() => {
        getEmpresas();
    },
    [getEmpresas]);

    return(
       <div className="empresas">
           {
               load ? ( <LoaderElement /> )
               :errorHandler ? (<ErrorHandler />)
               :empresas.length === 0 ? (<ErrorHandler />)
               : (
                empresas.map((empresa) =>  (
                 <Empresa key={empresa.id_empresa} data={empresa}/>
                ))
           )}
       </div>
    );

};
export default Empresas; 