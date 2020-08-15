import React from 'react';
import renderer from 'react-test-renderer';
import EditProfile from '../components/EditProfile/EditProfile';

<<<<<<< HEAD
test('EditProfile page run well run well ', () => {
=======
test('EditProfile page run well ', () => {
>>>>>>> master
  const tree = renderer.create(<EditProfile />).toJSON();
  expect(tree).toMatchSnapshot();
});
