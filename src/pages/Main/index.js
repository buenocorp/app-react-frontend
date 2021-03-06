import React, { Component } from "react";
import "./styles.css";
import logo from "../../assets/logo.svg";
import api from "../../services/api";

import { Container} from "./styles";


export default class Main extends Component {
  //sempre usar state
  state = { newBox: "" };

  handleSubmit = async e => {
    e.preventDefault();

    const response = await api.post("boxes", {
      title: this.state.newBox
    });

    //history serve para navegar o usuário para alguma tela
    this.props.history.push(`/box/${response.data._id}`);
  };

  handleInputChange = e => {
    this.setState({ newBox: e.target.value });
  };

  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <img src={logo} alt="" />
          <input
            placeholder="Criar um box"
            value={this.state.newBox}
            onChange={this.handleInputChange}
          />
          <button type="submit">Criar</button>
        </form>
      </Container>
    );
  }
}
