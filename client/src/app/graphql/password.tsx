import { gql } from '@apollo/client';

const passwordQuery = gql`
    query getPassword {
        password {
            domain
            email
            pwd
        }
    }
`;

const addPasswordMutation = gql`
    mutation addPassword($domain: String!, $pwd: String!, $email: String!) {
        addPassword(domain: $domain, pwd: $pwd, email: $email) {
            domain
            email
            pwd
        }
    }
`;

const deletePasswordMutation = gql`
    mutation deletePassword($domain: String!, $pwd: String!, $email: String!) {
        deletePassword(domain: $domain, pwd: $pwd, email: $email) {
            domain
            email
            pwd
        }
    }
`;