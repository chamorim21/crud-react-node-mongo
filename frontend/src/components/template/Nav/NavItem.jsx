import React from "react";
import {Link} from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <Link className="button" to={`${props.to}`}>
      <i className={`fa fa-${props.icon}`}></i> {props.label}
    </Link>
  );
};
