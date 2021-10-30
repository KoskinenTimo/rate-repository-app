import { useMutation } from "@apollo/client";
import React from "react";
import { Pressable, StyleSheet, View, Alert  } from "react-native";
import { useHistory } from "react-router";
import { DELETE_REVIEW } from "../graphql/mutations";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: theme.colors.textWhite,
    marginTop: 15,
    display: 'flex',
    justifyContent: 'space-around'
  },
  innerContainer: {    
    padding:15,
    display: 'flex', 
    flexDirection: 'row',        
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
  },
  viewRepository: {
    backgroundColor: theme.colors.primary,
    flex: 1,
    padding: 20,
    borderRadius: 6,
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 10,
    
  },
  deleteRepository: {
    backgroundColor: theme.colors.error,
    flex: 1,
    padding: 20,
    borderRadius: 6,
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 10
  },
  button: {
    color:theme.colors.textWhite,
    textAlign: 'center',
    textAlignVertical: 'center',
  }
})
const ReviewsListItem = ({ review, myreviews=false, refetch }) => {
  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const [ deleteReview, result ] = useMutation(DELETE_REVIEW, {
    variables: {
      id: review.id
    }
  });

  const parseDate = (rawDate) => {
    const date = new Date(rawDate);
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  }

  const handleDeleteReview = () => {
    return (
      Alert.alert(
        "Delete Review",
        "Are you sure you want to delete this review?",
        [
          {
            text: "Cancel",
            onPress: () => Alert.alert("Cancel pressed"),
            style: "default",
          },
          {
            text: "Delete",
            onPress: () => {
              deleteReview();
              refetch();
              Alert.alert("Review deleted")
            },
            style: "default",
          },
        ],
        {
          cancelable: true,
        }
      )
    );
  }
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.rating}>{review.rating}</Text>
        <View style={styles.details}>
          <Text fontSize='subheading' fontWeight='bold' style={styles.text}>
            {
              myreviews ?
              review.repository.fullName :              
              review.user.username
            }
          </Text>         
          <Text color='textSecondary' style={styles.text}>{parseDate(review.createdAt)}</Text>
          <Text style={styles.text}>{review.text}</Text>
        </View>
      </View>
      {
        myreviews &&
        <View style={styles.innerContainer}>
          <Pressable 
            style={styles.viewRepository}
            onPress={() => history.push(`/${review.repository.id}`)}
          >
            <Text fontSize='subheading' fontWeight='bold' style={styles.button}>
              View repository
            </Text>
          </Pressable>
          <Pressable 
            style={styles.deleteRepository}
            onPress={handleDeleteReview}
          >
            <Text fontSize='subheading' fontWeight='bold' style={styles.button}>
              Delete review
            </Text>
          </Pressable>
        </View>
      }
    </View>
  );
}

export default ReviewsListItem;