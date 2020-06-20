import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

it(`Correctly renders main`, () => {
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
        <Main
          rentCount={rentCount}
          rentOptions={rentOptions}
          onCardTitleClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
