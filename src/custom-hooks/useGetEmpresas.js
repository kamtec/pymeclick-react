import axios from "axios";
import {useState} from "react";
import { useLocalStorage } from "./useLocalStorage";

const useGetEmpresas = () =>{
    const [empresas, setEmpresas] = useLocalStorage("empresas","");
    const [load, SetLoad] = useState(true);
    const [errorHandler, SetErrorHandler] = useState(false);

    async function getEmpresas(){
        try{
           const empresasResponse = await axios.get("https://pymeclick.herokuapp.com/empresa");
           const empresaResult = empresasResponse.data
           setEmpresas(empresaResult);
           SetLoad(false);
           SetErrorHandler(false);
        } catch (errorHandler) {
           SetLoad(true);
           SetErrorHandler(errorHandler);
        }
   };

   return { empresas, load,errorHandler, getEmpresas }

};
export default useGetEmpresas;