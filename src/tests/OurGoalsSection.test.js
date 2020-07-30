import React from 'react';
import { render } from '@testing-library/react';
import OurGoals from '../components/OurGoals/OurGoals';
import renderer from 'react-test-renderer';
test('our goals section is rendering ', () => {
  render(<OurGoals />);
});

test('our goals section renders correctly', () => {
  const tree = renderer.create(<OurGoals />).toJSON();
  expect(tree).toMatchSnapshot();
});
