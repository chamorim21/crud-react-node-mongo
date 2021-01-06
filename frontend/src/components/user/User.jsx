import React, { useState, useEffect } from "react";
import Axios from "../../plugins/axios";
import Main from "../template/Main/Main";
import Forms from "./Forms";
import Tables from "./Tables";
import { headerProps } from "./constant";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [user, setUser] = useState({ name: "", email: "" });
  const [list, setList] = useState([]);

  useEffect(() => {
    Axios().then((resp) => {
      const updatedList = resp.data.sort((a, b) => {
        const dateA = Date.parse(a.createdAt);
        const dateB = Date.parse(b.createdAt);

        return dateB - dateA;
      });
      setList(updatedList);
    });
  }, []);

  return (
    <Main {...headerProps}>
      <Forms state={{ user, list }} handleParent={{ setUser, setList }} />
      <Tables state={{ user, list }} handleParent={{ setUser, setList }} />
    </Main>
  );
};
