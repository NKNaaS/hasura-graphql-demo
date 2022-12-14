import React from "react";
import { useQuery, useSubscription } from "urql";
import { graphql } from "../gql";

const document = graphql(/* GraphQL */ `
  subscription GetAllUser {
    users: user {
      id
      name
      todos {
        id
        content
      }
    }
  }
`);

export default function Demo() {
  const [result] = useSubscription({
    query: document,
  });

  const jsonStr = JSON.stringify(result.data, null, 2);

  return (
    <div style={{ fontSize: "3em" }}>
      {result.fetching ? "読み込み中..." : <pre>{jsonStr}</pre>}
    </div>
  );
}
