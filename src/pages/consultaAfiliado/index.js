import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";

import Logo from "../../assets/IndicaAi-logo.svg";

import { Container, Form} from "./styles";

import { FormularioSearch } from './FormularioSearch.js';//Style form Formulario

class consultaAfiliado extends Component{
    
    state ={
      nameAffiliate:""
    };
    
    handleSearchAffiliate = async e => {
        e.preventDefault();
        const { nameAffiliate } = this.state;
        
        if (!nameAffiliate){
            return(alert("Preencha todas as informações do afiliado"));
        }else{
            try {
              const response = await api.post(`/search/consultaAfiliado?nameAffiliate=${nameAffiliate}`);

              const obj = response.data; 

              //const result = JSON.stringify(obj);

              console.log(obj);

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
      handleRedirectHome = async e => {
        e.preventDefault();
        this.props.history.push("/home");
      };
    render() {
        return (
        <Container>
        <Form>
          <img src={Logo} alt="IndicaAi Logo" onClick={this.handleRedirectHome}/>
          <button type="submit" onClick={this.handleCadastroCliente}>Cadastro Cliente</button>
          <button type="submit" onClick={this.handleCadastroAfiliado}>Cadastro Afiliado</button>
          <button type="submit" onClick={this.handleConsultaAfiliado}>Consulta Afiliado</button>
          <button type="submit" onClick={this.handleConsultaCliente}>Consulta Cliente</button>
        
          <Link to="/">Sair</Link>
        </Form>
          <FormularioSearch onSubmit={this.handleSearchAffiliate}>
            <input 
            type="text"
            placeholder="Nome do afiliado"
            onChange={e => this.setState({ nameAffiliate: e.target.value })}
            />
            
            <hr />
            
            <button type="submit">Buscar</button> 
          </FormularioSearch>
        </Container>
        )
    }
}

export default withRouter(consultaAfiliado);