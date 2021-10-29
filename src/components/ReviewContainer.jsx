import { Formik } from "formik";
import React from "react";
import ReviewForm from "./ReviewForm";
import * as yup from 'yup';

const initialValues = {
  reviewRepoOwner: '',
  reviewRepoName: '',
  reviewRating: '',
  reviewText: ''
}

const validationSchema = yup.object().shape({
  reviewRepoOwner: yup
    .string()
    .required('Repository owner is required'),
  reviewRepoName: yup
    .string()
    .required('Repository name is required'),
  reviewRating: yup
    .number()
    .typeError('Rating must an integer')
    .integer('Rating must be an integer')
    .min(0,'Min rating is 0')
    .max(100, 'Max rating is 100')
    .required('Repository rating is required'),
  reviewText: yup
    .string()
});

const ReviewContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit}/>}
    </Formik>
  );
}

export default ReviewContainer;