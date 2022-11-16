/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "file" */
export type File = {
  __typename?: 'File';
  createdAt: Scalars['timestamptz'];
  fileThumbnailUrl?: Maybe<Scalars['String']>;
  fileUrl: Scalars['String'];
  id: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "file" */
export type FileAggregate = {
  __typename?: 'FileAggregate';
  aggregate?: Maybe<FileAggregateFields>;
  nodes: Array<File>;
};

/** aggregate fields of "file" */
export type FileAggregateFields = {
  __typename?: 'FileAggregateFields';
  avg?: Maybe<FileAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<FileMaxFields>;
  min?: Maybe<FileMinFields>;
  stddev?: Maybe<FileStddevFields>;
  stddevPop?: Maybe<FileStddev_PopFields>;
  stddevSamp?: Maybe<FileStddev_SampFields>;
  sum?: Maybe<FileSumFields>;
  varPop?: Maybe<FileVar_PopFields>;
  varSamp?: Maybe<FileVar_SampFields>;
  variance?: Maybe<FileVarianceFields>;
};


/** aggregate fields of "file" */
export type FileAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<FileSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type FileAvgFields = {
  __typename?: 'FileAvgFields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "file". All fields are combined with a logical 'AND'. */
export type FileBoolExp = {
  _and?: InputMaybe<Array<FileBoolExp>>;
  _not?: InputMaybe<FileBoolExp>;
  _or?: InputMaybe<Array<FileBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  fileThumbnailUrl?: InputMaybe<StringComparisonExp>;
  fileUrl?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "file" */
export enum FileConstraint {
  /** unique or primary key constraint on columns "id" */
  FilePkey = 'file_pkey'
}

/** input type for incrementing numeric columns in table "file" */
export type FileIncInput = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "file" */
export type FileInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  fileThumbnailUrl?: InputMaybe<Scalars['String']>;
  fileUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type FileMaxFields = {
  __typename?: 'FileMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  fileThumbnailUrl?: Maybe<Scalars['String']>;
  fileUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type FileMinFields = {
  __typename?: 'FileMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  fileThumbnailUrl?: Maybe<Scalars['String']>;
  fileUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "file" */
export type FileMutationResponse = {
  __typename?: 'FileMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<File>;
};

/** on_conflict condition type for table "file" */
export type FileOnConflict = {
  constraint: FileConstraint;
  update_columns?: Array<FileUpdateColumn>;
  where?: InputMaybe<FileBoolExp>;
};

/** Ordering options when selecting data from "file". */
export type FileOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  fileThumbnailUrl?: InputMaybe<OrderBy>;
  fileUrl?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: file */
export type FilePkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "file" */
export enum FileSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FileThumbnailUrl = 'fileThumbnailUrl',
  /** column name */
  FileUrl = 'fileUrl',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "file" */
export type FileSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  fileThumbnailUrl?: InputMaybe<Scalars['String']>;
  fileUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type FileStddevFields = {
  __typename?: 'FileStddevFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type FileStddev_PopFields = {
  __typename?: 'FileStddev_popFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type FileStddev_SampFields = {
  __typename?: 'FileStddev_sampFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type FileSumFields = {
  __typename?: 'FileSumFields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "file" */
export enum FileUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FileThumbnailUrl = 'fileThumbnailUrl',
  /** column name */
  FileUrl = 'fileUrl',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type FileUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<FileIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FileSetInput>;
  where: FileBoolExp;
};

/** aggregate var_pop on columns */
export type FileVar_PopFields = {
  __typename?: 'FileVar_popFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type FileVar_SampFields = {
  __typename?: 'FileVar_sampFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type FileVarianceFields = {
  __typename?: 'FileVarianceFields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'ASC',
  /** in ascending order, nulls first */
  AscNullsFirst = 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  AscNullsLast = 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  Desc = 'DESC',
  /** in descending order, nulls first */
  DescNullsFirst = 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
  DescNullsLast = 'DESC_NULLS_LAST'
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "todo" */
export type Todo = {
  __typename?: 'Todo';
  content: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
  userId: Scalars['Int'];
};

/** aggregated selection of "todo" */
export type TodoAggregate = {
  __typename?: 'TodoAggregate';
  aggregate?: Maybe<TodoAggregateFields>;
  nodes: Array<Todo>;
};

/** aggregate fields of "todo" */
export type TodoAggregateFields = {
  __typename?: 'TodoAggregateFields';
  avg?: Maybe<TodoAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<TodoMaxFields>;
  min?: Maybe<TodoMinFields>;
  stddev?: Maybe<TodoStddevFields>;
  stddevPop?: Maybe<TodoStddev_PopFields>;
  stddevSamp?: Maybe<TodoStddev_SampFields>;
  sum?: Maybe<TodoSumFields>;
  varPop?: Maybe<TodoVar_PopFields>;
  varSamp?: Maybe<TodoVar_SampFields>;
  variance?: Maybe<TodoVarianceFields>;
};


/** aggregate fields of "todo" */
export type TodoAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TodoSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "todo" */
export type TodoAggregateOrderBy = {
  avg?: InputMaybe<Todo_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Todo_Max_Order_By>;
  min?: InputMaybe<Todo_Min_Order_By>;
  stddev?: InputMaybe<Todo_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Todo_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Todo_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Todo_Sum_Order_By>;
  var_pop?: InputMaybe<Todo_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Todo_Var_Samp_Order_By>;
  variance?: InputMaybe<Todo_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "todo" */
export type TodoArrRelInsertInput = {
  data: Array<TodoInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<TodoOnConflict>;
};

/** aggregate avg on columns */
export type TodoAvgFields = {
  __typename?: 'TodoAvgFields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "todo". All fields are combined with a logical 'AND'. */
export type TodoBoolExp = {
  _and?: InputMaybe<Array<TodoBoolExp>>;
  _not?: InputMaybe<TodoBoolExp>;
  _or?: InputMaybe<Array<TodoBoolExp>>;
  content?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  userId?: InputMaybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "todo" */
export enum TodoConstraint {
  /** unique or primary key constraint on columns "id" */
  TodoPkey = 'todo_pkey'
}

/** input type for incrementing numeric columns in table "todo" */
export type TodoIncInput = {
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "todo" */
export type TodoInsertInput = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type TodoMaxFields = {
  __typename?: 'TodoMaxFields';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type TodoMinFields = {
  __typename?: 'TodoMinFields';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "todo" */
export type TodoMutationResponse = {
  __typename?: 'TodoMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Todo>;
};

/** on_conflict condition type for table "todo" */
export type TodoOnConflict = {
  constraint: TodoConstraint;
  update_columns?: Array<TodoUpdateColumn>;
  where?: InputMaybe<TodoBoolExp>;
};

/** Ordering options when selecting data from "todo". */
export type TodoOrderBy = {
  content?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: todo */
export type TodoPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "todo" */
export enum TodoSelectColumn {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "todo" */
export type TodoSetInput = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type TodoStddevFields = {
  __typename?: 'TodoStddevFields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type TodoStddev_PopFields = {
  __typename?: 'TodoStddev_popFields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type TodoStddev_SampFields = {
  __typename?: 'TodoStddev_sampFields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type TodoSumFields = {
  __typename?: 'TodoSumFields';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** update columns of table "todo" */
export enum TodoUpdateColumn {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type TodoUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<TodoIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TodoSetInput>;
  where: TodoBoolExp;
};

/** aggregate var_pop on columns */
export type TodoVar_PopFields = {
  __typename?: 'TodoVar_popFields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type TodoVar_SampFields = {
  __typename?: 'TodoVar_sampFields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type TodoVarianceFields = {
  __typename?: 'TodoVarianceFields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'User';
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  todos: Array<Todo>;
  /** An aggregate relationship */
  todosAggregate: TodoAggregate;
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "user" */
export type UserTodosArgs = {
  distinctOn?: InputMaybe<Array<TodoSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TodoOrderBy>>;
  where?: InputMaybe<TodoBoolExp>;
};


/** columns and relationships of "user" */
export type UserTodosAggregateArgs = {
  distinctOn?: InputMaybe<Array<TodoSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TodoOrderBy>>;
  where?: InputMaybe<TodoBoolExp>;
};

/** aggregated selection of "user" */
export type UserAggregate = {
  __typename?: 'UserAggregate';
  aggregate?: Maybe<UserAggregateFields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type UserAggregateFields = {
  __typename?: 'UserAggregateFields';
  avg?: Maybe<UserAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<UserMaxFields>;
  min?: Maybe<UserMinFields>;
  stddev?: Maybe<UserStddevFields>;
  stddevPop?: Maybe<UserStddev_PopFields>;
  stddevSamp?: Maybe<UserStddev_SampFields>;
  sum?: Maybe<UserSumFields>;
  varPop?: Maybe<UserVar_PopFields>;
  varSamp?: Maybe<UserVar_SampFields>;
  variance?: Maybe<UserVarianceFields>;
};


/** aggregate fields of "user" */
export type UserAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type UserAvgFields = {
  __typename?: 'UserAvgFields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type UserBoolExp = {
  _and?: InputMaybe<Array<UserBoolExp>>;
  _not?: InputMaybe<UserBoolExp>;
  _or?: InputMaybe<Array<UserBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  todos?: InputMaybe<TodoBoolExp>;
  todos_aggregate?: InputMaybe<Todo_Aggregate_Bool_Exp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "user" */
export enum UserConstraint {
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'user_pkey'
}

/** input type for incrementing numeric columns in table "user" */
export type UserIncInput = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type UserInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  todos?: InputMaybe<TodoArrRelInsertInput>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type UserMaxFields = {
  __typename?: 'UserMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type UserMinFields = {
  __typename?: 'UserMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "user" */
export type UserMutationResponse = {
  __typename?: 'UserMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** on_conflict condition type for table "user" */
export type UserOnConflict = {
  constraint: UserConstraint;
  update_columns?: Array<UserUpdateColumn>;
  where?: InputMaybe<UserBoolExp>;
};

/** Ordering options when selecting data from "user". */
export type UserOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  todosAggregate?: InputMaybe<TodoAggregateOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user */
export type UserPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "user" */
export enum UserSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "user" */
export type UserSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type UserStddevFields = {
  __typename?: 'UserStddevFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type UserStddev_PopFields = {
  __typename?: 'UserStddev_popFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type UserStddev_SampFields = {
  __typename?: 'UserStddev_sampFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type UserSumFields = {
  __typename?: 'UserSumFields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "user" */
export enum UserUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type UserUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<UserIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserSetInput>;
  where: UserBoolExp;
};

/** aggregate var_pop on columns */
export type UserVar_PopFields = {
  __typename?: 'UserVar_popFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type UserVar_SampFields = {
  __typename?: 'UserVar_sampFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type UserVarianceFields = {
  __typename?: 'UserVarianceFields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "file" */
export type File_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: File_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type File_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  fileThumbnailUrl?: InputMaybe<Scalars['String']>;
  fileUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "file" */
  deleteFile?: Maybe<FileMutationResponse>;
  /** delete single row from the table: "file" */
  deleteFileByPk?: Maybe<File>;
  /** delete data from the table: "todo" */
  deleteTodo?: Maybe<TodoMutationResponse>;
  /** delete single row from the table: "todo" */
  deleteTodoByPk?: Maybe<Todo>;
  /** delete data from the table: "user" */
  deleteUser?: Maybe<UserMutationResponse>;
  /** delete single row from the table: "user" */
  deleteUserByPk?: Maybe<User>;
  /** insert data into the table: "file" */
  insertFile?: Maybe<FileMutationResponse>;
  /** insert a single row into the table: "file" */
  insertFileOne?: Maybe<File>;
  /** insert data into the table: "todo" */
  insertTodo?: Maybe<TodoMutationResponse>;
  /** insert a single row into the table: "todo" */
  insertTodoOne?: Maybe<Todo>;
  /** insert data into the table: "user" */
  insertUser?: Maybe<UserMutationResponse>;
  /** insert a single row into the table: "user" */
  insertUserOne?: Maybe<User>;
  /** update data of the table: "file" */
  updateFile?: Maybe<FileMutationResponse>;
  /** update single row of the table: "file" */
  updateFileByPk?: Maybe<File>;
  /** update multiples rows of table: "file" */
  updateFileMany?: Maybe<Array<Maybe<FileMutationResponse>>>;
  /** update data of the table: "todo" */
  updateTodo?: Maybe<TodoMutationResponse>;
  /** update single row of the table: "todo" */
  updateTodoByPk?: Maybe<Todo>;
  /** update multiples rows of table: "todo" */
  updateTodoMany?: Maybe<Array<Maybe<TodoMutationResponse>>>;
  /** update data of the table: "user" */
  updateUser?: Maybe<UserMutationResponse>;
  /** update single row of the table: "user" */
  updateUserByPk?: Maybe<User>;
  /** update multiples rows of table: "user" */
  updateUserMany?: Maybe<Array<Maybe<UserMutationResponse>>>;
};


/** mutation root */
export type Mutation_RootDeleteFileArgs = {
  where: FileBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteFileByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteTodoArgs = {
  where: TodoBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteTodoByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  where: UserBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteUserByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsertFileArgs = {
  objects: Array<FileInsertInput>;
  onConflict?: InputMaybe<FileOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertFileOneArgs = {
  object: FileInsertInput;
  onConflict?: InputMaybe<FileOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertTodoArgs = {
  objects: Array<TodoInsertInput>;
  onConflict?: InputMaybe<TodoOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertTodoOneArgs = {
  object: TodoInsertInput;
  onConflict?: InputMaybe<TodoOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserArgs = {
  objects: Array<UserInsertInput>;
  onConflict?: InputMaybe<UserOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserOneArgs = {
  object: UserInsertInput;
  onConflict?: InputMaybe<UserOnConflict>;
};


/** mutation root */
export type Mutation_RootUpdateFileArgs = {
  _inc?: InputMaybe<FileIncInput>;
  _set?: InputMaybe<FileSetInput>;
  where: FileBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateFileByPkArgs = {
  _inc?: InputMaybe<FileIncInput>;
  _set?: InputMaybe<FileSetInput>;
  pk_columns: FilePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateFileManyArgs = {
  updates: Array<FileUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateTodoArgs = {
  _inc?: InputMaybe<TodoIncInput>;
  _set?: InputMaybe<TodoSetInput>;
  where: TodoBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateTodoByPkArgs = {
  _inc?: InputMaybe<TodoIncInput>;
  _set?: InputMaybe<TodoSetInput>;
  pk_columns: TodoPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateTodoManyArgs = {
  updates: Array<TodoUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _inc?: InputMaybe<UserIncInput>;
  _set?: InputMaybe<UserSetInput>;
  where: UserBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateUserByPkArgs = {
  _inc?: InputMaybe<UserIncInput>;
  _set?: InputMaybe<UserSetInput>;
  pk_columns: UserPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateUserManyArgs = {
  updates: Array<UserUpdates>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "file" */
  file: Array<File>;
  /** fetch aggregated fields from the table: "file" */
  fileAggregate: FileAggregate;
  /** fetch data from the table: "file" using primary key columns */
  fileByPk?: Maybe<File>;
  /** fetch data from the table: "todo" */
  todo: Array<Todo>;
  /** fetch aggregated fields from the table: "todo" */
  todoAggregate: TodoAggregate;
  /** fetch data from the table: "todo" using primary key columns */
  todoByPk?: Maybe<Todo>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  userAggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
};


export type Query_RootFileArgs = {
  distinctOn?: InputMaybe<Array<FileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FileOrderBy>>;
  where?: InputMaybe<FileBoolExp>;
};


export type Query_RootFileAggregateArgs = {
  distinctOn?: InputMaybe<Array<FileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FileOrderBy>>;
  where?: InputMaybe<FileBoolExp>;
};


export type Query_RootFileByPkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTodoArgs = {
  distinctOn?: InputMaybe<Array<TodoSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TodoOrderBy>>;
  where?: InputMaybe<TodoBoolExp>;
};


export type Query_RootTodoAggregateArgs = {
  distinctOn?: InputMaybe<Array<TodoSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TodoOrderBy>>;
  where?: InputMaybe<TodoBoolExp>;
};


export type Query_RootTodoByPkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUserArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type Query_RootUserAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type Query_RootUserByPkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "file" */
  file: Array<File>;
  /** fetch aggregated fields from the table: "file" */
  fileAggregate: FileAggregate;
  /** fetch data from the table: "file" using primary key columns */
  fileByPk?: Maybe<File>;
  /** fetch data from the table in a streaming manner: "file" */
  fileStream: Array<File>;
  /** fetch data from the table: "todo" */
  todo: Array<Todo>;
  /** fetch aggregated fields from the table: "todo" */
  todoAggregate: TodoAggregate;
  /** fetch data from the table: "todo" using primary key columns */
  todoByPk?: Maybe<Todo>;
  /** fetch data from the table in a streaming manner: "todo" */
  todoStream: Array<Todo>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  userAggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "user" */
  userStream: Array<User>;
};


export type Subscription_RootFileArgs = {
  distinctOn?: InputMaybe<Array<FileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FileOrderBy>>;
  where?: InputMaybe<FileBoolExp>;
};


export type Subscription_RootFileAggregateArgs = {
  distinctOn?: InputMaybe<Array<FileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FileOrderBy>>;
  where?: InputMaybe<FileBoolExp>;
};


export type Subscription_RootFileByPkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootFileStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<File_StreamCursorInput>>;
  where?: InputMaybe<FileBoolExp>;
};


export type Subscription_RootTodoArgs = {
  distinctOn?: InputMaybe<Array<TodoSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TodoOrderBy>>;
  where?: InputMaybe<TodoBoolExp>;
};


export type Subscription_RootTodoAggregateArgs = {
  distinctOn?: InputMaybe<Array<TodoSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TodoOrderBy>>;
  where?: InputMaybe<TodoBoolExp>;
};


export type Subscription_RootTodoByPkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTodoStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Todo_StreamCursorInput>>;
  where?: InputMaybe<TodoBoolExp>;
};


export type Subscription_RootUserArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type Subscription_RootUserAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type Subscription_RootUserByPkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUserStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<User_StreamCursorInput>>;
  where?: InputMaybe<UserBoolExp>;
};

export type Todo_Aggregate_Bool_Exp = {
  count?: InputMaybe<Todo_Aggregate_Bool_Exp_Count>;
};

export type Todo_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<TodoSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TodoBoolExp>;
  predicate: IntComparisonExp;
};

/** order by avg() on columns of table "todo" */
export type Todo_Avg_Order_By = {
  id?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "todo" */
export type Todo_Max_Order_By = {
  content?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "todo" */
export type Todo_Min_Order_By = {
  content?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by stddev() on columns of table "todo" */
export type Todo_Stddev_Order_By = {
  id?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "todo" */
export type Todo_Stddev_Pop_Order_By = {
  id?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "todo" */
export type Todo_Stddev_Samp_Order_By = {
  id?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "todo" */
export type Todo_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Todo_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Todo_StreamCursorValueInput = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** order by sum() on columns of table "todo" */
export type Todo_Sum_Order_By = {
  id?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "todo" */
export type Todo_Var_Pop_Order_By = {
  id?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "todo" */
export type Todo_Var_Samp_Order_By = {
  id?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "todo" */
export type Todo_Variance_Order_By = {
  id?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "user" */
export type User_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: User_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type User_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

export type AddThumbnailMutationVariables = Exact<{
  id: Scalars['Int'];
  fileThumbnailUrl: Scalars['String'];
}>;


export type AddThumbnailMutation = { __typename?: 'mutation_root', updateFileByPk?: { __typename?: 'File', id: number, fileUrl: string, fileThumbnailUrl?: string | null, createdAt: any, updatedAt: any } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'User', id: number, name: string }> };

export type GetAllUserSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type GetAllUserSubscription = { __typename?: 'subscription_root', users: Array<{ __typename?: 'User', id: number, name: string, todos: Array<{ __typename?: 'Todo', id: number, content: string }> }> };

export type SubscribeAllFilesSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubscribeAllFilesSubscription = { __typename?: 'subscription_root', files: Array<{ __typename?: 'File', id: number, fileUrl: string, fileThumbnailUrl?: string | null, createdAt: any, updatedAt: any }> };

export type CreateFileMutationVariables = Exact<{
  fileUrl: Scalars['String'];
}>;


export type CreateFileMutation = { __typename?: 'mutation_root', insertFileOne?: { __typename?: 'File', id: number, fileUrl: string, fileThumbnailUrl?: string | null, createdAt: any, updatedAt: any } | null };


export const AddThumbnailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddThumbnail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileThumbnailUrl"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFileByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fileThumbnailUrl"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileThumbnailUrl"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fileUrl"}},{"kind":"Field","name":{"kind":"Name","value":"fileThumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<AddThumbnailMutation, AddThumbnailMutationVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
export const GetAllUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"GetAllUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"users"},"name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"todos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllUserSubscription, GetAllUserSubscriptionVariables>;
export const SubscribeAllFilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SubscribeAllFiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"files"},"name":{"kind":"Name","value":"file"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"2"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DESC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fileUrl"}},{"kind":"Field","name":{"kind":"Name","value":"fileThumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<SubscribeAllFilesSubscription, SubscribeAllFilesSubscriptionVariables>;
export const CreateFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileUrl"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertFileOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fileUrl"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileUrl"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fileUrl"}},{"kind":"Field","name":{"kind":"Name","value":"fileThumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateFileMutation, CreateFileMutationVariables>;