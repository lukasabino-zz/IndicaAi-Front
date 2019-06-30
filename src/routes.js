import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";
import SignUp from "./pages/SignUp";//Importa a Aba de registro, para o redirecionamento.
import SignIn from "./pages/SignIn";//Importa a Aba de login.
import Home from "./pages/home";//Aba principal
import cadastroCliente from "./pages/cadastroCliente";//Cadastro Cliente
import cadastroAfiliado from "./pages/cadastroAfiliado";//Cadastro Afiliado
import consultaCliente from "./pages/consultaCliente";
import consultaAfiliado from "./pages/consultaAfiliado";


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <PrivateRoute path="/home" component={Home} />
      <PrivateRoute path="/cadastroCliente" component={cadastroCliente} />
      <PrivateRoute path="/cadastroAfiliado" component={cadastroAfiliado} />
      <PrivateRoute path="/consultaCliente" component={consultaCliente} />
      <PrivateRoute path="/consultaAfiliado" component={consultaAfiliado} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
