import { useState } from "react";

export function useLocalStorage(key, initialValue){
     const [storedValue, setSoredValue] = useState(() => {
         try{
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(key) : initialValue;
         }catch(err){
             console.log(err);
             return initialValue;
         }
     });

     const setValue = (value) => {
         try {
             setSoredValue(value);
             window.localStorage.setItem(key, JSON.stringify(value));
         }catch(err){
            console.log(err);
             
        }
     };

     return [storedValue, setValue]; 
};