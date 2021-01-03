/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Main from "../template/Main/Main";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <Main icon="info-circle" title="Sobre" subtitle="Sobre o projeto">
      <h3>Informações sobre o projeto</h3>
      <hr />
      <p className="mb-0">
        Esse é um simples sistema criado baseado nas aulas do curso Web Moderno
        da Cod3r. <br /> As tecnologias utilizadas são ReactJS e Bootstrap no
        front-end juntamente com NodeJS, Express e MongoDB no back-end para persistir os dados.
      </p>
      <div>
        <ul class="list-group list-group-flush mt-5">
          <li class="list-group-item p-0 pb-3">
            Desenvolvedor: Cristiano Henrique Amorim
          </li>
          <li class="list-group-item p-0 pt-3">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/cristiano-amorim-262075126/"
            >
              LinkedIn
            </a>
            <a target="_blank" href="https://github.com/chamorim21">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </Main>
  );
};
