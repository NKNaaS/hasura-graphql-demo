/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query GetAllUser {\n    users: user {\n      id\n      name\n      todos {\n        id\n        content\n      }\n    }\n  }\n": types.GetAllUserDocument,
};

export function graphql(source: "\n  query GetAllUser {\n    users: user {\n      id\n      name\n      todos {\n        id\n        content\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllUser {\n    users: user {\n      id\n      name\n      todos {\n        id\n        content\n      }\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;