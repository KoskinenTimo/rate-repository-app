import { useState, useEffect } from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client';


const useRepositories = () => {
  const [repositories, setRepositories] = useState();

  const { loading, error, data, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
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

  return { repositories, loading, refetch: refetch };
};

export default useRepositories;