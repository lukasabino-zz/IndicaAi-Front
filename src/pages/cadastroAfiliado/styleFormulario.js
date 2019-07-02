import styled from "styled-components";

export const ContainerFormulario = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ddd;
  
`;
export const Formulario = styled.form`
  input{
  flex: 1;
  height: 40px;
  margin-bottom: 0;
  padding: 15px;
  color: #777;
  font-size: 19px;
  width: 530px;
  border: 1px solid #ddd;
  border-radius: 5px;
  &::placeholder{
      color: #999;
      }
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #14E5FF;
    height: 40px;
    border: 5px;
    border-radius: 5px;
    width: 560px;
  }
`;