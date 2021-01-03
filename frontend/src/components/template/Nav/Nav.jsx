import "./Nav.css";
import React from "react";
import NavItem from "./NavItem";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <aside className="menu-area">
      <div className="first">
        <NavItem to="/" icon="home" label="Início" />
        <NavItem to="/users" icon="users" label="Usuários" />
      </div>
      <div className="about">
        <NavItem to="/about" icon="info-circle" label="Sobre" />
      </div>
    </aside>
  );
};
