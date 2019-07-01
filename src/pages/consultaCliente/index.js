import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";

import Logo from "../../assets/IndicaAi-logo.svg";

import { Container, Form} from "./styles";

import { FormularioSearch} from "../consultaAfiliado/FormularioSearch";

class consultaCliente extends Component{
    state ={
	    CPF:""
    };

    handleAddCliente = async e => {
        e.preventDefault();
        const { CPF } = this.state;
        if (!CPF){
            this.setState({ error: "Preencha todas as informações do cliente"});
        }else{
            try {
                const response = await api.post("/search/consultaCliente",{ CPF });
                    if(response.ok){
                        return("Cliente: ");
                    }
            }catch (err) {
                this.setState({
                    error:
                    "Houve um problema com a consulta do cliente, verifique as informações e tente novamente"
                });
            }
        }
    };
    
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
    render() {
        return (
        <Container>
        <Form>
          <img src={Logo} alt="IndicaAi Logo" ahref="/home"/>
          <button type="submit" onClick={this.handleCadastroCliente}>Cadastro Cliente</button>
          <button type="submit" onClick={this.handleCadastroAfiliado}>Cadastro Afiliado</button>
          <button type="submit" onClick={this.handleConsultaAfiliado}>Consulta Afiliado</button>
          <button type="submit" onClick={this.handleConsultaCliente}>Consulta Cliente</button>
          <Link to="/">Sair</Link>
        </Form>
        <FormularioSearch onSubmit={this.handleSearchAffiliate}>
              <p>Desculpe o transtorno.</p>
              <p>Este recurso ainda não está disponivel.</p>
          </FormularioSearch>
      </Container>
        )
    }
}

export default withRouter(consultaCliente);