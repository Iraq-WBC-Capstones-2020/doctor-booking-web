import React from 'react';
import renderer from 'react-test-renderer';
import EditProfile from '../components/EditProfile/EditProfile';

<<<<<<< HEAD
test('EditProfile page run well ', () => {
=======
test('EditProfile page run well run well ', () => {
>>>>>>> c2ec59f3c94263134671ee9e923e6a75e5a0a383
  const tree = renderer.create(<EditProfile />).toJSON();
  expect(tree).toMatchSnapshot();
});
