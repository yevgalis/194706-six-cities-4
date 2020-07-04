import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsList from './reviews-list.jsx';

it(`Review component renders correctly`, () => {
  const reviews = [{
    id: 1,
    author: `Max`,
    profilePhoto: `/img/avatar-max.jpg`,
    rating: `80%`,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    datetime: `April 2019`
  }];

  const tree = renderer
    .create(
        <ReviewsList reviews={reviews} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
