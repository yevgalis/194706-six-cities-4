import React from 'react';
import renderer from 'react-test-renderer';
import PlacesList from './places-list.jsx';

it(`PlacesList component renders correctly`, () => {
  const offers = [{
    id: 1,
    title: `Appartment listing`,
    type: `Apartment`,
    price: 110,
    rating: `100%`,
    isPremium: true,
    imgSrc: `img/apartment-01.jpg`
  }];

  const tree = renderer
    .create(
        <PlacesList
          offers={offers}
          onCardTitleClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
