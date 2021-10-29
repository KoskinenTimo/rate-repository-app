import { gql } from '@apollo/client';
import { REPOSITORY_BASE } from './fragments';


export const GET_REPOSITORIES = gql`
  ${REPOSITORY_BASE}
  query (
    $orderBy: AllRepositoriesOrderBy,
    $orderDirection: OrderDirection,
    $searchKeyword: String,
    $first: Int,
    $after: String,     
    ){    
    repositories (
      orderBy: $orderBy,
      orderDirection: $orderDirection,
      searchKeyword: $searchKeyword,
      first: $first,
      after: $after,      
      ) {
      edges {        
        node {
          ...RepositoryBase
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
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

export const GET_ONE_REPO = gql`
  ${REPOSITORY_BASE}
  query (
    $id: ID!
    $first: Int,
    $after: String,
    ){
    repository(id: $id) {
      ...RepositoryBase
      url
      reviews (
        first: $first,
        after: $after,
      ){
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }      
    }
  }
`
