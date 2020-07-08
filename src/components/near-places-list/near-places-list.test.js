import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import NearPlacesList from './near-places-list.jsx';
import offers from '../../mocks/test/offers';

it(`NearPlacesList component renders correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <NearPlacesList
            offers={offers}
            onCardHover={() => {}}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
