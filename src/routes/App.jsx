import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CalificacionContainer from "../containers/CalificacionContainer";
import EmpresaContainer from "../containers/EmpresaContainer";
import ProductoServicioContainer from "../containers/ProductoServicioContainer";
import Layout from "../components/Layout";
const App = () => (
        <BrowserRouter>
        <Layout>
          <Switch>
             <Route exact path="/" componenet={EmpresaContainer}/>
             <Route exact path="/productos-servicios" componenet={ProductoServicioContainer}/>
             <Route exact path="/calificaciones" componenet={CalificacionContainer}/>
          </Switch>
          </Layout>
          </BrowserRouter>
);
export default App;