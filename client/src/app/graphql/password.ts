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