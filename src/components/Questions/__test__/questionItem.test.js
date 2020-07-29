import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import QuestionItem from '../QuestionItem';

test('Question Item faq intro section is rendering  ', () => {
  render(<QuestionItem />);
});

test('Question Item section run well ', () => {
  const tree = renderer.create(<QuestionItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
