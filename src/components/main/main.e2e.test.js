import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from './main.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should card title be clicked`, () => {
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
  const onCardTitleClick = jest.fn();

  const main = shallow(
      <Main
        rentCount={rentCount}
        rentOptions={rentOptions}
        onCardTitleClick={onCardTitleClick}
      />
  );

  const cardTitle = main.find(`.place-card__name`);

  cardTitle.props().onClick();
  expect(onCardTitleClick.mock.calls.length).toBe(1);
});
