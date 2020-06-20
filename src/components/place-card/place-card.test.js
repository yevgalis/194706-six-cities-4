import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

it(`PlaceCard component renders correctly`, () => {
  const offer = {
    id: 1,
    title: `Appartment listing`,
    type: `Apartment`,
    price: 110,
    rating: `100%`,
    isPremium: true,
    imgSrc: `img/apartment-01.jpg`
  };

  const tree = renderer
    .create(
        <PlaceCard
          offer={offer}
          onCardTitleClick={() => {}}
          onCardHover={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
