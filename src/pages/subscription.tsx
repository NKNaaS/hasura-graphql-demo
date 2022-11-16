import React from "react";
import { useMutation, useSubscription } from "urql";
import { graphql } from "../gql";

const document = graphql(`
  subscription SubscribeAllFiles {
    files: file(limit: 2, orderBy: { createdAt: DESC }) {
      id
      fileUrl
      fileThumbnailUrl
      createdAt
      updatedAt
    }
  }
`);

const createFileDocument = graphql(`
  mutation CreateFile($fileUrl: String!) {
    insertFileOne(object: { fileUrl: $fileUrl }) {
      id
      fileUrl
      fileThumbnailUrl
      createdAt
      updatedAt
    }
  }
`);

export default function Subscription() {
  const [result] = useSubscription({
    query: document,
  });

  const [uploadStatus, uploadFile] = useMutation(createFileDocument);

  const jsonStr = JSON.stringify(result.data, null, 2);

  return (
    <div style={{ fontSize: "3em" }}>
      {result.fetching ? "読み込み中..." : <pre>{jsonStr}</pre>}

      <button onClick={() => uploadFile({ fileUrl: "/dummy/file/url" })}>
        {uploadStatus.fetching ? "追加中..." : "ファイルを追加"}
      </button>
    </div>
  );
}
