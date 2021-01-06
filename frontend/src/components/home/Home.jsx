import React from "react";
import Main from "../template/Main/Main";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <Main
      icon="home"
      title="Início"
      subtitle="CRUD simples de usuários desenvolvido em ReactJS com Bootstrap + NodeJS com Express e MongoDB."
    >
      <h2>Bem vindo!</h2>
      <hr />
      <p className="mb-3">
        Sistema para exemplificar um cadastro simples de usuários desenvolvido
        em React com back-end em NodeJS, Express e MongoDB.
      </p>
    </Main>
  );
};
