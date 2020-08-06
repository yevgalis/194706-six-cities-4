import {createSelector} from "reselect";

export const getOffers = (state) => {
  return state.DATA.offers;
};

export const getCity = (state) => {
  return state.APP.city;
};

export const getCitiesList = (state) => {
  return state.APP.citiesList;
};

export const getPropertyID = (state) => {
  return state.APP.propertyID;
};

export const getNearbyOffers = (state) => {
  return state.APP.nearbyOffers;
};

export const getCityOffers = createSelector(
    getOffers,
    getCity,
    (offers, city) => {
      return offers.filter((offer) => offer.city.name === city.name);
    }
);
