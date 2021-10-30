import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';
import { Link } from 'react-router-native';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';
import useAuthUser from '../hooks/useAuthUser';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.tabColor,
    padding: 15,

  },
  link: {
    color: theme.colors.textWhite,
    padding: 13
  },
  horizontalBar: {
    display: 'flex',
    flexDirection: 'row'
  }
  // ...
});

const AppBar = () => {
  const { authUser, refetch } = useAuthUser();
  const [ loginVisible, setLoginVisible ] = useState(true);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  useEffect(() => {
    if (authUser) {
      setLoginVisible(false);
    }
    if (!authUser) {
      setLoginVisible(true);
    }
  }, [authUser]);

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
        <>
          <Link to="/signin">
            <Text
              fontSize="subheading"
              style={styles.link}
              fontWeight="bold"
            >
              Sign In
            </Text>        
          </Link>
          <Link to="/signup">
            <Text
              fontSize="subheading"
              style={styles.link}
              fontWeight="bold"
            >
              Sign Up
            </Text>
          </Link>
        </>
        :
        <>
          <Link to="/review">
            <Text
              fontSize="subheading"
              style={styles.link}
              fontWeight="bold"
            >
              Create a review
            </Text>
          </Link>
          <Link to="/myreviews">
            <Text
              fontSize="subheading"
              style={styles.link}
              fontWeight="bold"
            >
              My Reviews
            </Text>
          </Link>
          <Pressable onPress={logOut}>
            <Text
              fontSize="subheading"
              style={styles.link}
              fontWeight="bold"
            >
              Sign Out
            </Text> 
          </Pressable>

        </>
      }

    </ScrollView>
  </View>);
};

export default AppBar;