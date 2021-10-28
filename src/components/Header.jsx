import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {setPage} from "../actions";
import pimeClickLogo from "../assets/images/logoPymeClick.png";
import "../assets/styles/components/Header.scss";

const Header = () =>{
   const pageActive = useSelector((state) => state.pageActive);
   const dispatch = useDispatch();
   const handleSetPage = (page) =>{
    dispatch(setPage(page));
   };
   return(
      <header>
          <figure>
              <img
              src={pimeClickLogo}
              alt="pymeclick logo"
              >
              </img>
          </figure>
          <nav>
              <ul>
                  <li
                  onClick={()=> handleSetPage("Empresas")}
                  ClassName={`header__nav__options-item ${
                      pageActive === "Empresas" ? "active" : ""
                  }`} 
                  >
                      <Link to="/">Empresas</Link>
                  </li>
              </ul>
              <ul>
                  <li
                  onClick={()=> handleSetPage("Calificaciones")}
                  ClassName={`header__nav__options-item ${
                      pageActive === "Calificaciones" ? "active" : ""
                  }`} 
                  >
                      <Link to="/calificaciones">Calificaciones</Link>
                  </li>
              </ul>
              <ul>
                  <li
                  onClick={()=> handleSetPage("ProductoServicios")}
                  ClassName={`header__nav__options-item ${
                      pageActive === "ProductoServicios" ? "active" : ""
                  }`} 
                  >
                      <Link to="/productos-servicios">Productos y Servicios</Link>
                  </li>
              </ul>
          </nav>
      </header>
   );
};

export default Header;