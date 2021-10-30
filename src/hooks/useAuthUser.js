import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_AUTH_USER } from "../graphql/queries";

const useAuthUser = (include) => {
  const [ authUser, setAuthUser ] = useState();
  const { loading, error, data, refetch, fetchMore, ...result } = useQuery(GET_AUTH_USER, {
    fetchPolicy: 'cache-and-network',
    variables: {
      ...(include && {includeReviews: include}),
      first: 4
    }
  });

  useEffect(() => {
    if (data && data.authorizedUser) {
      console.log('setting authUser');
      setAuthUser(data.authorizedUser);
    }
    if (!data) {
      console.log('resetting authUser');
      setAuthUser(null);
    }
    if (error) {      
      console.log(error);
    }
  }, [error, data]);

  const handleFetchMore = (include) => {
    const canFetchMore = !loading && data?.authorizedUser.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }
    console.log('fetching more myreviews');
    fetchMore({
      variables: {
        ...(include && {includeReviews: include}),
        first: 4,
        after: data?.authorizedUser.reviews.pageInfo.endCursor
      }
    });
  };

  return {
    authUser,
    loading,
    fetchMore: handleFetchMore,
    refetch,
    ...result
  };
}

export default useAuthUser;