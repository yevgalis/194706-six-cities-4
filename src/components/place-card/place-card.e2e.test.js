import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from './place-card.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Test events on PlaceCard component`, () => {
  const offer = {
    id: 1,
    title: `Appartment listing`,
    type: `Apartment`,
    price: 110,
    rating: `100%`,
    isPremium: true,
    imgSrc: `img/apartment-01.jpg`
  };
  const onCardTitleClick = jest.fn();
  const onCardHover = jest.fn();

  it(`Simulate click on a card title`, () => {
    const card = shallow(
        <PlaceCard
          offer={offer}
          onCardTitleClick={onCardTitleClick}
          onCardHover={onCardHover}
        />
    );

    const cardTitle = card.find(`.place-card__name`);

    cardTitle.props().onClick();
    expect(onCardTitleClick.mock.calls.length).toBe(1);
  });

  it(`Simulate card hover`, () => {
    const card = shallow(
        <PlaceCard
          offer={offer}
          onCardTitleClick={onCardTitleClick}
          onCardHover={onCardHover}
        />
    );

    const cardElement = card.find(`.place-card`);

    cardElement.props().onMouseEnter();
    cardElement.props().onMouseLeave();

    expect(onCardHover).toHaveBeenCalledTimes(2);
    expect(onCardHover).toHaveBeenCalledWith(1);
    expect(onCardHover).toHaveBeenLastCalledWith(null);
  });
});
