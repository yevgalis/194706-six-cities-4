import React from 'react';
import renderer from 'react-test-renderer';
import Review from './review.jsx';

it(`Review component renders correctly`, () => {
  const review = {
    id: 1,
    author: `John`,
    profilePhoto: `/img/avatar-max.jpg`,
    rating: `100%`,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    datetime: `May 2019`
  };

  const tree = renderer
    .create(
        <Review review={review} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
