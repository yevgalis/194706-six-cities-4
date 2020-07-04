import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

it(`PlaceCard component renders correctly`, () => {
  const offer = {
    id: 1,
    title: `Appartment listing`,
    type: `Apartment`,
    bedrooms: 1,
    capacity: 2,
    price: 110,
    rating: `100%`,
    isPremium: true,
    isBookmarked: false,
    features: [`Wi-Fi`, `Towels`, `Heating`, `Cabel TV`, `Fridge`],
    imgSrc: `img/apartment-01.jpg`,
    coordinates: [52.3709553943508, 4.89309666406198]
  };

  const tree = renderer
    .create(
        <BrowserRouter>
          <PlaceCard
            offer={offer}
            cardType={`cities`}
            onCardTitleClick={() => {}}
            onCardHover={() => {}}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
