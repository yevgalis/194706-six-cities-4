import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';
import offers from '../../mocks/test/offers';

it(`PlaceCard component renders correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <PlaceCard
            offer={offers[0]}
            cardType={`cities`}
            onCardHover={() => {}}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
