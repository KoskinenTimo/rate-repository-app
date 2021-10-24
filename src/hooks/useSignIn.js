import { useApolloClient, useMutation } from "@apollo/client";
import { useEffect } from "react";
import { CREDENTIALS } from "../graphql/mutations";
import useAuthStorage from '../hooks/useAuthStorage';


const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(CREDENTIALS);

  useEffect(() => {
    if(result && result.data) {
      console.log('setting auth token to storage');
      authStorage
        .setAccessToken(result.data.authorize.accessToken)
          .then(() => {
            apolloClient.resetStore();
          })
          .catch(e => {
            console.log(e);
          });
    }
  }, [result]);

  const signIn = async ({ username, password }) => {
    await mutate({
      variables: {
        credentials: {
          username:username,
          password:password
        }
      }
    });
    
    return result;  };

  return [signIn, result];
};

export default useSignIn;