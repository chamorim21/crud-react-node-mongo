import React, { Component } from "react";
import Main from "../template/Main/Main";
import Table from "./Table";
import Form from "./Form";
import axios from "axios";

const headerProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de usuários: incluir, listar, alterar e excluir.",
};

const baseUrl = "https://backend-crud-mern.herokuapp.com/users";

const initialState = {
  user: { name: "", email: "" },
  list: [],
};

export default class UserCrud extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  componentDidMount() {
    axios(baseUrl).then((resp) => this.setState({ list: resp.data }));
  }

  handleParent = (state) => {
    this.setState(state);
  };

  render() {
    return (
      <Main {...headerProps}>
        <Form state={this.state} handleParent={this.handleParent} />
        <Table state={this.state} handleParent={this.handleParent} />
      </Main>
    );
  }
}
