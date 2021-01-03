import "./Logo.css";
import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <aside className="logo">
      <Link to="/" className="logo">
        <img
          src="https://infojrufba.github.io/guias/crud/assets/img/crud.png"
          alt="Logo"
        />
      </Link>
    </aside>
  );
};
