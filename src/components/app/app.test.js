import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

it(`App renders correctly`, () => {
  const rentCount = 10;
  const rentOptions = [{
    id: 1,
    title: `Appartment listing`,
    type: `Apartment`,
    price: 110,
    rating: `100%`,
    isPremium: true,
    imgSrc: `img/apartment-01.jpg`
  }];

  const tree = renderer
    .create(
        <App
          rentCount={rentCount}
          rentOptions={rentOptions}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
