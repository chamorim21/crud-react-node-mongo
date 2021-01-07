import React, { useState } from "react";
import Axios from "../../plugins/axios";
import { initialState } from "./constant";
import { Table, Button } from "react-bootstrap";
import { ModalAction } from "./ModalAction";
import { formatDistance } from "date-fns";
import { clear, getUpdatedList, notify } from "./common";
import pt from "date-fns/locale/pt";
import { toast, Slide, ToastContainer } from "react-toastify";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getDataInWords = (dateOlder, language) => {
    const older = Date.parse(dateOlder);
    const dateNow = new Date();
    return formatDistance(older, dateNow, { locale: language });
  };

  const load = (user) => {
    props.handleParent.setUser(user);
  };

  const remove = (user) => {
    Axios.delete(`/${user._id}`).then((_) => {
      const list = getUpdatedList(user, props, false);
      props.handleParent.setList(list);
      clear(props, initialState);
      notify("Cadastro excluído com sucesso", "error", toast, Slide);
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
            <Button variant="danger" className="ml-2" onClick={handleShow}>
              <i className="fa fa-trash"></i>
            </Button>
          </td>
          <td style={{ width: "22%" }}>
            há {getDataInWords(user.createdAt, pt)}
          </td>
          <ModalAction
            func={remove}
            param={user}
            handleClose={handleClose}
            show={show}
            title="Confirmação de exclusão"
            subtitle="Deseja excluir esse registro?"
            action="Excluir"
            variant="danger"
          />
        </tr>
      );
    });
  };

  return (
    <Table striped bordered responsive className="mt-3">
      <ToastContainer limit={1} />
      <thead>
        <tr>
          <th style={{ width: "25%" }}>Nome</th>
          <th style={{ width: "40%" }}>E-mail</th>
          <th style={{ width: "10%" }}>Ações</th>
          <th style={{ width: "25%" }}>Criado</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </Table>
  );
};
