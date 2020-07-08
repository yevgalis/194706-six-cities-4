import React from 'react';
import renderer from 'react-test-renderer';
import PlacesSorting from './places-sorting.jsx';

it(`PlacesSorting component renders correctly`, () => {
  const tree = renderer
    .create(<PlacesSorting />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
