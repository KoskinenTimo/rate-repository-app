import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';
import { Link } from 'react-router-native';
import { useApolloClient, useQuery } from '@apollo/client';
import { GET_AUTH_USER } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';

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
  const { data, refetch } = useQuery(GET_AUTH_USER);
  const [ loginVisible, setLoginVisible ] = useState(true);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  useEffect(() => {
    if (data && data.authorizedUser) {
      setLoginVisible(false);
    }
    if (!data || !data.authorizedUser) {
      setLoginVisible(true);
    }
  }, [data]);

  const logOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    refetch();
  };

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
      {
        loginVisible 
        ?
        <Link to="/signin">
          <Text
            fontSize="subheading"
            style={styles.link}
            fontWeight="bold"
          >
            Sign In
          </Text>        
        </Link> 
        :
        <Pressable onPress={logOut}>
          <Text
            fontSize="subheading"
            style={styles.link}
            fontWeight="bold"
          >
            Sign Out
          </Text> 
        </Pressable>
      }

    </ScrollView>
  </View>);
};

export default AppBar;