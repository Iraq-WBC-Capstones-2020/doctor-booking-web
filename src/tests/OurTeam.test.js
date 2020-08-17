import React from 'react';
import { render } from '@testing-library/react';
import OurTeam from '../components/AboutPage/OurTeamSection/OurTeam';
import renderer from 'react-test-renderer';
test('our team section is rendering ', () => {
  render(<OurTeam />);
});

test('our team section renders correctly', () => {
  const tree = renderer.create(<OurTeam />).toJSON();
  expect(tree).toMatchSnapshot();
});
