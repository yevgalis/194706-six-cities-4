import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';
import offers from '../../mocks/test/offers';

it(`Map renders correctly`, () => {
  const tree = renderer
    .create(
        <Map
          offers={offers}
          activeCard={1}
          type={`cities`}
        />, {
          createNodeMock: () => document.createElement(`div`)
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
