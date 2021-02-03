import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FormGroup, Input, Label } from 'reactstrap'
import Table from "./Table/index";
import axios from "axios";
import { Container, Button } from "reactstrap";

const User = () => {
  let baseUrl =
    "https://gorest.co.in/public-api/users?_format=json&access-token=nL6p7nrqP2ivDEKY7dtSEECsN0a7ehywZMaE";
  const [data, setData] = useState(null);
  const [color, setColor] = useState("#212529");

  const getUsers = async () => {
    await axios
      .get(baseUrl)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setColor(value);
  };

  return (
    <Container>
      <h5>Users List</h5>
      <Button color="primary" size="sm" onClick={() => getUsers()} style={{ margin: "5px" }}>
        GET USERS
      </Button>
      {data ?
        <FormGroup>
          <Label>Set Color</Label>
          <Input
            style={{ margin: "5px" }}
            type="color"
            name="color"
            id="color"
            onChange={handleChange}
            value={color}
            placeholder="Select Color"
          />
          <Table data={data} color={color} />
        </FormGroup>
        : null}
    </Container>
  );
};
export default User;
