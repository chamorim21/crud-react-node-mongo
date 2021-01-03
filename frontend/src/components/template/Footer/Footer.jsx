/* eslint-disable react/jsx-no-target-blank */
import "./Footer.css";
import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <footer className="footer">
      <span>
        Desenvolvido com <i className="fa fa-heart text-danger"></i> por
        <strong>
          {" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/cristiano-amorim-262075126/"
          >
            C. Amorim
          </a>
        </strong>
      </span>
    </footer>
  );
};
