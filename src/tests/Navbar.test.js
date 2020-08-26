import React from 'react';
import Navbar from '../containers/Navbar/Navbar';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import DoctorInfoProvider from '../DoctorContext';

test('navbar renders correctly', () => {
  const tree = renderer
    .create(
      <DoctorInfoProvider>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </DoctorInfoProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
