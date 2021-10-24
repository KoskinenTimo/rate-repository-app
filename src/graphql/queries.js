import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          fullName
          reviewCount
          description
          stargazersCount
          language
          name
          ownerAvatarUrl
          forksCount
          ratingAverage
        }
      }
    }
  }
`;

export const GET_AUTH_USER = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;