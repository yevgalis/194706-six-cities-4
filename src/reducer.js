import {extend} from './utils';

const initialState = {
  city: `Amsterdam`,
  offers: [
    {
      id: 1,
      title: `Beautiful & luxurious apartment at great location`,
      type: `Apartment`,
      bedrooms: 3,
      capacity: 4,
      price: 120,
      rating: `80%`,
      isPremium: true,
      isBookmarked: false,
      features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
      imgSrc: `/img/apartment-01.jpg`,
      coordinates: [52.3909553943508, 4.85309666406198]
    },
    {
      id: 2,
      title: `Wood and stone place`,
      type: `Private room`,
      bedrooms: 1,
      capacity: 2,
      price: 80,
      rating: `80%`,
      isPremium: false,
      isBookmarked: true,
      features: [`Wi-Fi`, `Towels`, `Heating`, `Cabel TV`, `Fridge`],
      imgSrc: `/img/room.jpg`,
      coordinates: [52.369553943508, 4.85309666406198]
    },
    {
      id: 3,
      title: `Canal View Prinsengracht`,
      type: `Apartment`,
      bedrooms: 2,
      capacity: 3,
      price: 132,
      rating: `80%`,
      isPremium: false,
      isBookmarked: false,
      features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Baby seat`, `Kitchen`, `Cabel TV`, `Fridge`],
      imgSrc: `/img/apartment-02.jpg`,
      coordinates: [52.3909553943508, 4.929309666406198]
    },
    {
      id: 4,
      title: `Nice, cozy, warm big bed apartment`,
      type: `Apartment`,
      bedrooms: 3,
      capacity: 5,
      price: 180,
      rating: `100%`,
      isPremium: true,
      isBookmarked: false,
      features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
      imgSrc: `/img/apartment-03.jpg`,
      coordinates: [52.3809553943508, 4.939309666406198]
    }
  ]
};

const ActionTypes = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionTypes.CHANGE_CITY,
    payload: city
  }),
  getOffers: () => ({
    type: ActionTypes.GET_OFFERS,
    payload: null
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });
    case ActionTypes.GET_OFFERS:
      return extend(state, {
        offers: action.payload
      });
  }

  return state;
};

export {reducer, ActionTypes, ActionCreator};
