import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsList from './reviews-list.jsx';
import reviews from '../../mocks/test/reviews';

it(`Review component renders correctly`, () => {
  const tree = renderer
    .create(
        <ReviewsList reviews={reviews} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
