import { useState, useEffect } from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client';


const useRepositories = (selectedOrder,searchValue) => {
  const [repositories, setRepositories] = useState();

  const { loading, error, data, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy: selectedOrder === 'latest' ? 'CREATED_AT' : 'RATING_AVERAGE',
      orderDirection: selectedOrder === 'lowest' ? 'ASC' : 'DESC',
      searchKeyword: searchValue,
      first: 3,
    }
  });
  
  useEffect(() => {
    if (data && data.repositories) {
      console.log('setting repositories');      
      setRepositories(data.repositories);
    }
    if (error) {
      console.log(error);
    }
  }, [error, data]);

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }
    fetchMore({      
      variables: {
        orderBy: selectedOrder === 'latest' ? 'CREATED_AT' : 'RATING_AVERAGE',
        orderDirection: selectedOrder === 'lowest' ? 'ASC' : 'DESC',
        searchKeyword: searchValue,
        after: data.repositories.pageInfo.endCursor,
        first: 3,
      },
    });
  };

  return {
    repositories,
    loading,
    fetchMore: handleFetchMore,
    ...result
  };
};

export default useRepositories;