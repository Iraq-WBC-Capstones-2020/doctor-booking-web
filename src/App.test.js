import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders App correctly', () => {
  const { getAllByText } = render(<App />);
  const textElement = getAllByText(/doctor booking/i);
  expect(textElement).toBeTruthy();
});
