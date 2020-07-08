import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import NoOffers from './no-offers.jsx';

it(`NoOffers component renders correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <NoOffers />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
