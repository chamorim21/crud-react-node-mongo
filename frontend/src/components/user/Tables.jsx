import React from "react";
import Axios from "../../plugins/axios";
import { initialState } from "./constant";
import { Table, Button } from "react-bootstrap";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
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
    });
  };

  const renderRows = () => {
    return props.state.list.map((user) => {
      return (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
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
        </tr>
      );
    });
  };

  return (
    <Table striped bordered hover className="mt-3">
      <thead>
        <tr>
          <th className="w-25">Nome</th>
          <th className="w-50">E-mail</th>
          <th className="w-25">Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </Table>
  );
};
