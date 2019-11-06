import React from "react";
import { Query, ApolloConsumer } from "react-apollo";
import { gql } from "apollo-boost";

import Person from "./Person";

const ALL_PERSONS = gql`
  {
    allPersons {
      name
      phone
      id
    }
  }
`;

const App = () => {
  return (
    <ApolloConsumer>
      {client => (
        <Query query={ALL_PERSONS}>
          {result => <Person result={result} client={client} />}
        </Query>
      )}
    </ApolloConsumer>
  );
};

export default App;
