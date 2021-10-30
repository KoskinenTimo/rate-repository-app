import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Route, Switch, Redirect } from 'react-router-native';
import SignIn from './SignIn';
import ReviewList from './ReviewsList';
import Review from './Review';
import SignUp from './SignUp';
import MyReviewsList from './MyReviewsList';


const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8'
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>        
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/signup">
          <SignUp />          
        </Route>
        <Route path="/myreviews">
          <MyReviewsList />
        </Route>
        <Route path="/:id" exact>
          <ReviewList />
        </Route>        
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;