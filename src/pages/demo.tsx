import React from "react";
import { useQuery } from "urql";
import { graphql } from "../gql";

const document = graphql(/* GraphQL */ `
  query Q {
    no_queries_available
  }
`);

export default function Demo() {
  const [result] = useQuery({
    query: document,
  });

  const jsonStr = JSON.stringify(result.data, null, 2);

  return (
    <div style={{ fontSize: "3em" }}>
      {result.fetching ? "読み込み中..." : <pre>{jsonStr}</pre>}
    </div>
  );
}
