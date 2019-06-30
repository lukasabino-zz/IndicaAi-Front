import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";

import Logo from "../../assets/IndicaAi-logo.svg";

import { Container, Form} from "./styles";

<<<<<<< HEAD
import {FormularioSearch} from './FormularioSearch.js';//Style form Formulario
=======
import {FormularioSearch} from './FormularioSearch.js';
>>>>>>> 6006fbf786f38f31684a5f0a10cf118ce9491b2a

class consultaAfiliado extends Component{
    state ={
      nameAffiliate:"",
      emailAffiliate:"",
      numberPhoneAffiliate: "",
      nameCliente:""
    };

    handleSearchAffiliate = async e => {
        e.preventDefault();
<<<<<<< HEAD
        const { nameAffiliate, afiliado} = this.state;
=======
        const { nameAffiliate, emailAffiliate, numberPhoneAffiliate, nameCliente} = this.state;
>>>>>>> 6006fbf786f38f31684a5f0a10cf118ce9491b2a
        if (!nameAffiliate){
            return(alert("Preencha todas as informações do afiliado"));
        }else{
            try {
<<<<<<< HEAD
              const response = await api.get("/search/consultaAfiliado",{ nameAffiliate });
              console.log(response);
              return(alert(
                response.data[afiliado]
              ));
            }catch (err) {
              console.log(err);
=======
                const response = await api.get("/search/consultaAfiliado",{ nameAffiliate, emailAffiliate, numberPhoneAffiliate, nameCliente });
              return(console.log([
                response,
                nameAffiliate,
                emailAffiliate,
                numberPhoneAffiliate,
                nameCliente
              ]));
            }catch (err) {
>>>>>>> 6006fbf786f38f31684a5f0a10cf118ce9491b2a
              return(alert("Houve um erro, tente novamente."));
            }
        }
    };
<<<<<<< HEAD
  
      handleCadastroCliente = async e => {
=======
    
    handleCadastroCliente = async e => {
>>>>>>> 6006fbf786f38f31684a5f0a10cf118ce9491b2a
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
            type="text"
            placeholder="Nome do afiliado"
            onChange={e => this.setState({ nameAffiliate: e.target.value })}
            />
            <hr />
            <button type="submit">Buscar</button> 
<<<<<<< HEAD

            <ul> 
              
            </ul>
=======
>>>>>>> 6006fbf786f38f31684a5f0a10cf118ce9491b2a
          </FormularioSearch>
        </Container>
        )
    }
}

export default withRouter(consultaAfiliado);