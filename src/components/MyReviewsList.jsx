import React from "react";
import { View } from "react-native";
import useAuthUser from "../hooks/useAuthUser";
import MyReviewsListContainer from "./MyReviewsListContainer";
import Text from "./Text";

const MyReviewsList = () => {
  const { authUser, fetchMore, refetch } = useAuthUser(true);

  const onEndReach = () => {
    console.log('end of list, trying to fetch more myreviews');
    fetchMore(true);
  }

  if (!authUser) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return <MyReviewsListContainer
    onEndReach={onEndReach}
    authUser={authUser}
    refetch={refetch}
  />
}

export default MyReviewsList;