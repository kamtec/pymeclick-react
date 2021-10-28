import React, {useEffect} from "react";
import ErrorHandler from "./ErrorHandler";
import LoaderElement from "./LoaderElement";
import Calificacion from "./Calificacion";
import useGetCalificaciones from "../custom-hooks/useGetCalificaciones";
import "../assets/styles/components/Calificaciones.scss";

const Calificaciones = () =>{
   const { calificaciones, load,errorHandler, getCalificaciones } = useGetCalificaciones();

    useEffect(() => {
        getCalificaciones();
    },
    [getCalificaciones]);

    return(
       <div className="calicicaciones">
           {
               load ? ( <LoaderElement /> )
               :errorHandler ? (<ErrorHandler />)
               :calificaciones.length === 0 ? (<ErrorHandler />)
               : (
                calificaciones.map((calificacion) =>  (
                 <Calificacion key={calificacion.id_calificacion} data={calificacion}/>
                ))
           )}
       </div>
    );

};
export default Calificaciones; 