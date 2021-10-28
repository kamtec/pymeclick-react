import axios from "axios";
import {useState} from "react";
import { useLocalStorage } from "./useLocalStorage";

const useGetCalificaciones = () =>{
    const [calificaciones, setCalificaciones] = useLocalStorage("calificaciones","");
    const [load, SetLoad] = useState(true);
    const [errorHandler, SetErrorHandler] = useState(false);

    async function getCalificaciones(){
         try{
            const calificacionesResponse = await axios.get("https://pymeclick.herokuapp.com/calificacion");
            const calificacionesResult = calificacionesResponse.data
            setCalificaciones(calificacionesResult);
            SetLoad(false);
            SetErrorHandler(false);
            console.log(calificacionesResult);
         } catch (errorHandler) {
            SetLoad(true);
            SetErrorHandler(errorHandler);
            console.log(errorHandler);
         }
    };
    return { calificaciones, load,errorHandler, getCalificaciones }
};
export default useGetCalificaciones;