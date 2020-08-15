import React from 'react';
import renderer from 'react-test-renderer';
import EditProfile from '../components/EditProfile/EditProfile';

test('EditProfile page run well ', () => {
  const tree = renderer.create(<EditProfile />).toJSON();
  expect(tree).toMatchSnapshot();
});
