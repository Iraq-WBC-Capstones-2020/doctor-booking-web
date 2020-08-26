import React from 'react';
import renderer from 'react-test-renderer';
import DoctorProfilePage from '../containers/DoctorProfilePage/DoctorProfilePage';
import { MemoryRouter } from 'react-router';

test('DoctorProfilePage run well ', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <DoctorProfilePage />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
