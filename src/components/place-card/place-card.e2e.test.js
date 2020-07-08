import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from './place-card.jsx';
import offers from '../../mocks/test/offers';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Test events on PlaceCard component`, () => {
  it(`Simulate card hover`, () => {
    const onCardHover = jest.fn();
    const card = shallow(
        <PlaceCard
          offer={offers[0]}
          cardType={`cities`}
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
