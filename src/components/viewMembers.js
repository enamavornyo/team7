import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const adultsQuery = gql`
  {
    adults {
      surName
      firstName
      id
    }
  }
`;

function Member(props) {
  const {
    data: { loading, adults },
  } = props;
  if (loading) {
    return "loading...";
  }
  return (
    <div>
      <div>{}</div>
    </div>
  );
}

export default graphql(adultsQuery)(Member);
