import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #ddd;
`;
export const Form = styled.form`
  width: 100px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  button {
    color: #fff;
    font-size: 16px;
    background: #14E5FF;
    height: 56px;
    border: 1;
    border-radius: 5px;
    width: 100px;
  }
  img {
    width: 110px;
    border: 10px;
    padding: 0px;
    margin-top: 0;
    margin-right: 100%;
  }
  hr {
    margin-top: 300px;
    margin: 20px 0;
    border: 5px;
    border-bottom: 1px solid #cdcdcd;
    width: 50px;
  }
  a {
    padding: 30px;
    border: 7px;
    margin-top: 600%;
    font-size: 50;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
`;

