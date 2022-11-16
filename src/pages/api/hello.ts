// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { createClient } from "@urql/core";
import { graphql } from "../../gql";
import { GetUsersQuery } from "../../gql/graphql";

const client = createClient({
  url: "http://localhost:8080/v1/graphql",
});

const document = graphql(/* GraphQL */ `
  query GetUsers {
    user {
      id
      name
    }
  }
`);

type Data = GetUsersQuery["user"];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const result = await client.query(document, {}).toPromise();

  res.status(200).json(result.data?.user ?? []);
}
