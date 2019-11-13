import React from "react";
import styled from "styled-components";

function Member(props) {


  return (
    <Card>
      <p><strong>Name: </strong>{props.data.name}</p>
      <p><strong>Email: </strong> {props.data.email}</p>
      <p><strong>Role: </strong> {props.data.role}</p>
      <button onClick={props.edit}>Edit</button>
    </Card>
  );
}

export default Member;

const Card = styled.div`
  padding: 10px;
  margin: 20px auto;
  width: 30%;
  background-color: lightblue;
  box-shadow:2px 2px 1px 1px;

`;
