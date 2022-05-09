import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPassword: Password;
};


export type MutationAddPasswordArgs = {
  domain: Scalars['String'];
  email: Scalars['String'];
  pwd?: InputMaybe<Scalars['String']>;
};

export type Password = {
  __typename?: 'Password';
  domain: Scalars['String'];
  email: Scalars['String'];
  pwd: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  password?: Maybe<Array<Password>>;
};

export type GetPasswordQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPasswordQuery = { __typename?: 'Query', password?: Array<{ __typename?: 'Password', domain: string, email: string, pwd: string }> | null };


export const GetPasswordDocument = gql`
    query getPassword {
  password {
    domain
    email
    pwd
  }
}
    `;

/**
 * __useGetPasswordQuery__
 *
 * To run a query within a React component, call `useGetPasswordQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPasswordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPasswordQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPasswordQuery(baseOptions?: Apollo.QueryHookOptions<GetPasswordQuery, GetPasswordQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPasswordQuery, GetPasswordQueryVariables>(GetPasswordDocument, options);
      }
export function useGetPasswordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPasswordQuery, GetPasswordQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPasswordQuery, GetPasswordQueryVariables>(GetPasswordDocument, options);
        }
export type GetPasswordQueryHookResult = ReturnType<typeof useGetPasswordQuery>;
export type GetPasswordLazyQueryHookResult = ReturnType<typeof useGetPasswordLazyQuery>;
export type GetPasswordQueryResult = Apollo.QueryResult<GetPasswordQuery, GetPasswordQueryVariables>;