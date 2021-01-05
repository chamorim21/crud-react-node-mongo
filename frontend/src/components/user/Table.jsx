import React, { Component } from "react";
import axios from "axios";
import "./Table.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseUrl = "https://backend-crud-mern.herokuapp.com/users";

export default class Table extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  getUpdatedList(user, add = true) {
    const list = this.props.state.list.filter((u) => u._id !== user._id);
    if (add) list.unshift(user);
    return list;
  }

  load(user) {
    this.props.handleParent({ user });
  }

  remove(user) {
    axios.delete(`${baseUrl}/${user._id}`).then((resp) => {
      const list = this.getUpdatedList(user, false);
      this.props.handleParent({ list });
    });

    const notify = () => toast.error("Cadastro excluído com sucesso.");
    notify();
  }

  renderRows() {
    return this.props.state.list.map((user) => {
      return (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <button
              className="btn btn-warning"
              onClick={(e) => this.load(user)}
            >
              <i className="fa fa-pencil"></i>
            </button>
            <button
              className="btn btn-danger ml-2"
              onClick={(e) => this.remove(user)}
            >
              <ToastContainer />
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table className="table table-striped mt-4">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">E-mail</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>{this.renderRows()}</tbody>
      </table>
    );
  }
}
