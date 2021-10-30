import React, { useState } from 'react';
import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../hooks/useRepositories';
import { useDebounce } from 'use-debounce';
import { useHistory } from 'react-router';


const RepositoryList = () => {
  const [ selectedOrder, setSelectedOrder ] = useState('latest');  
  const [ search, setSearch ] = useState('');
  const [ searchValue ] = useDebounce(search, 400);
  const { repositories, fetchMore } = useRepositories(selectedOrder,searchValue);
  const history = useHistory();

  const onEndReach = () => {
    fetchMore();    
  };

  return <RepositoryListContainer
    repositories={
      repositories ? 
      repositories.edges.map(edge => edge.node) :
      []
    }
    setSelectedOrder={setSelectedOrder}
    selectedOrder={selectedOrder}
    search={search}
    setSearch={setSearch}
    history={history}
    onEndReach={onEndReach}
  />;
};

export default RepositoryList;