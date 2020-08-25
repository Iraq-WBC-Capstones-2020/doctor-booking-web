import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import DoctorInfoProvider from './DoctorContext';

test('renders App correctly', () => {
  render(
    <DoctorInfoProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </DoctorInfoProvider>
  );
});
