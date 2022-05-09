import {gql} from '@apollo/client';

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
    mutation addPassword {
        addPassword(domain: $domain, pwd: $pwd, email: $email) {
            domain
            email
            pwd
        }
    }
`;