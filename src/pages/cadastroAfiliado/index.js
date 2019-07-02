import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";

import Logo from "../../assets/IndicaAi-logo.svg";

import { Container, Form} from "./styles";

import { Formulario } from "./styleFormulario";

class cadastroAfiliado extends Component{
    
    state ={
    nameAffiliate:"",
    emailAffiliate:"",
    numberPhoneAffiliate:"",
    nameCliente:""
    };

    
    handleAddAfiliado = async (e) => {
        e.preventDefault();
        const { nameAffiliate, emailAffiliate, numberPhoneAffiliate, nameCliente } = this.state;
        if (!nameAffiliate || !emailAffiliate || !numberPhoneAffiliate || !nameCliente){
            return(alert("Preencha todas as informações do afiliado."));
        }else{
            try {
                const response = await api.post("/create/cadastroAfiliado",{ nameAffiliate, emailAffiliate, numberPhoneAffiliate, nameCliente });
                console.log(response);
                return(alert("Afiliado adicionado!"));
            }catch (err) {
                return(alert("Afiliado ja cadastrado."));
            }
        }
      };

      handleApagarForm = async e =>{
        e.preventDefault();
        setInterval(170);
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("numero").value = "";
        document.getElementById("nomeCliente").value = "";
      }
  
    
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
        <Formulario onSubmit={this.handleAddAfiliado} >
          <input
            type="text"
            placeholder="Nome"
            id="nome"
            onChange={e => this.setState({ nameAffiliate: e.target.value })}
          />
          <input
            type="email"
            placeholder="E-Mail"
            id="email"
            onChange={e => this.setState({ emailAffiliate: e.target.value })}
          />
          <input
            type="number"
            placeholder="(xx)xx-xx-xx-xx"
            id="numero"
            onChange={e => this.setState({ numberPhoneAffiliate: e.target.value })}
          />
          <input
            type="text"
            placeholder="Nome do cliente"
            id="nomeCliente"
            onChange={e => this.setState({ nameCliente: e.target.value })}
          />
          <hr />
          <button type="submit" >Salvar</button>

          <button type="submit" onClick={this.handleApagarForm}>Limpar</button>
        </Formulario>
      </Container>
        )
    }
}

export default withRouter(cadastroAfiliado);