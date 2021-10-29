import React from "react";
import { Pressable, View } from "react-native";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const styles = {
  form: {
    backgroundColor: theme.colors.textWhite,
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: 30
  },
  formButton: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.textWhite,
    width: 300,
    padding: 10,
    borderRadius: 5,
    marginLeft: 'auto',
    marginRight: 'auto',    
    textAlign: 'center',
    marginTop: 15
  }
};

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
    <FormikTextInput testID='reviewRepoOwner' name='reviewRepoOwner' placeholder='Repository Owner'/>
    <FormikTextInput testID='reviewRepoName' name='reviewRepoName' placeholder='Repository Name' />
    <FormikTextInput testID='reviewRating' name='reviewRating' placeholder='Rating' />
    <FormikTextInput testID='reviewText' name='reviewText' placeholder='Review Text' hhhmultiline/>    
    <Pressable 
      onPress={onSubmit}
      testID='loginSubmit'
    >
      <Text
        style={styles.formButton}
        fontSize="subheading"
        fontWeight="bold"
      >
        Create a review
      </Text>
    </Pressable>  
  </View>
  );
}

export default ReviewForm;