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
    marginLeft: 'auto',
    marginRight: 'auto',    
    borderRadius: 5,
    textAlign: 'center',
    marginTop: 15
  }
};

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput testID='signupUsername' name='signupUsername' placeholder='Username'/>
      <FormikTextInput testID='signupPassword' name='signupPassword' placeholder='Password' secureTextEntry/>
      <FormikTextInput testID='signupPasswordConfirm' name='signupPasswordConfirm' placeholder='Password Confirm' secureTextEntry/> 
      <Pressable 
        onPress={onSubmit}
        testID='signUpSubmit'
      >
        <Text
          style={styles.formButton}
          fontSize="subheading"
          fontWeight="bold"
        >
          Sign up
        </Text>
      </Pressable>  
    </View>
  );
}

export default SignUpForm;