import React from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Pressable
} from "react-native";
import RepositoryListOrderMenu from './RepositoryListOrderMenu';
import RepositoryItem from './RepositoryItem';
import { Searchbar } from 'react-native-paper';

const styles = StyleSheet.create({
  separator: {
    height: 10
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {
  renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => this.props.history.push(`/${item.id}`)}>
        <RepositoryItem item={item} />
      </Pressable>
    );
  };

  renderHeader = () => {
    const props = this.props;
    return (
      <View>
        <Searchbar
          placeholder="Search"
          onChangeText={value => props.setSearch(value)}
          value={props.search}
        />
        <RepositoryListOrderMenu 
          setSelectedOrder={props.setSelectedOrder}
          selectedOrder={props.selectedOrder}
        />
      </View>
    );
  }
  render() {
    return (
      <FlatList
        data={this.props.repositories}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={this.renderItem}
        keyExtractor={r => r.id}
        ListHeaderComponent={this.renderHeader}
        onEndReached={this.props.onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

export default RepositoryListContainer;