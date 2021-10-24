import { gql } from '@apollo/client';

export const CREDENTIALS =  gql`
  mutation($credentials: AuthorizeInput) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;
