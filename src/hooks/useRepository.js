import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_ONE_REPO } from "../graphql/queries";

const useRepository = (id) => {
  const [ repository, setRepository ] = useState();

  const { loading, error, data, fetchMore, ...result } = useQuery(GET_ONE_REPO, {
    fetchPolicy: 'cache-and-network',
    variables: { 
      id: id,
      first: 2
    }
  });

  useEffect(() => {
    if (data && data.repository) {
      console.log('setting repository');
      setRepository(data.repository);
    }
    if (error) {
      console.log(error);
    }
  }, [error, data]);


  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }
    console.log('fetching more reviews'); 
    fetchMore({      
      variables: { 
        id: id,
        first: 2,
        after: data.repository.reviews.pageInfo.endCursor     
      },
    })
  };

  return {
    repository,
    loading,
    fetchMore: handleFetchMore,
    ...result
  };
}

export default useRepository;