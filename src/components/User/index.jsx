import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Table from "./Table/index";
import axios from "axios";
import { Container, Button } from "reactstrap";

const User = () => {
  let baseUrl =
    "https://gorest.co.in/public-api/users?_format=json&access-token=nL6p7nrqP2ivDEKY7dtSEECsN0a7ehywZMaE";
  const [data, setData] = useState(null);

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

  return (
    <Container>
      <h5>Users List</h5>
      <Button color="primary" size="sm" onClick={() => getUsers()} style={{margin: "5px"}}>
        GET USERS
      </Button>
      {data ? <Table data={data} /> : null}
    </Container>
  );
};
export default User;
