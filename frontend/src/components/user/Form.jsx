import React, { Component } from "react";
import axios from "axios";

const baseUrl = "http://localhost:3001/users";

const initialState = {
  user: { name: "", email: "" },
  list: [],
};

export default class Form extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  clear() {
    this.props.handleParent({ user: initialState.user });
  }

  getUpdatedList(user, add = true) {
    const list = this.props.state.list.filter((u) => u._id !== user._id);
    if (add) list.unshift(user);
    return list;
  }

  save() {
    const user = this.props.state.user;
    console.log(user)
    if (user.email === "" || user.name === "") return;

    const method = user._id ? "put" : "post";
    const url = user._id ? `${baseUrl}/${user._id}` : baseUrl;

    axios[method](url, user).then((resp) => {
      const list = this.getUpdatedList(resp.data);
      this.props.handleParent({ user: initialState.user, list });
    });
  }

  updateField(event) {
    const user = { ...this.props.state.user };
    user[event.target.name] = event.target.value;
    this.props.handleParent({ user });
  }

  render() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="">Nome</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.props.state.user.name}
                onChange={(e) => this.updateField(e)}
                placeholder="Digite o nome..."
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={this.props.state.user.email}
                onChange={(e) => this.updateField(e)}
                placeholder="Digite o email..."
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-success" onClick={(e) => this.save(e)}>
              Salvar
            </button>
            <button
              className="btn btn-primary ml-2"
              onClick={(e) => this.clear(e)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  }
}
