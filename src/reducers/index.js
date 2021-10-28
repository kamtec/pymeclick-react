const reducers = (state, action) => {
    switch(action.type){
        case "SET_PAGE":
            return {
              ...state,
              pageActive : action.payload,
            };
                case "SET_EMPRESA":
                    return {
                      ...state,
                      empresas : [...state.empresas, action.payload],
                    };
               case "DELETE_EMPRESA":
                   return{
                       ...state,
                       empresas: state.empresas.filter(
                        (items) => items.data.id_empresa !== action.payload,
                       ),
                   };
                    case "SET_CALIFICACION":
                        return {
                          ...state,
                          calificaciones : [...state.calificaciones, action.payload],
                        };
                   case "DELETE_CALIFICACION":
                       return{
                           ...state,
                           calificaciones: state.calificaciones.filter(
                            (items) => items.data.id_calificacion !== action.payload,
                           ),
                       };
                       case "SET_PRODUCTOSERVICIO":
                        return {
                          ...state,
                          producto_servicios : [...state.producto_servicios, action.payload],
                        };
                   case "DELETE_PRODUCTOSERVICIO":
                       return{
                           ...state,
                           producto_servicios: state.producto_servicios.filter(
                            (items) => items.data.id_prod_serv !== action.payload,
                           ),
                       };
                   default:
                    return state;
    }
}
export default reducers;