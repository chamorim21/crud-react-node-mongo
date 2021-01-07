import React from "react";
import Axios from "../../plugins/axios";
import { initialState } from "./constant";
import { clear, getUpdatedList, notify } from "./common";
import { toast, Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const save = () => {
    const user = props.state.user;
    if (!user.name || !user.email) return;

    const method = user._id ? "put" : "post";
    const url = user._id ? `/${user._id}` : "";
    Axios[method](url, user).then((resp) => {
      const list = getUpdatedList(resp.data, props);
      props.handleParent.setUser(initialState.user);
      props.handleParent.setList(list);
      if (method === "post")
        notify("Cadastro realizado com sucesso", "success", toast, Slide);
      if (method === "put")
        notify("Cadastro alterado com sucesso", "warning", toast, Slide);
    });
  };

  const updateField = (event) => {
    const user = { ...props.state.user };
    user[event.target.name] = event.target.value;
    props.handleParent.setUser(user);
  };

  return (
    <div className="form">
      <ToastContainer limit={1} />
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={props.state.user.name}
              onChange={updateField}
              placeholder="Digite o nome"
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={props.state.user.email}
              onChange={updateField}
              placeholder="Digite o e-mail"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="row d-flex">
        <div className="col-12 d-flex justify-content-end">
          <button className="btn btn-primary" onClick={save}>
            Salvar
          </button>
          <button
            className="btn btn-secondary ml-2"
            onClick={() => clear(props, initialState)}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
