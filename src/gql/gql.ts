/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  mutation AddThumbnail($id: Int!, $fileThumbnailUrl: String!) {\n    updateFileByPk(\n      _set: { fileThumbnailUrl: $fileThumbnailUrl }\n      pk_columns: { id: $id }\n    ) {\n      id\n      fileUrl\n      fileThumbnailUrl\n      createdAt\n      updatedAt\n    }\n  }\n": types.AddThumbnailDocument,
    "\n  query GetUsers {\n    user {\n      id\n      name\n    }\n  }\n": types.GetUsersDocument,
    "\n  subscription GetAllUser {\n    users: user {\n      id\n      name\n      todos {\n        id\n        content\n      }\n    }\n  }\n": types.GetAllUserDocument,
    "\n  subscription SubscribeAllFiles {\n    files: file(limit: 2, orderBy: { createdAt: DESC }) {\n      id\n      fileUrl\n      fileThumbnailUrl\n      createdAt\n      updatedAt\n    }\n  }\n": types.SubscribeAllFilesDocument,
    "\n  mutation CreateFile($fileUrl: String!) {\n    insertFileOne(object: { fileUrl: $fileUrl }) {\n      id\n      fileUrl\n      fileThumbnailUrl\n      createdAt\n      updatedAt\n    }\n  }\n": types.CreateFileDocument,
};

export function graphql(source: "\n  mutation AddThumbnail($id: Int!, $fileThumbnailUrl: String!) {\n    updateFileByPk(\n      _set: { fileThumbnailUrl: $fileThumbnailUrl }\n      pk_columns: { id: $id }\n    ) {\n      id\n      fileUrl\n      fileThumbnailUrl\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation AddThumbnail($id: Int!, $fileThumbnailUrl: String!) {\n    updateFileByPk(\n      _set: { fileThumbnailUrl: $fileThumbnailUrl }\n      pk_columns: { id: $id }\n    ) {\n      id\n      fileUrl\n      fileThumbnailUrl\n      createdAt\n      updatedAt\n    }\n  }\n"];
export function graphql(source: "\n  query GetUsers {\n    user {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query GetUsers {\n    user {\n      id\n      name\n    }\n  }\n"];
export function graphql(source: "\n  subscription GetAllUser {\n    users: user {\n      id\n      name\n      todos {\n        id\n        content\n      }\n    }\n  }\n"): (typeof documents)["\n  subscription GetAllUser {\n    users: user {\n      id\n      name\n      todos {\n        id\n        content\n      }\n    }\n  }\n"];
export function graphql(source: "\n  subscription SubscribeAllFiles {\n    files: file(limit: 2, orderBy: { createdAt: DESC }) {\n      id\n      fileUrl\n      fileThumbnailUrl\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  subscription SubscribeAllFiles {\n    files: file(limit: 2, orderBy: { createdAt: DESC }) {\n      id\n      fileUrl\n      fileThumbnailUrl\n      createdAt\n      updatedAt\n    }\n  }\n"];
export function graphql(source: "\n  mutation CreateFile($fileUrl: String!) {\n    insertFileOne(object: { fileUrl: $fileUrl }) {\n      id\n      fileUrl\n      fileThumbnailUrl\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation CreateFile($fileUrl: String!) {\n    insertFileOne(object: { fileUrl: $fileUrl }) {\n      id\n      fileUrl\n      fileThumbnailUrl\n      createdAt\n      updatedAt\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;