import React from 'react';
import renderer from 'react-test-renderer';
import Review from './review.jsx';
import reviews from '../../mocks/test/reviews';

it(`Review component renders correctly`, () => {
  const tree = renderer
    .create(
        <Review review={reviews[0]} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
