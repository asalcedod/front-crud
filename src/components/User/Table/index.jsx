import { Table } from "reactstrap";
import React, { useState } from "react";
import "./table.css";

const CRUD = ({ data }) => {
  const [color, setColor] = useState("");

  const renderData = (dataList) => {
    const renderUser = (user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      );
    };
    return dataList.map(renderUser);
  };

  return (
    <Table dark bordered>
      <thead>
        <tr style={{backgroundColor: color}}>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>{renderData(data)}</tbody>
    </Table>
  );
};

export default CRUD;
