import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignInSection from '../components/SignInPage/SignInSection';
import renderer from 'react-test-renderer';
import DoctorInfoProvider from '../DoctorContext';
import { MemoryRouter } from 'react-router';

test('sign in section is rendering ', () => {
  render(
    <MemoryRouter>
      <DoctorInfoProvider>
        <SignInSection />
      </DoctorInfoProvider>
    </MemoryRouter>
  );
});

test('sign in page renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <DoctorInfoProvider>
          <SignInSection />
        </DoctorInfoProvider>
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('e-mail should be string', () => {
  const signIn = render(
    <MemoryRouter>
      <DoctorInfoProvider>
        <SignInSection />
      </DoctorInfoProvider>
    </MemoryRouter>
  );
  const input = signIn.getByPlaceholderText('E-mail');
  fireEvent.change(input, { target: { value: 'anything@anything.com' } });
  expect(input.value).toBe('anything@anything.com');
});
