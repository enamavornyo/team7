import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { useMutation } from "@apollo/react-hooks";

const MemberQuery = gql`
  query {
    churchMembers {
      firstName
      surName
      dob
      age
      registered
      id
    }
  }
`;

const CreateMemberMutation = gql`
  mutation($firstName: String, $surName: String, $dob: String, $age: Int) {
    createMember(
      firstName: $firstName
      surName: $surName
      dob: $dob
      age: $age
    ) {
      firstName
      surName
      dob
      age
    }
  }
`;

function AddMember() {
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [dob, setdob] = useState("");
  const [age, setAge] = useState();
  const [createMember, { error }] = useMutation(CreateMemberMutation, {
    variables: { firstName, surName, dob, age },
    refetchQueries: MemberQuery,
  });

  if (error) {
    console.log("fuck this!!!!", error);
  }

  return (
    <div>
      <input onChange={(e) => setFirstName(e.target.value)} />
      <input onChange={(e) => setSurName(e.target.value)} />
      <input onChange={(e) => setdob(e.target.value)} />
      <input onChange={(e) => setAge(e.target.valueAsNumber)} />

      <button onClick={createMember}>create</button>
    </div>
  );
}

export default graphql(CreateMemberMutation, { name: "createMember" })(
  AddMember
);
