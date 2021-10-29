import { gql } from '@apollo/client';

export const REPOSITORY_BASE = gql`
  fragment RepositoryBase on Repository {
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
`;