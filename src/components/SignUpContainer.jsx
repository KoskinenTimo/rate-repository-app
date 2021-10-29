import { Formik } from "formik";
import React from "react";
import * as yup from 'yup';
import SignUpForm from "./SignUpForm";

const initialValues = {
  signupUsername: '',
  signupPassword: '',
  signupPasswordConfirm: ''
}

const validationSchema = yup.object().shape({
  signupUsername: yup
    .string()
    .required('Username is required')
    .min(1,'Minimum length for username is 1 character')
    .max(30,'Maximum length for username is 30 characters'),
  signupPassword: yup
    .string()
    .required('Username is required')
    .min(5,'Minimum length for password is 5 character')
    .max(50,'Maximum length for password is 50 characters'),
  signupPasswordConfirm: yup
    .string()
    .required('Confirmation password is required')
    .oneOf([yup.ref('signupPassword'), null], "Passwords must match"),
})

const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit}/>}
    </Formik>
  );
}

export default SignUpContainer;