import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.tabColor,
    padding: 15,

  },
  link: {
    color: theme.colors.textWhite,
    padding: 10
  },
  horizontalBar: {
    display: 'flex',
    flexDirection: 'row'
  }
  // ...
});

const AppBar = () => {
  return (
  <View style={styles.container}>
    <ScrollView 
      horizontal={true}
      style={styles.horizontalBar}
    >
      <Link to="/">
        <Text
          fontSize="subheading"
          style={styles.link}
          fontWeight="bold"
        >
          Repositories
        </Text>
      </Link>
      <Link to="/signin">
        <Text
          fontSize="subheading"
          style={styles.link}
          fontWeight="bold"
        >
          Sign In
        </Text>        
      </Link>
    </ScrollView>
  </View>);
};

export default AppBar;