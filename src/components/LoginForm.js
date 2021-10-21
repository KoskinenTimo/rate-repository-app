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
  button: {
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

const LoginForm = ({ onSubmit }) => {
  return (
    
    <View style={styles.form}>
      <FormikTextInput name='username' placeholder='Username'/>
      <FormikTextInput name='password' placeholder='Password' secureTextEntry/> 
      <Pressable onPress={onSubmit}>
        <Text
          style={styles.button}
          fontSize="subheading"
          fontWeight="bold"
        >
          Sign in
        </Text>
      </Pressable>  
    </View>
  );
};

export default LoginForm;