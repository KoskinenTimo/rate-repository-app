import { gql } from '@apollo/client';

export const CREDENTIALS =  gql`
  mutation($credentials: AuthorizeInput) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation ($review: CreateReviewInput) {
    createReview(review: $review) {
      repository {
        id
      }
    }
  }
`

export const CREATE_USER = gql`
  mutation ($user: CreateUserInput){
    createUser(user: $user) {
      id
      username
    }
  }
`

export const DELETE_REVIEW = gql`
  mutation ($id: ID!){
    deleteReview (id: $id)
  }
`