import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.tabColor
  },
});

const AppBarTab = () => {
  return (
  <View style={styles.container}>
    
  </View>);
};

export default AppBarTab;