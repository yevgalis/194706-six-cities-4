import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

it(`App component renders correctly`, () => {
  const offersCount = 312;
  const offers = [{
    id: 1,
    title: `Appartment listing`,
    type: `Apartment`,
    price: 110,
    rating: `100%`,
    isPremium: true,
    imgSrc: `img/apartment-01.jpg`,
    coordinates: [52.3709553943508, 4.89309666406198]
  }];

  const tree = renderer
    .create(
        <App
          offersCount={offersCount}
          offers={offers}
        />, {
          createNodeMock: () => document.createElement(`div`)
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
