import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import PlacesList from './places-list.jsx';
import offers from '../../mocks/test/offers';

it(`PlacesList component renders correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <PlacesList
            offers={offers}
            onCardHover={() => {}}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
