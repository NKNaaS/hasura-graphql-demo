import { setTimeout } from "timers/promises";
import type { NextApiRequest, NextApiResponse } from "next";

import { createClient } from "@urql/core";
import { graphql } from "../../gql";

const client = createClient({
  url: "http://localhost:8080/v1/graphql",
});

const document = graphql(`
  mutation AddThumbnail($id: Int!, $fileThumbnailUrl: String!) {
    updateFileByPk(
      _set: { fileThumbnailUrl: $fileThumbnailUrl }
      pk_columns: { id: $id }
    ) {
      id
      fileUrl
      fileThumbnailUrl
      createdAt
      updatedAt
    }
  }
`);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await setTimeout(3000);

  await client
    .mutation(document, {
      id: req.body.fileId,
      fileThumbnailUrl: "/dummy/thumbnail/url",
    })
    .toPromise();

  res.status(200).json({ ok: true });
}
