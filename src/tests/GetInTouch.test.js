import React from 'react';
import GetInTouch from '../components/HomePage/GetInTouch/GetInTouch';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

it('GetInTouch render correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <GetInTouch />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
