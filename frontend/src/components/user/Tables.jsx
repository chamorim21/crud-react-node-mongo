import React from "react";
import Axios from "../../plugins/axios";
import { initialState } from "./constant";
import { Table, Button } from "react-bootstrap";
import { formatDistance } from "date-fns";
import pt from "date-fns/locale/pt";
import { ToastContainer, toast, Slide } from "react-toastify";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const notify = () =>
    toast.error("Cadastro excluído com sucesso.", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      transition: Slide,
    });

  const clear = () => {
    props.handleParent.setUser(initialState.user);
  };

  const getUpdatedList = (user, add = true) => {
    const list = props.state.list.filter((u) => u._id !== user._id);
    if (add) list.unshift(user);
    return list;
  };

  const load = (user) => {
    props.handleParent.setUser(user);
  };

  const remove = (user) => {
    Axios.delete(`/${user._id}`).then((_) => {
      const list = getUpdatedList(user, false);
      props.handleParent.setList(list);
      clear();
      notify();
    });
  };

  const renderRows = () => {
    return props.state.list.map((user) => {
      return (
        <tr key={user._id}>
          <td style={{ width: "25%" }}>{user.name}</td>
          <td style={{ width: "40%" }}>{user.email}</td>
          <td style={{ width: "13%" }}>
            <Button variant="warning" onClick={() => load(user)}>
              <i className="fa fa-pencil"></i>
            </Button>
            <Button
              variant="danger"
              className="ml-2"
              onClick={() => remove(user)}
            >
              <i className="fa fa-trash"></i>
            </Button>
          </td>
          <td style={{ width: "22%" }}>
            há{" "}
            {formatDistance(Date.parse(user.createdAt), Date.now(), {
              locale: pt,
            })}
          </td>
        </tr>
      );
    });
  };

  return (
    <Table striped bordered className="mt-3">
      <ToastContainer />
      <thead>
        <tr>
          <th style={{ width: "25%" }}>Nome</th>
          <th style={{ width: "40%" }}>E-mail</th>
          <th style={{ width: "13%" }}>Ações</th>
          <th style={{ width: "22%" }}>Criado</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </Table>
  );
};
