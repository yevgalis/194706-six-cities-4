import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import CitiesList from './cities-list.jsx';

it(`CitiesList component renders correctly`, () => {
  const cities = [
    `Paris`,
    `Cologne`,
    `Brussels`,
    `Amsterdam`,
    `Hamburg`,
    `Dusseldorf`,
  ];

  const tree = renderer
    .create(
        <BrowserRouter>
          <CitiesList
            cities={cities}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
