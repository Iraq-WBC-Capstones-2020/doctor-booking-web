import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignInSection from '../components/SignInPage/SignInSection';
import renderer from 'react-test-renderer';
import SignIn from '../containers/SignInPage/SignIn';
test('sign in section is rendering ', () => {
  render(<SignInSection />);
});

test('sign in page renders correctly', () => {
  const tree = renderer.create(<SignIn />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('e-mail should be string', () => {
  const signIn = render(<SignInSection />);
  console.log(signIn);
  const input = signIn.getByPlaceholderText('E-mail');
  fireEvent.change(input, { target: { value: 'anything@anything.com' } });
  expect(input.value).toBe('anything@anything.com');
});
