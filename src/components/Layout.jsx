import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import CalificacionContainer from "../containers/CalificacionContainer";
import ProductoServicioContainer from "../containers/ProductoServicioContainer";
import EmpresaContainer from "../containers/EmpresaContainer";
import { useSelector } from "react-redux";
import "../assets/styles/components/Layout.scss";

const Layout = () => {
    const page = useSelector((state) => state.pageActive);
    return (
        <div>
            <Header/>
                {page === "Calificaciones" ? <CalificacionContainer/> : <div></div>}
                {page === "ProductoServicios"  ?<ProductoServicioContainer/> : <div></div>}
                {page === "Empresas"  ? <EmpresaContainer/> : <div></div>}
            <Footer/>
        </div>
    );
}
export default Layout;