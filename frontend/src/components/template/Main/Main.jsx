import "./Main.css";
import React from "react";
import Header from "../Header/Header";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <React.Fragment>
      <Header {...props} />
      <main className="content container-fluid">
        <div className="p-3 mt-3 main">
          {props.children}
        </div>
      </main>
    </React.Fragment>
  );
};
