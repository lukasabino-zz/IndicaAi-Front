import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";

import Logo from "../../assets/IndicaAi-logo.svg";

import { Container, Form} from "./styles";

import {FormularioSearch} from './FormularioSearch.js';//Style form Formulario

class consultaAfiliado extends Component{
    state ={
      nameAffiliate:"",
      emailAffiliate:"",
      numberPhoneAffiliate: "",
      nameCliente:""
    };

    handleSearchAffiliate = async e => {
        e.preventDefault();
        const { CPF, afiliado} = this.state;
        if (!CPF){
            return(alert("Preencha todas as informações do afiliado"));
        }else{
            try {
              const response = await api.get("/search/consultaAfiliado",{ CPF });
              console.log(response);
              return(alert(
                response.data[afiliado]
              ));
            }catch (err) {
              console.log(err);
              return(alert("Houve um erro, tente novamente."));
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
            <input 
            type="number"
            placeholder="Nome do afiliado"
            onChange={e => this.setState({ CPF: e.target.value })}
            />
            <hr />
            <button type="submit">Buscar</button> 

            <ul> 
              
            </ul>
          </FormularioSearch>
        </Container>
        )
    }
}

export default withRouter(consultaAfiliado);