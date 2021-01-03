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
      <div className="display-4">Bem vindo!</div>
      <hr />
      <p className="mb-3">
        Sistema para exemplificar um cadastro simples de usuários desenvolvido
        em React com back-end em NodeJS, Express e MongoDB.
      </p>
      <div className="img">
        <img
          src="https://codingthesmartway.com/wp-content/uploads/2019/01/mern_logo.png"
          alt=""
        />
      </div>
    </Main>
  );
};
