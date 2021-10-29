import React from "react";
import { View } from "react-native";
import { useParams } from "react-router";
import useRepository from "../hooks/useRepository";
import ReviewListContainer from "./ReviewListContainer";
import Text from "./Text";

const ReviewList = () => {
  const { id } = useParams();
  const { repository, fetchMore } = useRepository(id)

  const onEndReach = () => {
    fetchMore(); 
  }

  if (!repository) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ReviewListContainer 
      onEndReach={onEndReach}
      repository={repository}
    />
  );
}

export default ReviewList;