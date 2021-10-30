import { gql } from '@apollo/client';
import { REPOSITORY_BASE, REVIEW_DATA } from './fragments';


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
  ${REVIEW_DATA}
    query (
      $includeReviews: Boolean = false,
      $first: Int
      $after: String
      ){
      authorizedUser {
        id
        username
        reviews (
          first: $first,
          after:$after
        ) @include(if: $includeReviews) {
          totalCount
          edges {
            node {
              ...ReviewData              
            }
          }
          pageInfo {
            hasNextPage 
            startCursor 
            endCursor
          }
        }
      }
    }
`;

export const GET_ONE_REPO = gql`
  ${REPOSITORY_BASE}
  ${REVIEW_DATA}
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
            ...ReviewData
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
