import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Logo from "../../assets/IndicaAi-logo.svg";

import { Container, Form } from './styles';

class home extends Component{
  handleCadastroCliente = async e => {
    e.preventDefault();
    this.props.history.push("/cadastroCliente");
  };
  handleCadastroAfiliado = async e => {
    e.preventDefault();
    this.props.history.push("/cadastroAfiliado");
  };
  handleConsultaCliente = async e => {
    e.preventDefault();
    this.props.history.push("/consultaCliente");
  };
  handleConsultaAfiliado = async e => {
    e.preventDefault();
    this.props.history.push("/consultaAfiliado");
  };
  render(){
    return(
      <Container>
        <Form>
          <img src={Logo} alt="IndicaAi Logo"/>
          <button type="submit" onClick={this.handleCadastroCliente}>Cadastro Cliente</button>
          <button type="submit" onClick={this.handleCadastroAfiliado}>Cadastro Afiliado</button>
          <button type="submit" onClick={this.handleConsultaAfiliado}>Consulta Afiliado</button>
          <button type="submit" onClick={this.handleConsultaCliente}>Consulta Cliente</button>

          <Link to="/">Sair</Link>
        </Form>
      </Container>
    );
  }
}
export default withRouter(home);