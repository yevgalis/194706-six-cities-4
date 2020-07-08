import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';
import offers from '../../mocks/test/offers';

it(`App component renders correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <App offers={offers} />
        </BrowserRouter>, {
          createNodeMock: () => document.createElement(`div`)
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
