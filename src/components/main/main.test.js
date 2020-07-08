import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import offers from '../../mocks/test/offers';

it(`Main page correctly renders`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Main
            offers={offers}
            hoveredCard={1}
            onCardHover={() => {}}
          />
        </BrowserRouter>, {
          createNodeMock: () => document.createElement(`div`)
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
