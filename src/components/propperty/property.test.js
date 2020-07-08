import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Property from './property.jsx';
import offers from '../../mocks/test/offers';

it(`Property details component renders correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Property
            offers={offers}
            onCardHover={() => {}}
          />
        </BrowserRouter>, {
          createNodeMock: () => document.createElement(`div`)
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
