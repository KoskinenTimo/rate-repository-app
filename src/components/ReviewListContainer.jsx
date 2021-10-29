import React from 'react';
import { FlatList } from "react-native";
import RepositoryItem from './RepositoryItem';
import ReviewsListItem from './ReviewsListItem';

export class ReviewListContainer extends React.Component {
  renderItem = ({ item }) => {
    return (
      <ReviewsListItem review={item}/>
    );
  }

  renderHeader = () => {
    return (
      <RepositoryItem singleView={true} item={this.props.repository}/>
    );
  }

  render() {
    return (
      <FlatList 
        data={this.props.repository.reviews.edges.map(node => node.node)}
        renderItem={this.renderItem}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={this.renderHeader}
        onEndReached={this.props.onEndReach}
        onEndReachedThreshold={0.8}
      />
    )
  }
}

export default ReviewListContainer;