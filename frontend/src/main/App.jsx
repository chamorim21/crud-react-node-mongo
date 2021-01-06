import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

import Logo from "../components/template/Logo/Logo";
import Nav from "../components/template/Nav/Nav";
import Footer from "../components/template/Footer/Footer";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <BrowserRouter>
      <div className="app">
        <Logo />
        <Nav />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
};
