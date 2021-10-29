import React from "react";
import { StyleSheet, View } from "react-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.textWhite,
    padding:15,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'    
  },
  rating: {
    color: theme.colors.primary,
    fontSize: 26,
    borderColor: theme.colors.primary,
    borderWidth: 2.5,
    borderRadius: 50,
    width: 65,
    height: 65,
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 'auto',
    flex: 1
  },
  details: {
    flex: 5,
    marginLeft:10,
  },
  text: {
    padding:4
  }
})
const ReviewsListItem = ({ review }) => {

  const parseDate = (rawDate) => {
    const date = new Date(rawDate);
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.rating}>{review.rating}</Text>
      <View style={styles.details}>
        <Text fontSize='subheading' fontWeight='bold' style={styles.text}>{review.user.username}</Text>
        <Text color='textSecondary' style={styles.text}>{parseDate(review.createdAt)}</Text>
        <Text style={styles.text}>{review.text}</Text>
      </View>
    </View>
  );
}

export default ReviewsListItem;