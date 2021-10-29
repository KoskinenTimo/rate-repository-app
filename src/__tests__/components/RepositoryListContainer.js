import React from 'react';
import { render } from '@testing-library/react-native';
import RepositoryListContainer from '../../components/RepositoryListContainer';

/* eslint-disable jest/expect-expect */
describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };
      const { debug, getByTestId } = render(<RepositoryListContainer repositories={repositories} />)
      debug();

      function handleNumberChange(number) {
        if(number >= 1000) {
          number = Math.round(number/100);
          return `${number/10}k`;
        }
        return number;
      }

      const repo1 = repositories.edges[0].node;
      const repo2 = repositories.edges[1].node;

      expect(getByTestId(`fullName-${repo1.id}`)).toHaveTextContent(repo1.fullName);
      expect(getByTestId(`description-${repo1.id}`)).toHaveTextContent(repo1.description);
      expect(getByTestId(`language-${repo1.id}`)).toHaveTextContent(repo1.language);
      expect(getByTestId(`stargazersCount-${repo1.id}`)).toHaveTextContent(handleNumberChange(repo1.stargazersCount));
      expect(getByTestId(`forksCount-${repo1.id}`)).toHaveTextContent(handleNumberChange(repo1.forksCount));
      expect(getByTestId(`reviewCount-${repo1.id}`)).toHaveTextContent(handleNumberChange(repo1.reviewCount));
      expect(getByTestId(`ratingAverage-${repo1.id}`)).toHaveTextContent(handleNumberChange(repo1.ratingAverage));

      expect(getByTestId(`fullName-${repo2.id}`)).toHaveTextContent(repo2.fullName);
      expect(getByTestId(`description-${repo2.id}`)).toHaveTextContent(repo2.description);
      expect(getByTestId(`language-${repo2.id}`)).toHaveTextContent(repo2.language);
      expect(getByTestId(`stargazersCount-${repo2.id}`)).toHaveTextContent(handleNumberChange(repo2.stargazersCount));
      expect(getByTestId(`forksCount-${repo2.id}`)).toHaveTextContent(handleNumberChange(repo2.forksCount));
      expect(getByTestId(`reviewCount-${repo2.id}`)).toHaveTextContent(handleNumberChange(repo2.reviewCount));
      expect(getByTestId(`ratingAverage-${repo2.id}`)).toHaveTextContent(handleNumberChange(repo2.ratingAverage));
    });
  });
});