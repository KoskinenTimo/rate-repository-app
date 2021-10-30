import React from 'react';
import { FlatList } from 'react-native';
import ReviewsListItem from './ReviewsListItem';

const MyReviewsListContainer = ({ authUser, onEndReach, refetch }) => {

  const renderItem = ({ item }) => {
    return (
      <ReviewsListItem review={item} myreviews={true} refetch={refetch}/>
    );
  }
  return (
    <FlatList
      data={authUser.reviews.edges.map(e => e.node)}
      renderItem={renderItem}      
      keyExtractor={r => r.id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.7}
    />
  );
}

export default MyReviewsListContainer;