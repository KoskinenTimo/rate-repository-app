import { useMutation } from "@apollo/client";
import React from "react";
import { useHistory } from "react-router";
import { CREATE_USER } from "../graphql/mutations";
import useSignIn from "../hooks/useSignIn";
import SignUpContainer from "./SignUpContainer";

const SignUp = () => {
  const [ mutate ] = useMutation(CREATE_USER);
  const [ login ] = useSignIn();
  const history = useHistory();

  const onSubmit = (values) => {
    const { signupUsername, signupPassword } = values;
    console.log('signing up and submitting data to api');
    mutate({
      variables: {
        user: {
          username: signupUsername,
          password: signupPassword
        }
      }
    })
    .then(() => {
      console.log('signup succesful');
      login({ username:signupUsername, password:signupPassword })
        .then(() => {
          history.push("/")
        })
        .catch(e => {
          console.log(e);
        })
      
    })
    .catch(e => {
      console.log(e.message);
    })
  }

  return (
    <SignUpContainer onSubmit={onSubmit}/>
  );
}

export default SignUp;