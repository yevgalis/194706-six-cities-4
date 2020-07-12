import {createSelector} from "reselect";

export const getOffers = (state) => {
  return state.DATA.offers;
};

export const getSelectedCity = (state) => {
  return state.APP.city;
};

export const getCityOffers = createSelector(
    getOffers,
    getSelectedCity,
    (offers, city) => {
      return offers.filter((offer) => offer.city.name === city.name);
    }
);
