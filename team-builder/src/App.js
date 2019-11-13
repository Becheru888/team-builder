import React, { useState } from "react";
import "./App.css";
import Member from "./components/member";
import Form from "./components/form";

let id = 0;

const membersDta = [
  { name: "Remi", email: "remi@gmail.com", role: "FE Developer" }
];

function App() {
  const [members, setMembers] = useState([
    {
      name: "",
      email: "",
      role: ""
    }
  ]);

  const [memberToEdit, setMemberToEdit] = useState([
    {
      name: "",
      email: "",
      role: ""
    }
  ]);

  function onChange(e) {
    setMembers({
      ...members,
      [e.target.name]: e.target.value
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    membersDta.push(members);
    setMembers({ name: "", email: "", role: "" });
  }

  return (
    <div className="App">
      {membersDta.map(member => (
        <Member data={member} key={id++} />
      ))}
      <Form
        handleChange={onChange}
        hendleSubmit={onSubmit}
        memberState={members}
        data={members}
        edit={memberToEdit}
      />
    </div>
  );
}

export default App;
