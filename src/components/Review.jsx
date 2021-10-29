import { useMutation } from "@apollo/client";
import React from "react";
import { useHistory } from "react-router";
import { CREATE_REVIEW } from "../graphql/mutations";
import ReviewContainer from "./ReviewContainer";

const Review = () => {
  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const [ mutate, result ] = useMutation(CREATE_REVIEW);

  const onSubmit = (values) => {
    console.log('adding form values to api');
    mutate({
      variables: {
        review: {
          repositoryName: values.reviewRepoName,
          ownerName: values.reviewRepoOwner,
          rating: Number(values.reviewRating),
          ...(values.text && {text: values.text})
        }
      }
    })
    .then(res => {
      console.log('review has been added');
      history.push(`/${res.data.createReview.repository.id}`);
    })
    .catch(e => {
      console.log(e.message);
    });    
  };

  return (
    <ReviewContainer onSubmit={onSubmit} />
  );
}

export default Review;