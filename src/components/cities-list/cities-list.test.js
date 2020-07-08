import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import CitiesList from './cities-list.jsx';
import cities from '../../mocks/test/cities';

it(`CitiesList component renders correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <CitiesList cities={cities} />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
