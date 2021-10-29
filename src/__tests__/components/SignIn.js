/* eslint-disable jest/expect-expect */
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignInContainer from '../../components/SignInContainer';
// ...

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();
      const { debug, getByTestId } = render(<SignInContainer onSubmit={onSubmit}/>);
      debug;
      fireEvent.changeText(getByTestId('usernameInput'), 'Kalle')
      fireEvent.changeText(getByTestId('passwordInput'), 'password')
      fireEvent.press(getByTestId('loginSubmit'));
      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'Kalle',
          password: 'password',
        });
      });
    });
  });
});