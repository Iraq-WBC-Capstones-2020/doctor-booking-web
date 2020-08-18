import React from 'react';
import renderer from 'react-test-renderer';
import EditProfile from '../components/DashboardPage/EditProfile/EditProfile';
import { BrowserRouter } from 'react-router-dom';

test('EditProfile page run well ', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <EditProfile />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
