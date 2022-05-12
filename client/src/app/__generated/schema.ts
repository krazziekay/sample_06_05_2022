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
  deletePassword: Password;
};


export type MutationAddPasswordArgs = {
  domain: Scalars['String'];
  email: Scalars['String'];
  pwd?: InputMaybe<Scalars['String']>;
};


export type MutationDeletePasswordArgs = {
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

export type AddPasswordMutationVariables = Exact<{
  domain: Scalars['String'];
  pwd: Scalars['String'];
  email: Scalars['String'];
}>;


export type AddPasswordMutation = { __typename?: 'Mutation', addPassword: { __typename?: 'Password', domain: string, email: string, pwd: string } };

export type DeletePasswordMutationVariables = Exact<{
  domain: Scalars['String'];
  pwd: Scalars['String'];
  email: Scalars['String'];
}>;


export type DeletePasswordMutation = { __typename?: 'Mutation', deletePassword: { __typename?: 'Password', domain: string, email: string, pwd: string } };


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
export const AddPasswordDocument = gql`
    mutation addPassword($domain: String!, $pwd: String!, $email: String!) {
  addPassword(domain: $domain, pwd: $pwd, email: $email) {
    domain
    email
    pwd
  }
}
    `;
export type AddPasswordMutationFn = Apollo.MutationFunction<AddPasswordMutation, AddPasswordMutationVariables>;

/**
 * __useAddPasswordMutation__
 *
 * To run a mutation, you first call `useAddPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPasswordMutation, { data, loading, error }] = useAddPasswordMutation({
 *   variables: {
 *      domain: // value for 'domain'
 *      pwd: // value for 'pwd'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useAddPasswordMutation(baseOptions?: Apollo.MutationHookOptions<AddPasswordMutation, AddPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPasswordMutation, AddPasswordMutationVariables>(AddPasswordDocument, options);
      }
export type AddPasswordMutationHookResult = ReturnType<typeof useAddPasswordMutation>;
export type AddPasswordMutationResult = Apollo.MutationResult<AddPasswordMutation>;
export type AddPasswordMutationOptions = Apollo.BaseMutationOptions<AddPasswordMutation, AddPasswordMutationVariables>;
export const DeletePasswordDocument = gql`
    mutation deletePassword($domain: String!, $pwd: String!, $email: String!) {
  deletePassword(domain: $domain, pwd: $pwd, email: $email) {
    domain
    email
    pwd
  }
}
    `;
export type DeletePasswordMutationFn = Apollo.MutationFunction<DeletePasswordMutation, DeletePasswordMutationVariables>;

/**
 * __useDeletePasswordMutation__
 *
 * To run a mutation, you first call `useDeletePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePasswordMutation, { data, loading, error }] = useDeletePasswordMutation({
 *   variables: {
 *      domain: // value for 'domain'
 *      pwd: // value for 'pwd'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useDeletePasswordMutation(baseOptions?: Apollo.MutationHookOptions<DeletePasswordMutation, DeletePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePasswordMutation, DeletePasswordMutationVariables>(DeletePasswordDocument, options);
      }
export type DeletePasswordMutationHookResult = ReturnType<typeof useDeletePasswordMutation>;
export type DeletePasswordMutationResult = Apollo.MutationResult<DeletePasswordMutation>;
export type DeletePasswordMutationOptions = Apollo.BaseMutationOptions<DeletePasswordMutation, DeletePasswordMutationVariables>;